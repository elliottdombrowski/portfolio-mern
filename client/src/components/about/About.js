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
              i'm from chicago, pursuring a career in web and software development. <br /><br />
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
              in my time as a web developer, i have developed a passion for minimalist design- giving the user a simple, enjoyable experience with no frills. <br /><br />
              i'm passionate about building apps for people, for the people.
            </p>
          </div>
        </div>

        <div className="about-sect about-sect-three">
          <div className='about-sect-header about-sect-header-one'>
            <h3 className='about-sect-header-text about-sect-header-text-one'>who i am</h3>
          </div>

          <div className='about-sect-info about-sect-info-one'>
            <p className='about-sect-text'>
              i'm elliott. <br />
              i'm from chicago, pursuring a career in web and software development. <br /><br />
              in january 2022, i graduated northwestern university's full stack flex coding bootcamp, earning a certificate of completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;