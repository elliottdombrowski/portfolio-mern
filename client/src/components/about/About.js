import React from 'react';

import './about.css';
import './query.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

const arrow = <FontAwesomeIcon icon={faArrowAltCircleDown} />

function About() {
  return (
    <div className='about-wrapper'>
      <div className='about-top'>
        <h2 className='about-header'>
          here's a little bit about me...
        </h2>
        <i className='fa-2x about-arrow-down'>{arrow}</i>
      </div>

      <div className='about-bottom'>
        <div className="about-sect about-sect-one">
          <div className='about-sect-header about-sect-header-one'>
            <h3 className='about-sect-header-text about-sect-header-text-one'>who i am</h3>
          </div>

          <div className='about-sect-info about-sect-info-one'>
            <p className='about-sect-text'>
              i'm elliott. <br />
              i'm from chicago, pursuring a career in web and software development. <br />
              in january 2022, i graduated northwestern university's full stack flex coding bootcamp, earning a certificate of completion.
            </p>
          </div>
        </div>

        <div className="about-sect about-sect-two">
          <div className='about-sect-header about-sect-header-two'>
            <h3 className='about-sect-header-text'>what i do</h3>
          </div>

          <div className='about-sect-info about-sect-info-two'>
            <p className='about-sect-text'>
              in my time with NWU, i've developed a strong working understanding of JavaScript, ReactJS, ExpressJS, NodeJS, MySQL, MongoDB, GraphQL, CSS, as well as SEO and Mobile First best practices. <br />
              i am currently continuing education with Java and React Native.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;