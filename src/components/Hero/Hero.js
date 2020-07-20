import React from 'react';
import styles from './Hero.scss';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>Things to do</h2>
    <img className={styles.image} src={props.image} alt="space"></img>
  </header>
);

export default Hero;