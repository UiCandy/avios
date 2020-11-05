/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'react-router-dom';

import logo from 'app/assets/logo.png';
import Wrapper from './Wrapper';

const Header = () => {
  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        paddingY: 1,
        borderBottom: '1px solid #eee',
      }}>
      <Wrapper>
        <Link to="/">
          <img
            src={logo}
            sx={{
              width: 140,
            }}
            alt="logo"
          />
        </Link>
      </Wrapper>
    </header>
  );
};

export default Header;
