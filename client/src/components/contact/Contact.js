import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';
import './query.css';
import { formValidate } from '../../js/helpers';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');

  //SUBMIT NODEMAILER EMAIL FROM FORM
  const handleEmailSent = () => {
    axios.post('/send', { name, email, message })
      .then(function (data) { console.log(data) })
      .catch(function (err) { console.log(err) });
  };

  //HANDLE INPUT FORM ON CHANGE
  const handleInputChange = (evt) => {
    const { target } = evt;
    const inputType = target.name;
    const inputVal = target.value;

    if (inputType === 'email') {
      setEmail(inputVal);
    } else if (inputType === 'name') {
      setName(inputVal);
    } setMessage(inputVal);
  };

  //HANDLE FORM SUBMIT
  const formSubmit = (evt) => {
    evt.preventDefault();

    //IF NO NAME / MESSAGE / VALID EMAIL, RETURN GENERAL ERROR MESSAGE
    if (!formValidate(email) && !name && !message) {
      setErr('please enter all forms.');
      return false;
    };
    //IF NO VALID EMAIL BUT VALID NAME / MESSAGE, RETURN ERROR MESSAGE PROMPTING FOR EMAIL
    if (!formValidate(email) && name && message) {
      setErr('please enter a valid email.');
      return false;
    };
    //IF VALID EMAIL / MESSAGE BUT NO NAME, RETURN ERROR MESSAGE PROMPTING FOR NAME
    if (formValidate(email) && !name && message) {
      setErr('please enter your name.');
      return false;
    };
    //IF VALID EMAIL / NAME BUT NO MESSAGE, RETURN ERROR MESSAGE PROMPTING TO LEAVE A MESSAGE
    if (formValidate(email) && name && !message) {
      setErr('please leave a message.');
      return false;
    };

    handleEmailSent();
    //SET STATE BACK TO STARTING VALUE
    setName('');
    setEmail('');
    setMessage('');
    setErr('');
    return true;
  };

  return (
    <div className='contact-wrapper'>
      <div className='contact-form-wrapper'>
        <form className='contact-form' name="contact" id="contact">
          <h3 className='contact-header'>contact me.</h3>
          <input
            value={name}
            type="text"
            name="name"
            id="contact-name"
            className='contact-name-input contact-input'
            placeholder="your name"
            onChange={handleInputChange}
          />

          <input
            value={email}
            type="email"
            name="email"
            id="contact-email"
            className='contact-email-input contact-input'
            placeholder="your email"
            onChange={handleInputChange}
          />

          <textarea
            value={message}
            className='contact-form-text'
            type='message'
            name='message'
            onChange={handleInputChange}
          ></textarea>

          <div className='divider'></div>

          <input
            type="submit"
            className='contact-submit-btn contact-input'
            id='contact-submit'
            value='Coming Soon.'
            onClick={formSubmit}
            disabled
          />

          <div className='error-msg' id="err-msg">{err}</div>
        </form>
        <div className='resume'>
          <a className="res-hvr" href="resume.pdf" rel="noreferrer" download>
            download my resume here.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;