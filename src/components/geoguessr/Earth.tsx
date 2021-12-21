import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Curtain from '../Curtain'

import styles from './Earth.module.css';

import EarthPiece from './EarthPiece'

const curtainText = "Moving towards your home planet, you decide to land in a desolated village where it seems like the time have stopped. Such a beautiful place or... is it a nightmare?"

const Earth: React.FC = () => {
  const [hasTooltip, setHasTooltip] = useState<boolean>(false)
  const [leftPos, setLeftpos] = useState(0)
  const [textCounter, setTextCounter] = useState(0)


  const pushLeft = () => {
    setHasTooltip(false)
    setLeftpos(leftPos+1)
    setTextCounter(0)
  }
  const pushRight = () => {
    setHasTooltip(false)
    setLeftpos(leftPos-1)
    setTextCounter(0)
  }
  
  return (
    <div className={styles.earthContainer}>
      <Link className="mapLink" to="/home">BACK TO THE MAP</Link>
      <Curtain text={curtainText} color={'rgb(48 12 12)'} textColor={'rgb(253, 227, 227)'}></Curtain>

      { leftPos > 0 &&
      <div onClick={() => pushRight()} className={styles.leftArrow}></div>
      }
      <EarthPiece 
        setHasTooltip={setHasTooltip} 
        hasTooltip={hasTooltip}
        leftPos={leftPos}
        textCounter={textCounter}
        setTextCounter={setTextCounter}
        />
        {
          leftPos < 3 &&
          <div onClick={() => pushLeft()} className={styles.rightArrow}></div>
        }
    </div>
);
} 

export default Earth;