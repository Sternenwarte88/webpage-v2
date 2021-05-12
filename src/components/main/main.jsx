import classes from './main.module.css';
import React from 'react';
import AboutMe from './aboutMe/aboutMe';
import Skills from './skills/skills';

export default function MainSection () {
  return (
    <>
      <div className={classes.main}>
        <AboutMe />
        <Skills />
      </div>
    </>
  );
}
