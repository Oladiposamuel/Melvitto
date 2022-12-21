import React, { useState } from 'react';
import './projects.css';
import { motion } from 'framer-motion';
import Soon from '../../img/soon-front.jpg';
import Night from '../../img/night-front.jpg';
import Summers from '../../img/summers-front.jpg';
import Ovrdose from '../../img/ovrdose-back.jpg';


const Projects = () => {

  const [show, setShow] = useState(true);

  const showFn = () => {
    setShow(true);
    console.log('show has been set to true');
  }

  const notShowFn = () => {
    setShow(false);
    console.log('show has been set to NOT true');
  }

  const imageBoxVariant = {
    hidden: {
      //opacity: 0,
      style: () => {setShow(false)},
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        delayChildren: 0,
        staggerChildren: 1.6,
      },
      ontransitionstart: () => {setShow(true)},
      ontransitionend: () => {setShow(false)},
    }
  }

  const imageVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }

  return (
    <>
      {show && <motion.div 
      variants={imageBoxVariant}
      initial='hidden'
      animate='visible'
      className='projects-component'>
        <motion.img
        variants={imageVariant}
          src={Soon} alt='img' className='project-img' />
        <motion.img
        variants={imageVariant}
          src={Night} alt='img' className='project-img' />
        <motion.img 
        variants={imageVariant}
          src={Summers} alt='img' className='project-img' />
        <motion.img 
        variants={imageVariant}
          src={Ovrdose} alt='img' className='project-img' />
      </motion.div> }
    </>
  )
}

export default Projects