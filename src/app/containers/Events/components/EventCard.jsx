/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { Text, Box, Heading } from 'rebass';

const paraStyle = {
  marginY: 0,
  display: 'block',
  textTransform: 'lowercase',
  '&:first-letter': {
    textTransform: 'uppercase',
  },
};

const headingStyle = {
  padding: '0 0 4px 0',
  fontWeight: 700,
  lineHeight: 1.5,
};

const dateString = date => {
  const dateFormat = new Date(date);
  return dateFormat.toDateString();
};
// Given more time, would've been nice to add icons and human readable times/no. of days the event runs,
// proximity to the location etc. An empty state if no result was found.

const EventCard = ({ event, getLocation }) => {
  const handleKeyDown = e => (e.keyCode === 13 ? getLocation(event) : null);
  return (
    <Box
      sx={{
        width: ['100%', '49.8%', '33%'],
        backgroundColor: '#fff',
        marginBottom: 2,
        border: '2px solid #8c7ae6',
        boxShadow: '2px 2px 3px #e4e4e4',
        borderRadius: 4,
        padding: 3,
        cursor: 'pointer',
      }}
      onKeyDown={handleKeyDown}
      onClick={getLocation(event)}
      role="presentation">
      <Box role="contentinfo">
        <Heading mb={10} sx={headingStyle}>
          {event.bezeichnung}
        </Heading>
        <Text mb={2} sx={paraStyle}>
          {/* Normally this is bad practice but since this is just static text, it will not cause any issues */}
          {event.veranstalter.split(',').map((info, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Text textTransform="capitalize" key={i}>
              {info}
            </Text>
          ))}
        </Text>
        <Text mb={2}>
          {event.strasse}, {event.plz} <br />
        </Text>
        <Text pb={3} fontWeight="bold">
          {dateString(event.von)}
          {event.von !== event.bis ? ` - ${dateString(event.bis)}` : ''}
        </Text>
        <Text
          pt={3}
          fontSize={2}
          sx={{
            borderTop: '1px dashed #e4e4e4',
          }}
          fontWeight="bold"
          color="secondary">
          {event.bemerkungen}
        </Text>
      </Box>
    </Box>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    bezeichnung: PropTypes.string.isRequired,
    plz: PropTypes.string.isRequired,
    veranstalter: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    time: PropTypes.string,
    strasse: PropTypes.string.isRequired,
    bemerkungen: PropTypes.string.isRequired,
    von: PropTypes.string.isRequired,
    bis: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }).isRequired,
  getLocation: PropTypes.func.isRequired,
};

export default EventCard;
