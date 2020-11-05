/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Wrapper = ({ sx, children, title, variant }) => {
  return (
    <section
      sx={{
        ...sx,
        variant,
      }}>
      {title && (
        <header>
          <h1>{title}</h1>
        </header>
      )}
      <div
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-between',
          padding: 1,
        }}>
        {children}
      </div>
    </section>
  );
};

Wrapper.propTypes = {
  sx: PropTypes.func,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  variant: PropTypes.string,
};

Wrapper.defaultProps = {
  sx: () => {},
  title: '',
  variant: 'wrapper.spaced',
};

export default Wrapper;
