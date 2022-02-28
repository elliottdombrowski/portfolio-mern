import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import './query.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
const backHome = <FontAwesomeIcon icon={faHouse} className='fa-xl nav-item' />

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <ul className='footer'>
        <li className='nav-item'>
          <Link
            to='/'
            className='back-home'
          >
            {backHome}
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;