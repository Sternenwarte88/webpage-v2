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
          I took my first steps in C # about a year ago. But I quickly noticed
          that my heart beats for Javascript. Knowing this, I started learning
          web development. But why Javascript? <br />
          <br />
          Javascript is simple, very flexible. At first it was intended for
          interactivity in the browser, but today almost everything can do
          Javascript. Frontend, backend, complete apps and programs, machine
          learning. For everything there is simply a solution in Javascript.
          That&apos;s why I&apos;m so fascinated by it.
          <br /> <br />
          Strict typing? Typescript. Server solutions? Node.js, Express.js,
          Next.js and many more. Front end? React, Vue, Angular, there are a few
          more. Because of its flexibility, Javascript is just perfect for me.
          Javascript also has a lot in common with me personally.
          <br />
          <br />
          Javascript is simple, it is flexible, can be used anywhere, dynamic or
          strict, adaptable. Es bringt Leben in das steife HTML.
          <br />
          <br />
          Angefangen habe ich mit dem MERN Stack. Alleine dadurch habe ich schon
          die Flexibilität Frontend sowie Backend oder beides zu können. Auf
          Node.js habe ich noch Next.js aufgelegt. Javascript selbst habe ich
          mit Typescript aufgewertet. <br />
          <br />
          Meine ersten Schritte habe ich auch schon mit Docker und Kubernetes
          gemacht sowie mit Jest. Damit das ganze schön aussieht, habe ich mich
          auch mit UI/UX befasst. Allerdings bevorzuge ich das coden selbst.
        </p>
      </div>
    </>
  );
}
