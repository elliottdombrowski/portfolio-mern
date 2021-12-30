import React from 'react';
import './work.css';

function Work() {
    return (
        <div className='work-wrapper'>
            <div className='work-col'>
                <h2 className='work-header'>full stack</h2>
                <div className='work-img-container work-img-one'>
                    <div className="overlay">
                        <a target="_blank" rel="noreferrer" href="https://sheltered-sierra-22318.herokuapp.com/">
                            <img className="work-img" alt='cloudsource' src={require('../../assets/cloudsource.png').default} />
                        </a>
                    </div>
                    <div className='work-about'>
                        <div className='work-title'>
                            <h2 className='work-header work-title'>
                                CloudSource
                            </h2>
                        </div>

                        <div className='work-links'>
                            <a target="_blank" href="https://github.com/nlaramee120/CloudSource" rel="noreferrer">
                                <h2 className='work-header work-title work-links'>
                                    github
                                </h2>
                            </a>

                            <a target="_blank" href="https://sheltered-sierra-22318.herokuapp.com/" rel="noreferrer">
                                <h2 className='work-header work-links'>
                                    live
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='work-img-container work-img-one'>
                    <div className="overlay">
                        <a target="_blank" rel="noreferrer" href="https://github.com/elliottdombrowski/workout-tracker">
                            <img className="work-img" alt='cloudsource' src={require('../../assets/comingsoon.jpeg').default} />
                        </a>
                    </div>
                    <div className='work-about'>
                        <div className='work-title'>
                            <h2 className='work-header work-title'>
                                MongoDB Fitness Tracker
                            </h2>
                        </div>

                        <div className='work-links'>
                            <a target="_blank" href="https://github.com/elliottdombrowski/workout-tracker" rel="noreferrer">
                                <h2 className='work-header work-title work-links'>
                                    github
                                </h2>
                            </a>

                            <a target="_blank" href="#" rel="noreferrer">
                                <h2 className='work-header work-links'>
                                    live
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>



                <h2 className='work-header'>front end</h2>
                <div className='work-img-container work-img-two'>
                    <div className="overlay">
                        <a target="_blank" rel="noreferrer" href="https://elliottdombrowski.github.io/NU-Project-1/">
                            <img className="work-img" alt='swept' src={require('../../assets/swept.png').default} />
                        </a>
                    </div>
                    <div className='work-about'>
                        <div className='work-title'>
                            <h2 className='work-header work-title'>
                                Swept
                            </h2>
                        </div>

                        <div className='work-links'>
                            <a target="_blank" href="https://github.com/elliottdombrowski/NU-Project-1" rel="noreferrer">
                                <h2 className='work-header work-title work-links'>
                                    github
                                </h2>
                            </a>

                            <a target="_blank" href="https://elliottdombrowski.github.io/NU-Project-1/" rel="noreferrer">
                                <h2 className='work-header work-links'>
                                    live
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='work-img-container work-img-two'>
                    <div className="overlay">
                        <a target="_blank" rel="noreferrer" href="https://eli-js-portfolio.herokuapp.com/">
                            <img className="work-img" alt='swept' src={require('../../assets/portfolio.png').default} />
                        </a>
                    </div>
                    <div className='work-about'>
                        <div className='work-title'>
                            <h2 className='work-header work-title'>
                                Portfolio Page 1.0
                            </h2>
                        </div>

                        <div className='work-links'>
                            <a target="_blank" href="https://github.com/elliottdombrowski/my-portfolio-page" rel="noreferrer">
                                <h2 className='work-header work-title work-links'>
                                    github
                                </h2>
                            </a>

                            <a target="_blank" href="https://eli-js-portfolio.herokuapp.com/" rel="noreferrer">
                                <h2 className='work-header work-links'>
                                    live
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>



                <h2 className='work-header'>back end</h2>
                <div className='work-img-container work-img-three'>
                    <div className="overlay">
                        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1cxqyLEMC7wP87hqADJxqWYGc4uNxxpGZ/view">
                            <img className="work-img" alt='ecommerce backend' src={require('../../assets/orm1.png').default} />
                        </a>
                    </div>
                    <div className='work-about'>
                        <div className='work-title'>
                            <h2 className='work-header work-title'>
                                ORM-MySQL E-Commerce Back End
                            </h2>
                        </div>

                        <div className='work-links'>
                            <a target="_blank" href="https://github.com/elliottdombrowski/orm-sql-ecommerce-backend" rel="noreferrer">
                                <h2 className='work-header work-title work-links'>
                                    github
                                </h2>
                            </a>

                            <a target="_blank" href="https://drive.google.com/file/d/1cxqyLEMC7wP87hqADJxqWYGc4uNxxpGZ/view" rel="noreferrer">
                                <h2 className='work-header work-links'>
                                    live
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>      

                <div className='work-img-container work-img-three'>
                    <div className="overlay">
                        <a target="_blank" rel="noreferrer" href="https://evening-chamber-46130.herokuapp.com/notes">
                            <img className="work-img" alt='ecommerce backend' src={require('../../assets/expnotetaker.png').default} />
                        </a>
                    </div>
                    <div className='work-about'>
                        <div className='work-title'>
                            <h2 className='work-header work-title'>
                                ExpressJS Note Taker
                            </h2>
                        </div>

                        <div className='work-links'>
                            <a target="_blank" href="https://github.com/elliottdombrowski/express-note-taker" rel="noreferrer">
                                <h2 className='work-header work-title work-links'>
                                    github
                                </h2>
                            </a>

                            <a target="_blank" href="https://evening-chamber-46130.herokuapp.com/notes" rel="noreferrer">
                                <h2 className='work-header work-links'>
                                    live
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
    );
};

export default Work;