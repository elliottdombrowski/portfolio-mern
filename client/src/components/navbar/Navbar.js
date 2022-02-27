import React from 'react';

import NavRight from './NavRight/NavRight';
import NavLeft from './NavLeft/NavLeft';

import './styles.scss';
import './query.scss';

const Navbar = () => {
  return (
    <nav className='nav-wrapper'>
      {/* NAV LEFT WRAPPER  */}
      <NavLeft />

      {/* NAV RIGHT WRAPPER  */}
      <NavRight />
    </nav>
  );
};

export default Navbar;