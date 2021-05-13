import classes from './main.module.css';
import React from 'react';
import AboutMe from './aboutMe/aboutMe';
import Skills from './skills/skills';
import EndSection from './endSection/endsection';

export default function MainSection () {
  return (
    <>
      <div className={classes.main}>
        <AboutMe />
        <Skills />
        <EndSection />
      </div>
    </>
  );
}
