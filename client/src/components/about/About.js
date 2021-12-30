import React from 'react';
import './about.css';
import './query.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

library.add(
    faArrowAltCircleDown
);

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
                            i'm elliott. i'm from chicago, recently pursuing web and software development- graduating Northwestern University's full stack coding bootcamp in January 2022. but right now, i make sandwiches in a jewel osco deli. i'm also passionate about music and social justice issues.
                        </p>
                    </div>
                </div>

                <div className="about-sect about-sect-two">
                    <div className='about-sect-header about-sect-header-two'>
                        <h3 className='about-sect-header-text'>what i do</h3>
                    </div>

                    <div className='about-sect-info about-sect-info-two'>
                        <p className='about-sect-text'>
                            in my time with NWU, i've developed a strong working understanding of JavaScript, ReactJS, ExpressJS, NodeJS, MySQL, MongoDB, GraphQL, CSS, as well as best SEO and Mobile First practices, as well as fundamentals in Model-View-Controller, Object-Relational-Mapping, and OOP implementations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;