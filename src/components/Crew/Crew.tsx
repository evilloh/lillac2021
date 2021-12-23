import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Curtain from '../Curtain'
import Tooltip from '../Tooltip';

import styles from './Crew.module.css';

import img1 from '../../images/the crew/1.png'
import img2 from '../../images/the crew/2.png'
import img3 from '../../images/the crew/3.png'
import img4 from '../../images/the crew/4.png'
import img5 from '../../images/the crew/5.png'

const curtainText = "On your way to the satellite you break a tire in your spaceshift, your crew gets out and try to fix it together!"

const Earth: React.FC = () => {
  const [hasTooltip, setHasTooltip] = useState<boolean>(false)
  const [textCounter, setTextCounter] = useState(0)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [text, setText] = useState("Pota")

  const setPositions = (e:any, text: string):void => {
      setTop(e.pageY - 100)
      setLeft(e.pageX- 60)
      setHasTooltip(true)
      setText(text)
      if (textCounter < 6){
       setTextCounter(textCounter + 1)
      } else {
        setTextCounter(0)
      }
  }

  return (
    <div className={styles.crewContainer}>
      <Link className="mapLink" to="/home">BACK TO THE MAP</Link>
      <Curtain text={curtainText} color={'rgb(6 3 20)'} textColor={'rgb(227 242 253)'}></Curtain>
      <img onClick={(e)=> setPositions(e, "Nine pink? Nine pink anyone?")} src={img1} className={styles.img1}></img>
      <img onClick={(e)=> setPositions(e, "Why are you saying this Mathew? I had to paly the settebello right?")} src={img2} className={styles.img2}></img>
      <img onClick={(e)=> setPositions(e, "On a scale from seven to eight and from a color from blue to green, how do you feel?")} src={img3} className={styles.img3}></img>
      <img onClick={(e)=> setPositions(e, "Evilloh's not paying attention and Charles is shitting all over our ship")} src={img4} className={styles.img4}></img>
      <img onClick={(e)=> setPositions(e, "weeeeeeeeeee")} src={img5} className={styles.img51}></img>
      <img onClick={(e)=> setPositions(e, "eeeeeeeeeee")} src={img5} className={styles.img52}></img>
      { hasTooltip && <Tooltip 
            text={text}
            left={left}
            top={top}
            bgCol='#d9d9ff'
            />}
    </div>
);
} 

export default Earth;