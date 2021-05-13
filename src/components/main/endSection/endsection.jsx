import classes from './endSection.module.css';
import { motion } from 'framer-motion';
import React from 'react';
import { Col, FlexboxGrid, Icon } from 'rsuite';
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem';

export default function EndSection () {
  return (
    <FlexboxGrid
      className={classes.overall}
      justify="space-around"
      align="center"
    >
      <FlexboxGrid justify={'space-around'}>
        <FlexboxGridItem componentClass={Col} lg={24}>
          <h1 className={classes.endSectionTitle}>Get in touch with me</h1>
        </FlexboxGridItem>
        <FlexboxGridItem componentClass={Col}>
          <motion.button
            className={classes.contactButton}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2, transition: { duration: 1 } }}
            whileTap={{ scale: 0.8 }}
          >
            Contact Me
          </motion.button>{' '}
        </FlexboxGridItem>
      </FlexboxGrid>
      <FlexboxGrid justify="space-between">
        <FlexboxGridItem componentClass={Col} lg="24">
          <h1 className={classes.endSectionTitle}>or share me</h1>
        </FlexboxGridItem>
        <div className={classes.iconContainer}>
          <div className={classes.icon}>
            <motion.button
              className={classes.socialButton}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              whileTap={{ scale: 0.8 }}
            >
              <a
                href="https://github.com/Wusabinga"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="github-alt" size="5x" />
              </a>
            </motion.button>
          </div>
          <div className={classes.icon}>
            <motion.button
              className={classes.socialButton}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              whileTap={{ scale: 0.8 }}
            >
              <a
                href="https://www.linkedin.com/in/stephan-l%C3%B6cher-2ab7871b2/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                <Icon icon="linkedin" size="5x" />{' '}
              </a>
            </motion.button>
          </div>
        </div>
      </FlexboxGrid>
    </FlexboxGrid>
  );
}
