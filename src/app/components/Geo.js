import React, { useRef } from 'react';
import { Box } from 'rebass';
import PropTypes from 'prop-types';
import { renderToString } from 'react-dom/server';

import mapStyle from 'app/assets/mapStyle';
import Map from './Map';

const Template = ({ eventName, placeDetails }) => {
  return (
    <div>
      <h3>{eventName}</h3>
      <p>{placeDetails.formatted_address}</p>
    </div>
  );
};

const Geo = ({ location, setPlace, placeId, title, place }) => {
  const ref = useRef();

  // Ideally we'd want to display these all on the map at once and then link back to the results in the view - based on volume it can get expensive
  // At the very least we should be able to start with the first result's pin on the map - I'm using a dummy event for demo.
  const links = [
    {
      coords: location,
      title: `Berlinale Film Festival`,
      placeId,
      content: renderToString(
        <Template eventName={title} placeDetails={place} id="infoWindow" />
      ),
    },
  ];

  const addMarkers = map => {
    links.forEach(link => {
      const infoWindow = new window.google.maps.InfoWindow({
        content: link.content,
        maxWidth: 360,
      });

      const marker = new window.google.maps.Marker({
        map,
        position: link.coords,
        animation: window.google.maps.Animation.DROP,
        title: link.title,
      });

      const service = new window.google.maps.places.PlacesService(map);
      service.getDetails(
        {
          placeId,
          fields: ['name', 'type', 'formatted_address'],
        },
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            // we can use this info to display richer information in the map's window on click like reviews etc.
            setPlace(results);
          }
        }
      );

      marker.addListener(`click`, () => {
        infoWindow.open(map, marker);
      });
    });
  };

  const mapProps = {
    options: {
      center: location,
      zoom: 12,
      styles: mapStyle,
    },

    onMount: addMarkers,
    onMountProps: links,
  };

  return (
    typeof window !== 'undefined' &&
    !!window.google && (
      <Box variant="card" width="100%" height="200" my={2} ref={ref}>
        <Map id="userMap" {...mapProps} />
      </Box>
    )
  );
};

Template.propTypes = {
  placeDetails: PropTypes.shape({
    formatted_address: PropTypes.string.isRequired,
  }).isRequired,
  eventName: PropTypes.string.isRequired,
};
Geo.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  place: PropTypes.shape({
    formatted_address: PropTypes.string.isRequired,
  }).isRequired,
  placeDetails: PropTypes.shape({
    formatted_address: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  placeId: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
};

export default Geo;
