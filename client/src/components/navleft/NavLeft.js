import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const bell = <FontAwesomeIcon icon={faBell} className='fa-2x fa-regular' />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} id='nav-linkedin' className='fa-xl navbar-icons linkedin-icon' />
const github = <FontAwesomeIcon icon={faGithub} id='nav-github' className='fa-xl navbar-icons github-small-icon' />


const NavLeft = () => {
  
  //TOGGLE OPACITY OF MEDIA LINKS
  const showNavItems = () => {
    document.getElementById('nav-wrapper').classList.toggle('active');
    // document.getElementById('nav-linkedin').classList.toggle('active');
    // document.getElementById('nav-github').classList.toggle('active');
  };

  return (
    <>
      <ul className='nav-left'>
        <li
          className='nav-item'
          onClick={showNavItems}
        >
          {bell}
        </li>
        
        <div id='nav-wrapper' className='nav-item-wrapper'>
          <li className='nav-item'>
            {linkedIn}
          </li>
          <li className='nav-item'>
            {github}
          </li>
        </div>
      </ul>
    </>
  );
}

export default NavLeft;