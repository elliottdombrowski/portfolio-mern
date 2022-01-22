import React, { useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Homepage from './homepage/Homepage';
import About from './about/About';
import Work from './work/Work';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import $ from 'jquery';

export default function Container() {
  //SET DEFAULT PAGE STATE TO HOME
  const [curPage, setCurPage] = useState('Homepage');

  //USE EFFECT TO FADE IN HOMEPAGE ON PAGE LOAD
  useEffect(() => {
    $('#main').fadeOut(1);
    $('#main').promise().done(function () {
      $('#main').fadeIn(1000);
    });
  }, []);

  const pages = [
    <Homepage />,
    <About />,
    <Work />,
    <Contact />
  ];

  //HANDLES DYNAMIC PAGE RENDERING WITHOUT THE USE OF REACT-ROUTER-DOM
  const renderPage = () => {
    if (curPage === 'Homepage') {
      return pages[0];
    }
    if (curPage === 'About') {
      return pages[1];
    }
    if (curPage === 'Work') {
      return pages[2];
    }
    return pages[3];
  };

  //HANDLE FADEIN/FADEOUT ANIMATIONS DURING PAGE CHANGE
  //USING CUSTOM ROUTER LOGIC INSTEAD OF REACT-ROUTER-DOM TO HANDLE TRANSITIONS BETWEEN COMPONENTS.
  const handlePageChange = (page) => {
    //FADES OUT CURRENT PAGE => FADES IN SELECTED PAGE
    $('#main').fadeOut(1000);
    $('#main').promise().done(function () {
      setCurPage(page);
      $('#main').fadeIn(1000);
    });
  };

  return (
    <div className="navbar">
      {/* RENDERING CURRENT PAGE */}
      <Navbar curPage={curPage} handlePageChange={handlePageChange} />

      { /* WRAP RENDER PAGE FUNCTION IN DIV TO BE GRABBED BY HANDLEPAGECHANGE FUNCTION/PROP */}
      <div id="main">
        {renderPage()}
      </div>

      {/* ALWAYS RENDER FOOTER  */}
      <Footer curPage={curPage} handlePageChange={handlePageChange} />
    </div>
  );
};
