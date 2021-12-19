import React, {useState, useEffect} from 'react';
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

type Props = {
  setMakeaGuess : any
}

const Nominees: React.FC<Props> = ({setMakeaGuess}) => {
  const [planet, setPlanet] = useState("runeterra")
  const [planetImage, setPlanetImage] = useState(control)
  const [planetTitle, setPlanetTitle] = useState("Control")

  useEffect(() => {
    switch (planet) {
      case "control":
        setPlanetImage(control)
        setPlanetTitle("Control")
        break;
    
      case "calvary":
        setPlanetImage(calvary)
        setPlanetTitle("The procession of Calvary")
        break;
    
      case "cuphead":
        setPlanetImage(cuphead)
        setPlanetTitle("Cuphead")
        break;
    
      case "geoguess":
        setPlanetImage(geoguess)
        setPlanetTitle("Geoguessr")
        break;
    
      case "outer":
        setPlanetImage(outer)
        setPlanetTitle("Outer Wilds")
        break;
    
      case "octopath":
        setPlanetImage(octopath)
        setPlanetTitle("Octopath Traveler")
        break;
        
      case "prey":
        setPlanetImage(prey)
        setPlanetTitle("Prey")
        break;

      case "runeterra":
        setPlanetImage(runeterra)
        setPlanetTitle("Legends of Runeterra: Path of the champions")
        break;
      case "zelda":
        setPlanetImage(zelda)
        setPlanetTitle("Legends of Zelda: Breath of the Wild")
        break;
    
      default:
        break;
    }
    
  }, [planet])

  const style = {
    transform: "scale(1.4)",
    opacity: "1"
  }



  const confirmGuess = () => {
    localStorage.setItem('lilac', planet);
    setMakeaGuess(false)
  }
  
  return (
  <div className={styles.nomineesContainer}>
    <div className={styles.selectionLilac}>
      <img style={planet === 'calvary' ? style: {}} onClick={() => setPlanet('calvary')} src={calvary}></img>
      <img style={planet === 'control' ? style: {}} onClick={() => setPlanet('control')} src={control}></img>
      <img style={planet === 'cuphead' ? style: {}} onClick={() => setPlanet('cuphead')} src={cuphead}></img>
      <img style={planet === 'geoguess' ? style: {}} onClick={() => setPlanet('geoguess')} src={geoguess}></img>
      <img style={planet === 'outer' ? style: {}} onClick={() => setPlanet('outer')} src={outer}></img>
      <div className={styles.selectedLilac}>
        <p onClick={() => confirmGuess()}>Confirm the guess: {planetTitle}!!</p>
      </div>
      <img style={planet === 'octopath' ? style: {}} onClick={() => setPlanet('octopath')} src={octopath}></img>
      <img style={planet === 'prey' ? style: {}} onClick={() => setPlanet('prey')} src={prey}></img>
      <img style={planet === 'runeterra' ? style: {}}onClick={() => setPlanet('runeterra')} src={runeterra}></img>
      <img style={planet === 'zelda' ? style: {}} onClick={() => setPlanet('zelda')} src={zelda}></img>
      <img className={styles.backImageSelection} src={planetImage}></img>

    </div>
  </div>
);
} 

export default Nominees;