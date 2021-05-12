import classes from './navigation.module.css';
import { motion } from 'framer-motion';
import React from 'react';
import { Icon, IconButton } from 'rsuite';
import logo from '../../media/svg/default 1.svg';

export default function Navigation () {
  return (
    <>
      <motion.div className={classes.navBar}>
        <img className={classes.logo} src={logo} />
        <IconButton
          icon={<Icon icon="github-alt" />}
          className={classes.icon}
        />
        <IconButton icon={<Icon icon="linkedin" />} className={classes.icon} />
        <IconButton icon={<Icon icon="xing" />} className={classes.icon} />
      </motion.div>
    </>
  );
}
