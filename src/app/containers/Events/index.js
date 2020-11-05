/* eslint-disable  */

/** @jsx jsx */
import { Fragment, useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jsx } from 'theme-ui';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Wrapper from 'app/components/Wrapper';
import Loader from 'app/components/Loader';
import Search from 'app/components/Search';
import fadeTransition from 'app/assets/animations/fade.module.css';
import animate from 'app/assets/animations/animate.module.css';

import debounce from 'utils/debounce';

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
  useEffect(loadEvents, []);

  const handleChange = e => {
    const query = e.currentTarget.value;
    dispatch(actions.filterEvents(query));
  };

  // Since the debounce func will be created on every render we use the useCallback hook
  // to persist the same func
  const debouncedChange = useCallback(debounce(handleChange, 300), []);

  return (
    <Fragment>
      <Loader loading={loading} />
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
                />
              </CSSTransition>
            ))}
        </Wrapper>
      </TransitionGroup>
    </Fragment>
  );
};

export default Events;
