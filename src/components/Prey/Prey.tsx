import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Curtain from '../Curtain'

import styles from './Prey.module.css';

const curtainText = "Moving towards your home planet, you decide to land in a desolated village where it seems like the time have stopped. Such a beautiful place or... is it a nightmare?"

const Prey: React.FC = () => {
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
    </div>
);
} 

export default Prey;