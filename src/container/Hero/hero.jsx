import React from 'react';
import hero from '../../media/video/FHD_Techno_connect.webm';
import classes from './hero.module.css';
import Title from '../title/Title';

export default function Hero () {
  return (
    <>
      <div className={classes.videoContainer}>
        <Title/>
        <video className={classes.video} autoPlay loop muted>
          <source src={hero} type="video/webm" />
        </video>
      </div>
    </>
  );
}
