/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Image = ({ alt, src, rounded }) => {
  return (
    <section
      role="banner"
      sx={{
        overflow: 'hidden',
        borderRadius: rounded && 4,
      }}>
      <img
        sx={{
          maxWidth: '100%',
          transition: 'transform 0.4s, filter 0.8s ease-in-out',
          filter: 'contrast(100%) brightness(100%)',
          transform: 'scale(1.0)',
          '&:hover': {
            transform: 'scale(1.1)',
            filter: 'contrast(120%) brightness(110%)',
          },
        }}
        src={src}
        alt={alt}
      />
    </section>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  rounded: PropTypes.bool,
};

Image.defaultProps = {
  alt: '',
  src: '',
  rounded: false,
};

export default Image;
