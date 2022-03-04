import React from 'react';

import AnimatePage from '../../AnimatePage';

import './styles.scss';
import './query.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
const aboutDown = <FontAwesomeIcon icon={faArrowCircleDown} className='fa-2x about-arrow' />

const About = () => {
  return (
    <AnimatePage>
      <main className='about-wrapper'>
        <section className='about-top'>
          <h1 className='about-header'>
            here's a little bit about me.
          </h1>
          {aboutDown}
        </section>

        <section className='about-bottom'>

          {/* MODULARIZE TO COMPONENTS LATER  */}
          <div className='about-section about-section-one'>
            <span className='about-header'>
              who i am.
            </span>

            <div className='about-body'>
              <h1 className='about-text'>
                i'm elliott.
                <br/>
                i'm a graduate of northwestern university's full stack coding bootcamp.
                <br/><br/>
                formerly production manager and co-founder of the 105 in naperville il,
                i find myself comfortable in leadership positions, though i love the dynamic of
                a tight-knit team environment.
                <br/><br/>
                i'm driven by user-first, minimalist design, artistic expression, and a motivation to built web and mobile applications
                to connect people driven to make change.
              </h1>
            </div>
          </div>

          <div className='about-section about-section-two'>
            <span className='about-header'>
              test two
            </span>

            <div className='about-body'>
              <h1 className='about-text'>

              </h1>
            </div>
          </div>

          <div className='about-section about-section-three'>
            <span className='about-header'>
              test three
            </span>

            <div className='about-body'>
              <h1 className='about-text'>
                
              </h1>
            </div>
          </div>

        </section>
      </main>
    </AnimatePage>
  );
};

export default About;