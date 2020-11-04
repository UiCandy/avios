import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectEvents, selectLoading } from './selectors';
import * as actions from './actions';

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(actions.loadEvents());
  }, [dispatch]);

  return (
    <div>
      {loading && <h1>Loading....</h1>}
      {!!events.length && events.map(x => <p key={x.id}>{x.bezeichnung}</p>)}
    </div>
  );
};

export default Events;
