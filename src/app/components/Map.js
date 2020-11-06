/* eslint-disable react/prop-types */
import { functions, isEqual, omit } from 'lodash';
import React, { useState, useEffect, useRef } from 'react';

function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, { ...options }));
    if (window.google) {
      onLoad();
    }
  }, [options]);

  if (map && typeof onMount === `function`) onMount(map, onMountProps);
  return (
    <div
      id="map"
      style={{
        height: `40vh`,
        margin: `0`,
        paddingTop: `0`,
        borderRadius: `0.5em`,
        boxShadow: '2px 3px 2px #e4e4e4',
      }}
      {...{ ref, className }}
    />
  );
}

function shouldNotUpdate(props, nextProps) {
  const [funcs, nextFuncs] = [functions(props), functions(nextProps)];
  const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs));
  const noFuncChange =
    funcs.length === nextFuncs.length &&
    funcs.every(fn => props[fn].toString() === nextProps[fn].toString());
  return noPropChange && noFuncChange;
}

export default React.memo(Map, shouldNotUpdate);

Map.defaultProps = {
  options: {
    center: { lat: 0, lng: 0 },
    zoom: 12,
    onMountProps: [],
  },
};
