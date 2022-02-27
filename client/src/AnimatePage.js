import React from 'react';
import { motion } from 'framer-motion';

import './App.css';

const animation = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0},
};

const AnimatePage = ({ children }) => {
  return (
    <>
      <motion.div
        variants={animation}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 1.2 }}
        className='animate-page'
      >
        {children}
      </motion.div>
    </>
  );
};
 
export default AnimatePage;