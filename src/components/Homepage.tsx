import React, {useState} from 'react';
import Planet from './Planet'
import Curtain from './Curtain'

import styles from './Homepage.module.css';

import background from '../images/map/bg_space.jpg';
import sun from '../images/map/sun.png';
import calvarymage from '../images/map/cloud2.png';
import satellite from '../images/map/satellite.png';
import earth from '../images//map/earth.png';
import crew from '../images/map/crew.png';



const Homepage: React.FC = () => {
  const [pickedPlanet, setPickedPlanet] = useState<boolean>(false)
  const [shipStatus, setShipStatus] = useState<string>("hidden")
  const [alert, setAlert] = useState(false)
  const curtainText = "Turn on the engine, check your crew aaaaand... woooosshhh! To the space once moreee!"

  const selectSatellite = () => {
    if (shipStatus === "hidden") {
      setShipStatus("visible")
    } 
    if (shipStatus === "visible") {
      setShipStatus("fixed")
      setAlert(true)
    } 
  }

  let satelliteStyle = {
    width: "250px",
    left: `${0 + 450*3}px`,
    top: `calc(50vh - 150px )`,
    cursor: "pointer",
    transition: "all 1s",
  }

  return (
  <div className={styles.homepageContainer}>
    <Curtain text={curtainText} color='black' textColor="whitesmoke"/>
    {alert && <h3 style={{position: "absolute", color: "white", top: 'calc(50vh - 250px )', left: "1350px", width: '500px'}}>Be sure to fix your ship first!</h3>}
    <div className={`${styles.curtain} ${pickedPlanet ? "opacityFull" : ""}`}></div>
    <div className={styles.spaceBackground}>
      <Planet setPickedPlanet={setPickedPlanet} image={sun} planet={"sun"} planetNumber={0}/>
      <Planet setPickedPlanet={setPickedPlanet} image={calvarymage} planet={"calvary"} planetNumber={1}/>
      <Planet setPickedPlanet={setPickedPlanet} image={earth} planet={"earth"} planetNumber={2}/>
      {
        (shipStatus === "fixed" || shipStatus === "visible") && 
        <Planet 
          setPickedPlanet={setPickedPlanet}
          image={crew} 
          planet={"crew"} 
          planetNumber={2.5} 
          shipStatus={shipStatus}
          setShipStatus={setShipStatus}
        />}
      {
        (shipStatus === "hidden" || shipStatus === "visible") &&  <img 
        src={satellite} 
        style={satelliteStyle}
        onClick={() => selectSatellite()}
        />
      }
      {
        shipStatus === "fixed" && 
      <Planet setPickedPlanet={setPickedPlanet} image={satellite} planet={"prey"} planetNumber={3} />
      }
      </div>
      <h4 className={styles.notYet} onClick={() => window.alert("Who knows what more adventures await you...")}>?</h4>
    </div>
)};

export default Homepage;