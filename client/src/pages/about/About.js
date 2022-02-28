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
              test one
            </span>

            <div className='about-body'>
              
            </div>
          </div>

          <div className='about-section about-section-two'>
            <span className='about-header'>
              test two
            </span>

            <div className='about-body'>

            </div>
          </div>

          <div className='about-section about-section-three'>
            <span className='about-header'>
              test three
            </span>
            
            <div className='about-body'>

            </div>
          </div>

        </section>
      </main>
    </AnimatePage>
  );
};
 
export default About;