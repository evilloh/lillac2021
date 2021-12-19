import React, {useState} from 'react';
import { Link } from "react-router-dom";
import styles from './Nominees.module.css';
import calvary from '../images/guess/calvary.png'
import control from '../images/guess/control.png'
import cuphead from '../images/guess/cuphead.png'
import geoguess from '../images/guess/geoguess.png'
import outer from '../images/guess/outer.png'
import octopath from '../images/guess/octopath.png'
import prey from '../images/guess/prey.png'
import runeterra from '../images/guess/runeterra.png'
import zelda from '../images/guess/zelda.png'



const Nominees: React.FC = ({setwatchNominee}) => {
  const [planet, setPlanet] = useState("runeterra")

  return (
  <div className={styles.nomineesContainer}>
    <div  className={styles.thumbnailsContainer}>
      <img onClick={() => setPlanet('calvary')} src={calvary}></img>
      <img onClick={() => setPlanet('control')} src={control}></img>
      <img onClick={() => setPlanet('cuphead')} src={cuphead}></img>
      <img onClick={() => setPlanet('geoguess')} src={geoguess}></img>
      <img onClick={() => setPlanet('outer')} src={outer}></img>
      <img onClick={() => setPlanet('octopath')} src={octopath}></img>
      <img onClick={() => setPlanet('prey')} src={prey}></img>
      <img onClick={() => setPlanet('runeterra')} src={runeterra}></img>
      <img onClick={() => setPlanet('zelda')} src={zelda}></img>
    </div>

    <div className={styles.nomineesSelected}>
      <img onClick={() => setPlanet('calvary')} src={calvary}></img>
      <div>
        <h2>Title</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>

    <h1 onClick={() => setwatchNominee(false)}>I'm done browsing!</h1>
  </div>
);
} 

export default Nominees;