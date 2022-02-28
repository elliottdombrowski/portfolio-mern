import React from 'react';

import AnimatePage from '../../AnimatePage';
import WorkItems from '../../components/workItems/WorkItems';

import './styles.scss';
import './query.scss';

const Work = () => {
  return (
    <AnimatePage>
      <main className='work-wrapper'>
        <h1 className='workpage-header'>
          here's some of my work.
        </h1>
        <h2 className='workpage-subheader'>
          you'll find links to deployed pages, as well as github repositories.
        </h2>
        <WorkItems />
      </main>
    </AnimatePage>
  );
}

export default Work;