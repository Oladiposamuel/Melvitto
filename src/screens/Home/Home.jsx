import React, { useState, useEffect } from 'react';
import './home.css';
import { motion, AnimatePresence } from 'framer-motion';
import Mel1 from '../../img/Mel-1.jpg';
import Mel2 from '../../img/Mel-2.jpg';
import Mel3 from '../../img/Mel-3.jpg';
import Mel4 from '../../img/Mel-4.jpg';
import MelGab from '../../img/Mel-and-gabzy.jpg';
import Projects from '../../components/Projects/Projects';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const Home = () => {

    const [slides, setSlides] = useState([Mel1, Mel2, Mel3, Mel4]);

    const [refresh, setRefresh] = useState(true);

    const  [project, setProject] = useState(false);

    const [moveLeft, setMoveLeft] = useState(false);

    const [moveRight, setMoveRight] = useState(false);

    const [load, setLoad] = useState(true);

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    useEffect(() => {
      setTimeout(() => {
        setLoad(false);
      },3000)
    }, [])

    useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
          x: mousePosition.x + 0,
          y: mousePosition.y + 0,
        }
    }

    const slideVariant = {
      hidden: {
        y: 0
      },
      visible: {
        y: 0,
        transition: {
          type: 'tween',
          delayChildren: 0,
          staggerChildren: 2,
          staggerDirection: -1,
          delay: 5,
        }
      }
    }

    const imageVariant = {
      hidden: {
        x: 0,
        opacity: 1,
     },
      visible: {
        x: 800,
        opacity: 1,
        //zIndex: 1,
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }
      }
    }

    const homeVariant = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
      },
      exit: {
        y: '100vh',
        transition: {
          type: 'tween',
          delay: 0,
          duration: .5,
        }
      }
    }

    const showProjects = () => {
      setProject(true);

      setTimeout(() => {
        setProject(false);
      }, 7000);

    }

    const noShowProjects = () => {
      setProject(false);
    }

    useEffect(() => {
      let projectTextElement = document.getElementById('projects-id');

      setMoveLeft(false);
      setMoveRight(false);
      projectTextElement.addEventListener("mousemove", (e) => {
        //console.log('Mouse just moved!')

        let directionX = e.movementX || e.mozMovementX || e.webkitMovementX || 0;
        let directionY = e.movementY || e.mozMovementY || e.webkitMovementY || 0;

        if(directionX < 0) {
          //console.log('Left');
          setMoveLeft(true);
          setMoveRight(false);

        } else {
          setMoveLeft(false);
          setMoveRight(true);
          //console.log('Right');
        }

      })
    }, [])

  return (
    <motion.div 
      variants={homeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    className='home'>

      {load && <Loader />}

       <motion.span
        className='projects-box'>

          {project &&
          <motion.div
          initial={{x: 0, y: 0}}
          animate={{x: mousePosition.x - 600, rotateZ: moveLeft ? -2 : 2}}
          transition={{type: 'spring'}}
          className='projects'>
            <Projects />
          </motion.div>}

          <motion.h1
          whileHover={{y: [0, 10, -10, 0]}}
          onHoverStart={showProjects}
          onHoverEnd= {noShowProjects}
          transition={{type: 'tween', duration: 1}}
          className='projects-text'
          id='projects-id'

          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
            <Link to="/project" className='link'> Projects </Link>
          </motion.h1>
        </motion.span>

        <motion.div
            className='cursor'
            animate="default"
            variants={variants}

            style={{
              width:  isHovering ? '1.5rem' : '1rem',
              height: isHovering ? '1.5rem' : '1rem',
            }}
        />
        <div className='content-box'>
            <div className='profile-box'>
                <div className='icon-box'>
                    <img src={Mel2} alt='img' className='icon-img' />
                </div>

                <div className='icon-text'>
                    <h1 className='melvitto'>Melvitto</h1>
                    <h3 className='producer'>Producer</h3>
                </div>

                <motion.div 
                  initial={{rotate: 0}}
                  animate={{rotate: 360}}
                  whileHover= {{scale: [1, .98, 1]}}
                  transition={{type: 'spring', duration: 3, delay: 2, repeat: Infinity}}
                className='play-btn'>
                  <a href='https://open.spotify.com/artist/4Xj0nxVO4r7PLEaw7LRiBa?si=QybVxhnfSwq_cZi-kWrWWw' target='blank'>
                    <FaPlay className='play-icon' />
                  </a>
                </motion.div>


                
              <motion.h1
                whileHover={{y: [0, 10, -10, 0]}}
                onHoverStart={showProjects}
                onHoverEnd= {noShowProjects}
                transition={{type: 'tween', duration: 1}}
                className='projects-text-small-screen'
                id='projects-id'

                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                  <Link to="/project" className='link'>View Projects </Link>
              </motion.h1>
            

            </div>

            <motion.div
              variants={slideVariant}
              initial="hidden"
              animate="visible"
             className='swipe-box'>

              <motion.img
                //variants={imageVariant}
                src={Mel1}
                className='slide-img'
              />

              <motion.img
                variants={imageVariant}
                src={Mel2}
                className='slide-img'
              />

              <motion.img
                variants={imageVariant}
                src={Mel3}
                className='slide-img'
              />

              <motion.img
                variants={imageVariant}
                src={Mel4}
                className='slide-img'
              />
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Home