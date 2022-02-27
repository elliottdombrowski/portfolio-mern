import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Navbar from './components/navbar/Navbar';

import './App.scss';

// const App = () => <Container />;
const App = () => {
  const location = useLocation();
  return (
    <div className='App'>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        {/* <Routes
          key={location.pathname}
          location={location}
        >
          <Route path='/' element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='work' element={<Work />} />
          <Route path='contact' element={<Contact />} />
        </Routes> */}
      </AnimatePresence>
    </div>
  );
};

export default App;
