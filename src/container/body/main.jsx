import classes from './main.module.css';
import React from 'react';
import AboutMe from '../../components/main/aboutMe/aboutMe';
import EndSection from '../../components/endSection/endsection';
import Skills from '../../components/main/skills/skillComponent';
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
