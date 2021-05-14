/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import React from 'react';
import { Icon } from 'rsuite';
import classes from './selfMadeButton.module.css';

export default function SelfMadeButton (props) {
  let scaleValue = 0.4;

  if (screen.width >= 1440) {
    scaleValue = 0.8;
  }

  return (
    <>
      <div className={classes.icon}>
        <motion.button
          className={classes.socialButton}
          initial={{ scale: scaleValue }}
          whileHover={{ scale: 1.1, transition: { duration: 1 } }}
          whileTap={{ scale: 0.6, rotate: 360, transition: { duration: 1 } }}
        >
          <a
            href={props.socialLink}
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            {<Icon icon={props.icon} size={props.size} />}
          </a>
        </motion.button>
      </div>
    </>
  );
}
