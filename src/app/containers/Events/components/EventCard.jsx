/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { Text, Box } from 'rebass';

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
  marginY: 0,
  fontWeight: 700,
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
      <section
        role="contentinfo"
        sx={{
          paddingY: 2,
        }}>
        <h2 sx={headingStyle}>{event.bezeichnung}</h2>
        <Text mb={2} sx={paraStyle}>
          {event.veranstalter}
        </Text>
        <Text mb={2}>
          {event.strasse}, {event.plz}
          {event.von}, {event.bis}
        </Text>
        <Text mb={2} fontWeight="bold">
          {event.bemerkungen}
        </Text>
      </section>
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
