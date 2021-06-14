import classes from './endSection.module.css';
import { motion } from 'framer-motion';
import React from 'react';
import { Col, FlexboxGrid } from 'rsuite';
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem';
import SelfMadeButton from '../UI/Button/selfMadeButton';

export default function EndSection () {
  return (
    <FlexboxGrid
      className={classes.overall}
      justify="space-around"
      align="middle"
    >
      <FlexboxGrid justify="space-around">
        <FlexboxGridItem componentClass={Col} xs={24} sm={24} md={12} lg={24}>
          <h1 className={classes.endSectionTitle}>Get in touch with me</h1>
        </FlexboxGridItem>
        <FlexboxGridItem componentClass={Col}>
          <a href="mailto:s.loecher.slc@gmail.com">
            <motion.button
              className={classes.contactButton}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              whileTap={{
                scale: 0.8,
                rotate: 360,
                transition: { duration: 1 }
              }}
            >
              Contact Me
            </motion.button>{' '}
          </a>
        </FlexboxGridItem>
      </FlexboxGrid>
      <FlexboxGrid justify="space-around">
        <FlexboxGridItem componentClass={Col} xs={24} sm={24} md={12} lg={24}>
          <h1 className={classes.endSectionTitle}>or share me</h1>
        </FlexboxGridItem>
        <div className={classes.iconContainer}>
          <SelfMadeButton
            socialLink="https://github.com/sternenwarte88"
            icon="github-alt"
            size="5x"
          />
          <SelfMadeButton
            socialLink="https://www.linkedin.com/in/stephan-l%C3%B6cher-2ab7871b2/"
            icon="linkedin"
            size="5x"
          />
        </div>
      </FlexboxGrid>
    </FlexboxGrid>
  );
}
