import React, { useState } from 'react';

import AnimatePage from '../../AnimatePage';

import './styles.scss';
import './query.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faArrowTurnUp, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
const messageArrow = <FontAwesomeIcon icon={faArrowCircleDown} id='messageArrowDown' className='contact-arrow fa-2x' />
const arrowTurn = <FontAwesomeIcon icon={faArrowTurnUp} id='arrowTurn' className='fa-2x' />
const mail = <FontAwesomeIcon icon={faEnvelope} id='contactMail' className='fa-sm' />
const resume = <FontAwesomeIcon icon={faFile} id='contactResume' className='fa-sm' />

const Contact = () => {
  const showTextArea = () => {
    document.getElementById('contactMessage').classList.toggle('active');
    document.getElementById('messageArrowDown').classList.toggle('active');
  };

  return (
    <AnimatePage>
      <main className='contact-wrapper'>
        <form
          className='contact-form'
        >
          <label className='header-label'>
            contact me.
          </label>
          <div className='form-label-group'>
            <input
              className='name-input form-control'
              id='nameInput'
              type='text'
              placeholder='your name'
            />

            <label htmlFor='nameInput' className='form-label'>
              your name
            </label>
          </div>

          <div className='form-label-group'>
            <input
              className='email-input form-control'
              id='emailInput'
              type='text'
              placeholder='your email'
            />

            <label htmlFor='emailInput' className='form-label'>
              your email
            </label>
          </div>

          <label className='header-label subheader-label'>
            leave a message.
          </label>

          <div className='contact-message-wrapper'>
            <textarea
              className='contact-message'
              id='contactMessage'
            />
            <i onClick={showTextArea}>
              {messageArrow}
            </i>
          </div>

          <button
            className='submit-btn'
            disabled
          >
            coming soon.
          </button>
        </form>

        {/* TEMP */}
        <span className='temp-contact-wrapper'>
          <div className='temp-left'>
            <h1 className='temp-header temp-contact'>
              need to get in touch?
            </h1>
            {arrowTurn}
          </div>

          <div className='temp-right'>
            <a 
              href="mailto: elliottdombrowski@gmail.com" 
              className='temp-contact'
            >
              {mail}
              email me here.
            </a>

            <a 
              href="elliottdombrowskiresume.PDF" 
              className='temp-contact'
              download
            >
              {resume}
              get my resume here.
            </a>
          </div>
        </span>
      </main>
    </AnimatePage>
  );
};

export default Contact;