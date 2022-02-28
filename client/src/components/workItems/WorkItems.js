import React from 'react';

import './styles.scss';
import './query.scss';

const workItem = [
  {
    id: 1,
    workTitle: 'Swept 2.0',
    workDesc: 'Swept 2.0 is a MERN stack application built for Chicago residents. Users are provided with their location-specific parking restrictions for Street Sweeper and Snow Plow schedules.',
    workTech: 'Swept 2.0 is built with JavaScript, ReactJS, MongoDB, GraphQL, JWT, and CSS.',
    workImg: 'swept.png',
    workRepo: 'https://github.com/elliottdombrowski/SWEPT-02',
    workLive: 'https://swept.herokuapp.com/',
    workAlt: 'Swept!'
  },
  {
    id: 2,
    workTitle: 'Cloudsource',
    workDesc: 'Cloudsource is a talent-aquisition platform for small business to find freelance developer work.',
    workTech: 'Cloudsource is built with JavaScript, ExpressJS, MySQL, Handlebars, HTML, and CSS.',
    workImg: 'cloudsource.png',
    workRepo: 'https://github.com/nlaramee120/CloudSource',
    workLive: 'https://sheltered-sierra-22318.herokuapp.com/',
    workAlt: 'Cloudsource'
  },
  {
    id: 3,
    workTitle: 'MongoDB Workout Tracker',
    workDesc: 'MongoDB Workout Tracker is a small web application designed to help users track and manage their workouts.',
    workTech: 'Workout Tracker is built with JavaScript, MongoDB, ExpressJS, HTML, and CSS.',
    workImg: 'workout.png',
    workRepo: 'https://github.com/elliottdombrowski/workout-tracker',
    workLive: 'https://mongo-workouttracker.herokuapp.com/?id=61e30032ce50db0016827ab5',
    workAlt: 'MongoDB Workout Tracker'
  }
];

const WorkItems = () => {
  return (
    <section className='work-item-wrapper'>
      {
        // MAP OVER WORK ITEMS ARRAY 
        workItem.map((singleItem) => {
          return (
            <div className='work-card' key={singleItem.id}>
              {/* WORK TITLE  */}
              <h1 className='work-header'>
                {singleItem.workTitle}
              </h1>

              {/* WORK DESCRIPTION  */}
              <p className='work-desc'>
                {singleItem.workDesc}
              </p>

              {/* WORK IMG  */}
              <img
                className='work-img'
                src={require(`./assets/${singleItem.workImg}`)}
                alt={singleItem.workAlt}
              />

              <div className='work-link-wrapper'>
                {/* WORK TECHSTACK  */}
                <p className='work-tech'>
                  {singleItem.workTech}
                </p>

                <div className='work-link-inner'>
                  {/* LINK TO REPO  */}
                  <a
                    className='work-link'
                    href={singleItem.workRepo}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>

                  {/* LINK TO LIVE DEPLOYMENT  */}
                  <a
                    className='work-link'
                    href={singleItem.workLive}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          );
        })
      }
    </section>
  );
};

export default WorkItems;