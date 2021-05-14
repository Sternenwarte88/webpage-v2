import classes from './aboutMe.module.css';
import React from 'react';
import profilePicture from '../../../media/webp/profile.webp';

export default function AboutMe () {
  return (
    <>
      <div className={classes.main}>
        <h1 className={classes.title}>About Me</h1>
        <p className={classes.aboutMe}>
          <img
            className={classes.profilePicture}
            src={profilePicture}
            alt="profilePicture"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra cras
          vehicula faucibus egestas sagittis, ut proin purus. Mattis congue
          semper nisl id ipsum dictum. Posuere luctus suspendisse non enim donec
          sem. Vestibulum porta neque vehicula aliquam nam nibh a. Amet mauris,
          pharetra suspendisse velit pulvinar. Laoreet neque arcu netus
          venenatis. Potenti faucibus sapien pulvinar quisque vitae nisl netus
          pulvinar consectetur. Facilisis at quam semper aliquet interdum diam
          lectus fermentum. Purus id congue feugiat tortor purus proin libero.
          Nam eu pharetra ultricies mauris massa posuere fringilla sed. <br />{' '}
          <br />
          Vel duis lectus quam blandit purus sit malesuada. Sociis sed tristique
          diam molestie malesuada sit vulputate vel, nunc. Mus a purus tristique
          nisl ullamcorper odio sed tempus lacus. Sit bibendum aliquet
          pellentesque scelerisque erat. Hendrerit bibendum convallis facilisis
          magna amet, elit mi at. Nulla ac orci sit ac nisi. Sed quisque
          faucibus vel fringilla pretium, aliquam est non.
        </p>
      </div>
    </>
  );
}
