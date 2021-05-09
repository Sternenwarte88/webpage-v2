import classes from './navigation.module.css';
import { motion } from 'framer-motion';
import React from 'react';
import { ImGithub, ImLinkedin, ImXing2 } from 'react-icons/im';
import logo from '../../media/svg/default 1.svg';

export default function Navigation () {
  return (
    <>
        <motion.div className={classes.navBar}>
        <img className={classes.logo} src={logo} />
        <ImLinkedin className={classes.icon}/>
        <ImXing2 className={classes.icon}/>
        <ImGithub className={classes.icon}/>
        </motion.div>
    </>
  );
}
