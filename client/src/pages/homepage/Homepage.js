import React from 'react';

import AnimatePage from '../../AnimatePage';

import './styles.scss';
import './query.scss';

const Homepage = () => {
  return (
    <AnimatePage>
      <main className='homepage-wrapper'>
        <div className='homepage-text'>
          <h1 className='homepage-header'>
            elliott dombrowski
          </h1>
          <h2 className='homepage-subheader'>
            full stack web developer.
          </h2>
        </div>
        {/* <Numbers /> */}
      </main>
    </AnimatePage>
  );
}

export default Homepage;