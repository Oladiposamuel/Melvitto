import React from 'react';
import '../Loader/loader.css';
import { motion } from 'framer-motion';
import Ovrdose from '../../img/ovrdose-back.jpg';
import Night from '../../img/night-front.jpg';
import Summers from '../../img/summers-front.jpg';
import Soon from '../../img/soon-front.jpg';
import { useState } from 'react';
import { useEffect } from 'react';

const Loader = () => {

  const [project, setProject] = useState();
  //console.log(project);

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 4);
    //console.log(randomNumber);
    setProject(randomNumber);
  }, [])

  const textVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        delayChildren: 0,
        staggerChildren: .1,
        staggerDirection: 1,
        delay: 0,
      }
    }
  }

  const singleTextVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1,
      }
    }
  }

  return (
    <div className='loader'>
        
      {project === 3 && <motion.div 
      initial={{scaleY: 0}}
      animate={{scaleY: 1}}
      transition={{type: 'spring', duration: 2}}
      className='loader-image-box'>
        <motion.img
        initial={{scaleZ: 0}}
        animate={{scaleZ: 1}}
        transition={{type: 'spring', duration: 5}}
         src={Ovrdose} alt='img' className='loader-image' />
      </motion.div>}

      {project === 3 && <p className='loader-text'>Listen to
        <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        className='ep-name'
        >

          <motion.span
          variants={singleTextVariant}
          className='first-letter'
          >
            O
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            V
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            R
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            D
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            O
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            S
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            E
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            .
          </motion.span>

        </motion.div>
      </p>}


      {project === 2 && <motion.div 
      initial={{scaleY: 0}}
      animate={{scaleY: 1}}
      transition={{type: 'spring', duration: 2}}
      className='loader-image-box'>
        <motion.img
        initial={{scaleZ: 0}}
        animate={{scaleZ: 1}}
        transition={{type: 'spring', duration: 5}}
         src={Summers} alt='img' className='loader-image' />
      </motion.div>}

      {project === 2 && <p className='loader-text'>Listen to
        <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        className='ep-name'
        >

          <motion.span
          variants={singleTextVariant}
          className='first-letter'
          >
            S
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            U
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            M
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            M
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            E
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            R
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            S
          </motion.span>

        </motion.div>
      </p>}


      {project === 1 && <motion.div 
      initial={{scaleY: 0}}
      animate={{scaleY: 1}}
      transition={{type: 'spring', duration: 2}}
      className='loader-image-box'>
        <motion.img
        initial={{scaleZ: 0}}
        animate={{scaleZ: 1}}
        transition={{type: 'spring', duration: 5}}
         src={Night} alt='img' className='loader-image' />
      </motion.div>}

      {project === 1 && <p className='loader-text'>Listen to
        <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        className='ep-name'
        >

          <motion.span
          variants={singleTextVariant}
          className='first-letter'
          >
            T
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            H
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            E
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            N
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            I
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            G
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            H
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            T
          </motion.span>
          <motion.span
          variants={singleTextVariant}
          >
            I
          </motion.span>
          <motion.span
          variants={singleTextVariant}
          >
            S
          </motion.span>
          <motion.span
          variants={singleTextVariant}
          >
            Y
          </motion.span>
          <motion.span
          variants={singleTextVariant}
          >
            O
          </motion.span>
          <motion.span
          variants={singleTextVariant}
          >
            U
          </motion.span>
          <motion.span
          variants={singleTextVariant}
          >
            N
          </motion.span>
          <motion.span
          variants={singleTextVariant}
          >
            G
          </motion.span>

        </motion.div>
      </p>}



      {project === 0 && <motion.div 
      initial={{scaleY: 0}}
      animate={{scaleY: 1}}
      transition={{type: 'spring', duration: 2}}
      className='loader-image-box'>
        <motion.img
        initial={{scaleZ: 0}}
        animate={{scaleZ: 1}}
        transition={{type: 'spring', duration: 5}}
         src={Soon} alt='img' className='loader-image' />
      </motion.div>}

      {project === 0 && <p className='loader-text'>Listen to
        <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        className='ep-name'
        >

          <motion.span
          variants={singleTextVariant}
          className='first-letter'
          >
            S
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            O
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            O
          </motion.span>

          <motion.span
          variants={singleTextVariant}
          >
            N
          </motion.span>
        </motion.div>
      </p>}

    </div>
  )
}

export default Loader