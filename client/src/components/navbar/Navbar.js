import React from 'react';

import NavLeft from '../NavLeft/NavLeft';
import NavRight from '../NavRight/NavRight';

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