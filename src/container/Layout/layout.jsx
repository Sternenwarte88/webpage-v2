import React from 'react';
import Hero from '../Hero/hero';
import Navigation from '../../components/navigation/navigation';
import MainSection from '../../components/main/main';

export default function Layout () {
  return (
    <>
      <Hero/>
      <Navigation/>
      <MainSection/>
    </>
  );
}
