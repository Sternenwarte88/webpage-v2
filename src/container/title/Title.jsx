import React from 'react';
import Quote from '../Quote/quote';
import classes from './title.module.css';
import { motion } from 'framer-motion';
export default function Title () {
  const opacityAnimation = {
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 3,
        when: 'beforeChildren',
        staggerChildren: 3
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    }
  };

  return (
    <motion.div animate="visible" initial="hidden" variants={opacityAnimation} className={classes.title_container}>

        <motion.h1 opacityAnimation={opacityAnimation} variants={opacityAnimation} className={classes.title}>The world is changing,</motion.h1>
        <motion.h2 opacityAnimation={opacityAnimation} variants={opacityAnimation} className={classes.title}>and we can influence it!</motion.h2>
        <motion.hr opacityAnimation={opacityAnimation} variants={opacityAnimation}/>
        <motion.div opacityAnimation={opacityAnimation} variants={opacityAnimation} className={classes.quote} ><Quote/> </motion.div>

    </motion.div>
  );
}
