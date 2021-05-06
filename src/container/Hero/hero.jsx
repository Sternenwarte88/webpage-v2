import React, { useEffect, useRef } from 'react';
import hero from '../../media/video/FHD_Techno_connect.webm';
import classes from './hero.module.css';
import Title from '../title/Title';

export default function Hero () {
  const video = useRef();
  useEffect(() => {
    video.current.playbackRate = 0.45;
  }, []);
  return (
    <>
      <div className={classes.videoContainer}>
        <Title/>
        <video className={classes.video} ref={video} autoPlay loop muted >
          <source src={hero} type="video/webm" />
        </video>
      </div>
    </>
  );
}
