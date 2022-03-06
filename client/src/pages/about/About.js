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
              what i do.
            </span>

            <div className='about-body'>
              <h1 className='about-text'>
                i'm an artistically driven person; before shifting my career towards software development,
                i co-founded the 105, an event venue located under a recording studio in downtown naperville, il.
                <br/><br/>
                as a musician myself, it was thrilling to be involved in building a community of like-minded artists.
                <br/><br/>
              </h1>
            </div>
          </div>

          <div className='about-section about-section-three'>
            <span className='about-header'>
              what i know.
            </span>

            <div className='about-body'>
              <h1 className='about-text'>
              through northwestern university, i studied an array of skills for web development,
                including SEO, MVC, OOP, PWA, REST apis and mobile-first design.
                i also studied workplace standards with git, scrum, and agile workflows.

                <table className='skills-table'>
                  <tc className='skills-table-column'>
                    <th className='table-header'>front end</th>
                    <tr>react.js</tr>
                    <tr>javascript</tr>
                    <tr>jquery</tr>
                    <tr>html</tr>
                    <tr>css</tr>
                    <tr>scss / sass</tr>
                  </tc>
                  <tc className='skills-table-column'>
                    <th className='table-header'>back end</th>
                    <tr>node.js</tr>
                    <tr>express.js</tr>
                    <tr>graphql</tr>
                    <tr>jwt</tr>
                    <tr>mongodb</tr>
                    <tr>mysql</tr>
                  </tc>
                </table>

                i'm continuing learning with java and react native.
              </h1>
            </div>
          </div>

        </section>
      </main>
    </AnimatePage>
  );
};

export default About;