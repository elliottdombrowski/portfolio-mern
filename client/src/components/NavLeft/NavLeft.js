import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const github = <FontAwesomeIcon icon={faGithub} className='fa-2x github-icon' />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} id='nav-linkedin' className='fa-xl navbar-icons linkedin-icon' />
const githubOption = <FontAwesomeIcon icon={faGithub} id='nav-github' className='fa-xl navbar-icons github-small-icon' />

const NavLeft = () => {
  
  //TOGGLE OPACITY OF MEDIA LINKS
  const showNavItems = () => {
    document.getElementById('nav-linkedin').classList.toggle('active');
    document.getElementById('nav-github').classList.toggle('active');
  };

  return (
    <>
      <ul className='nav-left'>
        <li
          className='nav-item'
          onClick={showNavItems}
        >
          {github}
        </li>
        <li className='nav-item'>
          {linkedIn}
        </li>
        <li className='nav-item'>
          {githubOption}
        </li>
      </ul>
    </>
  );
}

export default NavLeft;