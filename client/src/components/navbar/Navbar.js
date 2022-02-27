import React from 'react';

import NavLeft from '../navleft/NavLeft';
import NavRight from '../navright/NavRight';

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