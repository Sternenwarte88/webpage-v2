import React from 'react';
// import Quote from '../Quote/quote'; //! missing dependency on other API
import classes from './title.module.css';
import { motion } from 'framer-motion';
export default function Title () {
  const opacityAnimation = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'backInOut',
        type: 'spring',
        bounce: 0.4,
        duration: 3,
        when: 'beforeChildren',
        staggerChildren: 3
      }
    },
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        when: 'afterChildren'
      }
    }
  };

  const scale = {
    scale: [1, 1.5, 1.5, 1, 1],
    rotate: [0, 360, 360, 0, 0],
    transition: { duration: 5 }
  };

  return (
    <motion.div
      animate="visible"
      initial="hidden"
      variants={opacityAnimation}
      className={classes.title_container}
    >
      <motion.h1
        whileHover={scale}
        opacityAnimation={opacityAnimation}
        variants={opacityAnimation}
        className={classes.title}
      >
        The world is changing,
      </motion.h1>
      <motion.h2
        whileHover={scale}
        opacityAnimation={opacityAnimation}
        variants={opacityAnimation}
        className={classes.title}
      >
        and we can influence it!
      </motion.h2>
      <motion.hr
        whileHover={scale}
        opacityAnimation={opacityAnimation}
        variants={opacityAnimation}
      />
      {/* <motion.div whileHover={scale} opacityAnimation={opacityAnimation} variants={opacityAnimation} className={classes.quote} ><Quote/> </motion.div> */}
    </motion.div>
  );
}
