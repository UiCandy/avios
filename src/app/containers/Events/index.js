/** @jsx jsx */
import { Fragment, useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jsx } from 'theme-ui';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getGeocode, getLatLng } from 'use-places-autocomplete';

import Wrapper from 'app/components/Wrapper';
import Loader from 'app/components/Loader';
import Search from 'app/components/Search';
import fadeTransition from 'app/assets/animations/fade.module.css';
import animate from 'app/assets/animations/animate.module.css';

import debounce from 'utils/debounce';

import Geo from 'app/components/Geo';
import EventCard from './components/EventCard';

import * as actions from './actions';
import { selectEvents, selectLoading } from './selectors';

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const loadEvents = () => {
    if (!events.length) {
      dispatch(actions.loadEvents());
    }
  };
  const loading = useSelector(selectLoading);

  // I would modularize the maps component a bit further since it's muddying up the context of the main events component but for now I've picked a feature packed launch.
  const [location, setLocation] = useState({
    lat: 52.517619,
    lng: 13.2334081,
  });
  const [title, setTitle] = useState('Berlinale Film Festival');
  const [placeId, setPlaceId] = useState('ChIJq8puxwJXqEcRsNUtmRuKGg0');

  const [place, setPlace] = useState({
    formatted_address: '',
  });

  useEffect(loadEvents, []);

  const handleChange = e => {
    const query = e.currentTarget.value;
    dispatch(actions.filterEvents(query));
  };

  // Since the debounce func will be created on every render we use the useCallback hook
  // to persist the same func
  const debouncedChange = useCallback(debounce(handleChange, 300), []);

  const updateMap = coords => {
    setLocation(coords);
  };

  const updatePlaceId = id => {
    setPlaceId(id);
  };

  const updateTitle = name => {
    setTitle(name);
  };

  const handleSelect = event => () => {
    getGeocode({ address: `${event.strasse} ${event.plz}` })
      .then(results => {
        const locationId = results[0].event_id;
        updatePlaceId(locationId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return getLatLng(results[0]);
      })
      .then(({ lat, lng }) => {
        setLocation({ lat, lng });
        updateTitle(event.bezeichnung);
        updateMap({ lat, lng });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('😱 Error: ', error);
      });
  };

  return (
    <Fragment>
      <Loader loading={loading} />
      <Geo
        place={place}
        title={title}
        placeId={placeId}
        setPlace={setPlace}
        location={location}
      />
      <Search handleChange={debouncedChange} />
      {/* TransitionGroup CSSTransition doesn't play well with module scoped css currently */}
      <TransitionGroup sx={{ flexGrow: 1 }}>
        <Wrapper title="Trending Events" variant="wrapper.row">
          {!!events.length &&
            events.map(event => (
              <CSSTransition
                key={event.id}
                timeout={200}
                classNames={fadeTransition}>
                <EventCard
                  event={event}
                  key={event.id}
                  className={animate.entryFade}
                  handleSelect={handleSelect}
                />
              </CSSTransition>
            ))}
        </Wrapper>
      </TransitionGroup>
    </Fragment>
  );
};

export default Events;
