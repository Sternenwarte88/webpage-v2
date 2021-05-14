import classes from './navigation.module.css';
import { motion } from 'framer-motion';
import React from 'react';
import logo from '../../media/svg/default 1.svg';
import SelfMadeButton from '../UI/Button/selfMadeButton';

export default function Navigation () {
  return (
    <>
      <motion.div className={classes.navBar}>
        <img className={classes.logo} src={logo} size="5x" />
        <SelfMadeButton
          icon="github-alt"
          size="5x"
          socialLink="https://github.com/Wusabinga"
        />
        <SelfMadeButton
          icon="linkedin"
          size="5x"
          socialLink="https://www.linkedin.com/in/stephan-l%C3%B6cher-2ab7871b2/"
        />

        {/* <IconButton
          size="lg"
          circle
          color="#001932"
          icon={<Icon icon="xing" />}
          className={classes.icon}
        /> */}
      </motion.div>
    </>
  );
}
