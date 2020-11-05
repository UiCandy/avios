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
  fontSize: 3,
  padding: '0 0 4px 0',
  fontWeight: 700,
  lineHeight: 1.5,
};

const dateString = date => {
  const dateFormat = new Date(date);
  return dateFormat.toDateString();
};
// Given more time, would've been nice to add icons and human readable times/no. of days the event runs, proximity to the location etc.

const EventCard = ({ event }) => {
  return (
    <Box
      sx={{
        width: ['100%', '49.8%', '33%'],
        backgroundColor: '#fff',
        marginBottom: 4,
        border: '2px solid #8c7ae6',
        borderRadius: 4,
        padding: 3,
        cursor: 'pointer',
      }}
      role="presentation">
      <Box
        role="contentinfo"
        sx={{
          paddingY: 2,
        }}>
        <Heading mb={10} sx={headingStyle}>
          {event.bezeichnung}
        </Heading>
        <Text mb={2} sx={paraStyle}>
          {event.veranstalter
            .split(',')
            .reduce((all, cur) => [...all, <br />, cur])}
        </Text>
        <Text mb={2}>
          {event.strasse}, {event.plz} <br />
        </Text>
        <Text mb={2} fontWeight="bold">
          {dateString(event.von)}
          {event.von !== event.bis ? ` - ${dateString(event.bis)}` : ''}
        </Text>
        <Text mb={2} fontWeight="bold" color="secondary">
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
};

export default EventCard;
