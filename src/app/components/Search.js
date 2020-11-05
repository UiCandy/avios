/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const style = {
  width: '100%',
  flexGrow: 1,
  marginTop: 4,
  outline: 'none',
  padding: 2,
  fontSize: 4,
  fontFamily: 'body',
  border: '2px solid #444',
  borderRadius: 4,
  transition: '0.3s all ease-in-out',
  boxShadow: '2px 3px 2px #e4e4e4',
  '&:focus': {
    borderColor: 'primary',
  },
};

const Search = ({ handleChange }) => {
  return (
    <input
      sx={style}
      type="search"
      placeholder="Find amazing events nearby..."
      onChange={handleChange}
    />
  );
};

Search.propTypes = {
  handleChange: PropTypes.func,
};

Search.defaultProps = {
  handleChange: () => {},
};

export default Search;
