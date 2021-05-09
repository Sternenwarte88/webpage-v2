import classes from './main.module.css';
import React from 'react';
import AboutMe from './aboutMe/aboutMe';

export default function MainSection () {
  return (
    <>
    <div className={classes.main}>

    <AboutMe/>
    </div>
    </>
  );
}
