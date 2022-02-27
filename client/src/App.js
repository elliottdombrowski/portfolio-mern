import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

// import Homepage from './components/homepage/Homepage';
// import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
// import About from './components/about/About';
// import Work from './components/work/Work';
// import Contact from './components/contact/Contact';
// import Container from './components/Container';

import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Homepage from './pages/Homepage/Homepage.js';
import About from './pages/About/About.js';
import Work from './pages/Work/Work.js';
import Contact from './pages/Contact/Contact.js';

import './App.scss';

// const App = () => <Container />;
const App = () => {
  const location = useLocation();
  return (
    <div className='App'>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes
          key={location.pathname}
          location={location}
        >
          <Route path='/' element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='work' element={<Work />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default App;
