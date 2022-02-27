import React from 'react';
import { Link } from 'react-router-dom';

const NavRight = () => {
  const mobileMenu = () => {
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('nav-right').classList.toggle('active');
  };
  
  const closeMobileMenu = () => {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('nav-right').classList.remove('active');
  }

  //WINDOW EVENTS FOR MOBILE NAVBAR
  window.onscroll = () => {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('nav-right').classList.remove('active');
  };
  
  return (
    <>
      <ul
        className='nav-right'
        id='nav-right'
      >
        <li 
          className='nav-item'
          onClick={closeMobileMenu}
        >
          <Link
            to='about'
            className='nav-link nav-item'
          >
            about
          </Link>
        </li>

        <li 
          className='nav-item'
          onClick={closeMobileMenu}
        >
          <Link
            to='/work'
            className='nav-link nav-item'
          >
            work
          </Link>
        </li>

        <li 
          className='nav-item'
          onClick={closeMobileMenu}
        >
          <Link
            to='/contact'
            className='nav-link nav-item'
          >
            contact
          </Link>
        </li>
      </ul>

      {/* HAMBURGER MENU  */}
      <div
        className='hamburger'
        id='hamburger'
        onClick={mobileMenu}
      >
        <span className='bar' id='bar' />
        <span className='bar' id='bar' />
        <span className='bar' id='bar' />
      </div>
    </>
  );
};

export default NavRight;