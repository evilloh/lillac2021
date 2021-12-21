import React, {useState} from 'react';
import Planet from './Planet'
import Curtain from './Curtain'

import styles from './Homepage.module.css';

import background from '../images/map/bg_space.jpg';
import sun from '../images/map/sun.png';
import calvarymage from '../images/map/cloud2.png';
import satellite from '../images/map/satellite.png';
import earth from '../images//map/earth.png';



const Homepage: React.FC = () => {
  const [pickedPlanet, setPickedPlanet] = useState<boolean>(false)
  const curtainText = "Turn on the engine, check your crew aaaaand... woooosshhh! To the space once moreee!"

  return (
  <div className={styles.homepageContainer}>
    {/* <Curtain text={curtainText} color='black' textColor="whitesmoke"></Curtain> */}

    <div className={`${styles.curtain} ${pickedPlanet ? "opacityFull" : ""}`}></div>
    <div className={styles.spaceBackground}>
      <Planet setPickedPlanet={setPickedPlanet} image={sun} planet={"sun"} planetNumber={0}></Planet>
      <Planet setPickedPlanet={setPickedPlanet} image={calvarymage} planet={"calvary"} planetNumber={1}></Planet>
      <Planet setPickedPlanet={setPickedPlanet} image={earth} planet={"earth"} planetNumber={2}></Planet>
      {/* <Planet setPickedPlanet={setPickedPlanet} image={satellite} planet={"satellite"} planetNumber={3}></Planet> */}
      <h4 className={styles.notYet} onClick={() => alert("You still have some time of travel to reach this destination!")}>?</h4>
    </div>
  </div>
)};

export default Homepage;