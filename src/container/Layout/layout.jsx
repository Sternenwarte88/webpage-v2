import React from 'react';
import Hero from '../Hero/hero';
import Navigation from '../../components/navigation/navigation';
import MainSection from '../../components/main/main';
import LayoutComponent from '../../components/layoutComponent/layoutComponent';
import classes from './layout.module.css';

export default function Layout () {
  return (
    <LayoutComponent className={classes.layout}>
      <Hero />
      <Navigation />
      <MainSection />
    </LayoutComponent>
  );
}
