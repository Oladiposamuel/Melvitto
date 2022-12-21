import React, { useEffect, useState } from 'react';
import './project.css';
import OvrDose from '../../img/ovrdose-back.jpg';
import Summers from '../../img/summers-front.jpg';
import Night from '../../img/night-front.jpg';
import Soon from '../../img/soon-front.jpg';
import { motion } from 'framer-motion';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Project = () => {

  const [slide, setSlide] = useState(false);

  const [rightDistance, setRightDistance] = useState(0);

  const [page, setPage] = useState(1);

  const [changeCursor, setChangeCursor] = useState(false);

  const [drag, setDrag] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

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

  let viewportWidth = window.innerWidth;

  let distance = 0.6125 * viewportWidth;

  //console.log(rightDistance);

  const projectTitle = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'tween',
        delayChildren: 0,
        staggerChildren: .15,
        staggerDirection: 1,
        delay: .5,
      }
    }
  }

  const titleText = {
    hidden: {
      y: 200,
    },
    visible: {
      y: 0,
      transition: {
        type: 'tween',
        duration: 1,
      }
    }
  }

  const trackListBox = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'tween',
        delayChildren: 0,
        staggerChildren: .3,
        staggerDirection: 1,
        delay: 1,
      }
    }
  }

  const trackList = {
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

  function onTapStartRight () {
    //console.log('tap');
    setSlide(true);
    setRightDistance(rightDistance - distance);
    setPage(page + 1);
    setTimeout(() => {
      setSlide(false);
    }, 1)
    //console.log(slide);
    if (page > 4) {
      setPage(1);
    }
  }

  function onDragRight () {
    setSlide(true);

    setRightDistance(rightDistance - distance);
    //console.log(rightDistance);
    //console.log(distance);
    if(rightDistance == (0 - distance) * 3) {
      setRightDistance((0 - distance) * 3);
    }

    if (page < 4) {
      setPage(page + 1);
    }
    //console.log(page);
    setTimeout(() => {
      setSlide(false);
    }, 1)
  }

  function onTapStartLeft () {
    //console.log('tap');
    setSlide(true);
    setRightDistance(rightDistance + distance);
    setPage(page - 1);
    setTimeout(() => {
      setSlide(false);
    }, 1)
    //console.log(slide);
    if (page < 1) {
      setPage(1);
    }
  }

  function onDragLeft () {
    setSlide(true);
    setRightDistance(rightDistance + distance);
    //console.log(rightDistance);
    //console.log(distance);

    //console.log(' right distance is ' + rightDistance);
    //console.log(' distance is ' + distance);

    if(rightDistance == (0 + distance) * 0) {
      setRightDistance((0 + distance) * 0);
      //console.log('here');
    }

    if (page > 1) {
      setPage(page - 1);
    }
    //console.log(page);
    setTimeout(() => {
      setSlide(false);
    }, 1)
  }

  useEffect(() => {
    if (page === 4) {
      setTimeout(() => {
        document.getElementById('arrow-right').style.display = 'none';
      }, 700)
    }

    if (page !== 4) {
      setTimeout(() => {
        document.getElementById('arrow-right').style.display = 'block';
      }, 700)
    }
  }, [page]);

  useEffect(() => {
    if (page === 1) {
      document.getElementById('arrow-left').style.display = 'none';
      document.getElementById('arrow-right').style.display = 'block';
      setRightDistance(0);
    } else if (page !== 1) {
      setTimeout(() => {
        document.getElementById('arrow-left').style.display = 'block';
      }, 700)
    }
    //console.log(page);
  }, [page])

  const handleMouseEnter = () => {
    setChangeCursor(true);
  }

  const handleMouseLeave = () => {
    setChangeCursor(false);
  }

  return (
    <motion.div 
    drag="x"
    //animate={slide && {x: distance}}
    transition={{type: 'spring', duration: .5}}
    dragConstraints={ {left: 0, right: 0 } }
    dragMomentum={true}
    onDragStart={
      (event, info) => {

        setDrag(true);

        setTimeout(() => {
          setDrag(false);
        }, 1000)

        if(info.delta.x < 0) {
          onDragRight();
        }

        if(info.delta.x > 0) {
          onDragLeft();
        }
      }
    }

    className='project'>

        <motion.div
          //className='cursor'
          className= {`${changeCursor ? `cursor-2`: `cursor`} `}
          animate="default"
          variants={variants}

          // style={{
          //   width:  isHovering ? '1.5rem' : '1rem',
          //   height: isHovering ? '1.5rem' : '1rem',
          // }}
        />

      <Link to ='/' 
        className='home-link'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      > Home </Link>

      {page === 1 && <motion.div
      variants={trackListBox}
      initial="hidden"
      animate="visible"
      className='tracklist-box'
      >

        {page === 1 && 
        <>
          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>drifting thru ft Dayor</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>company ft Gabzy</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>falling for me ft Oladapo</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>run my way ft WANI</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>Je M'appelle ft Ayo Jay</li>
          </motion.ul>
        </>}

      </motion.div>}

      {page === 2 && <motion.div
      variants={trackListBox}
      initial="hidden"
      animate="visible"
      className='tracklist-box'
      >

        {page === 2 && 
        <>
          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>4 Nothin'</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>girls like me</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>come over</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>still think of you</li>
          </motion.ul>
        </>}

      </motion.div>}

      {page === 3 && <motion.div
      variants={trackListBox}
      initial="hidden"
      animate="visible"
      className='tracklist-box-1'
      >

        {page === 3 && 
        <>
          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>In fact ft Gabzy</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>close to me ft Gabzy & Krisirie</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>wait for you ft Oxlade</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>Santorini Coffee</li>
          </motion.ul>
        </>}

      </motion.div>}

      {page === 4 && <motion.div
      variants={trackListBox}
      initial="hidden"
      animate="visible"
      className='tracklist-box-1'
      >

        {page === 4 && 
        <>
          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>Usual</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>Stay ft Gabzy</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>her (Interlude) ft Wande Coal</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>The feels</li>
          </motion.ul>

          <motion.ul
          variants={trackList}
          className="tracklist"
          >
            <li>I Do</li>
          </motion.ul>
        </>}

      </motion.div>}

      {page === 1 && <motion.div 
      variants={projectTitle}
      initial="hidden"
      animate="visible"
      className='project-title-box'>
        
        {page===1 && 
        <>
          <motion.h1 
          variants= {titleText}
          className='project-title'>O
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            V
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            R
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            D
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            O
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            S
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            E
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            .
          </motion.h1>
        </>}

      </motion.div>}

      {page === 2 && <motion.div 
      variants={projectTitle}
      initial="hidden"
      animate="visible"
      className='project-title-box'>
        
        {page===2 && 
        <>
          <motion.h1 
          variants= {titleText}
          className='project-title'>
            S
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            U
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            M
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            M
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            E
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            R
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            S
          </motion.h1>
        </>}

      </motion.div>}

      {page === 3 && <motion.div 
      variants={projectTitle}
      initial="hidden"
      animate="visible"
      className='project-title-box'>
        
        {page===3 && 
        <>
          <motion.h1 
          variants= {titleText}
          className='project-title'>
            T
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            H
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            E
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            N
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            I
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            G
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            H
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            T
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            I
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            S
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            Y
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            O
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            U
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            N
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            G
          </motion.h1>
        </>}

      </motion.div>}

      {page === 4 && <motion.div 
      variants={projectTitle}
      initial="hidden"
      animate="visible"
      className='project-title-box'>
        
        {page===4 && 
        <>
          <motion.h1 
          variants= {titleText}
          className='project-title'>
            S
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            O
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            O
          </motion.h1>

          <motion.h1 
          variants= {titleText}
          className='project-title'>
            N
          </motion.h1>
        </>}

      </motion.div>}

        <motion.button
        onTapStart={onTapStartRight}
        className='arrow-right'
        id="arrow-right"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <HiOutlineArrowLongRight className='arrow-text' />

        </motion.button>

        <motion.button
        onTapStart={onTapStartLeft}
        className='arrow-left'
        id="arrow-left"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <HiOutlineArrowLongLeft className='arrow-text' />

        </motion.button>

        <motion.div
        className='title-box'>

        </motion.div>

        <span className='hold-and-drag'> hold and drag </span>

      <motion.div 
      animate={slide && {x: rightDistance}}
      transition={{type: 'tween', duration: 1.5}}
      className='project-content-box'>

        <motion.img
          animate={drag ? {skewX: 2.5 } : {skewX: 0}}
          transition={{type: 'spring', duration: 1}}
         src={OvrDose} alt='img' className='image' />
        <motion.img 
          animate={drag ? {skewX: 2.5 } : {skewX: 0}}
          transition={{type: 'spring', duration: 1}}
        src={Summers} alt='img' className='image' />
        <motion.img 
          animate={drag ? {skewX: 2.5 } : {skewX: 0}}
          transition={{type: 'spring', duration: 1}}
        src={Night} alt='img' className='image' />
        <motion.img 
          animate={drag ? {skewX: 2.5 } : {skewX: 0}}
          transition={{type: 'spring', duration: 1}}
        src={Soon} alt='img' className='image' />

      </motion.div>

    </motion.div>
  )
}

export default Project