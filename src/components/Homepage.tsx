import React from 'react';
import Planet from './Planet'
//styles
import styles from './Homepage.module.css';
import background from '../images/map/bg_space.jpg';
import sun from '../images/map/sun.png';
import calvarymage from '../images//map/cloud2.png';
import satellite from '../images//map/satellite.png';
import earth from '../images//map/earth.png';



const Homepage: React.FC = () => (
  <div className={styles.homepageContainer}>
    <div className={styles.spaceBackground}>
      <Planet image={sun} planet={"sun"} planetNumber={0}></Planet>
      <Planet image={calvarymage} planet={"calvary"} planetNumber={1}></Planet>
      <Planet image={satellite} planet={"satellite"} planetNumber={2}></Planet>
      <Planet image={earth} planet={"earth"} planetNumber={3}></Planet>
    </div>
  </div>
);

export default Homepage;