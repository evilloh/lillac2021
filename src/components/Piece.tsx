import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Tooltip from './Tooltip';
import maramala from '../images/calvary/3-3.png'

//styles
import styles from './Calvary.module.css';

type Props = {
  image: string[],
  typePice: string,
  setWhatPieceIsClicked: any,
  whatPieceIsClicked: string
}

const Piece: React.FC<Props> = ({image, typePice, setWhatPieceIsClicked, whatPieceIsClicked}) => {
  const [img, himg] = image
  const [isHover, setIsHover] = useState(false)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [hasTooltip, setHasTooltip] = useState(false)
  const [click, setClick] = useState(0)


  const setPositions = (e):void => {
    if (whatPieceIsClicked === "none") {
      setWhatPieceIsClicked(typePice)
      setTop(e.pageY - e.target.offsetTop)
      setLeft(e.pageX - e.target.offsetLeft)
      setHasTooltip(true)
      setClick(click + 1 )
    } else if (whatPieceIsClicked !== typePice) {
      setWhatPieceIsClicked(typePice)
      setTop(e.pageY - e.target.offsetTop)
      setLeft(e.pageX - e.target.offsetLeft)
      setHasTooltip(true)
      setClick(click + 1 )
    }

  }


  const pickText = (typePice:string):string => {
    const nip = [
      "Perv.",
      "What do you want?",
      "Take a picture, it'll last longer.",
      "Carlo, I know it's you.",
      "Can you leave us alone?",
      "I'm calling the police.",
      "Nata sama! >//<"
    ]
    const magritte = [
      "Why should you not fart in an apple store? Cause they dont have windows.",
      "What is the difference between an apple and an orphan ? Apple gets picked",
      "Apple have come up with a new revolutionary eye patch for pirates. It's called the iEye patch.",
      "TIL a doctor who specializes in Adam’s apples is a... guyneckologist",
      "Apple's cars will not be that popular... Because they don't support windows",
      `Lei: "Mio figlio assomiglia tutto al padre!". L'amica: "nu poco pure a maritete!". `
    ]
    const ear = [
      "Baby metal are the best",
      "Shush I'm listening to music",
      "Laura1 is the best Laura",
      "SOOOMEBODY---",
      "Bimborimbiri, bimbirimbiri!"
    ]
    const mara = [
      "Mara maionchi",
      "non devi toccare i bambini",
      "stupida mara maionchi",
      "Bimborimbiri!",
      "non devi toccare i bambini",
      "stupida mara maionchi",
    ]


    switch (typePice) {
      case "magritte":
        return magritte[Math.floor(Math.random()*magritte.length)];
      case "ear":
        return ear[Math.floor(Math.random()*ear.length)];
      case "mara":
        return mara[Math.floor(Math.random()*mara.length)];
      case "nip":
        return nip[Math.floor(Math.random()*nip.length)];
    }
  }

  const pickColor = (typePice:string):string  => {
    switch (typePice) {
      case "magritte":
        return '#f5e0e0'
      case "ear":
        return '#e0e3f5'
      case "mara":
        return '#e0f5e3'
      case "nip":
        return '#f5f3e0'
    }
  }

  const calcImage = () => {
    if(typePice === "mara" && click > 4){
      return maramala
    }
    return isHover ? img : himg
  }
  return (
  <div 
    onClick={(e)=> setPositions(e)} 
    onMouseEnter={()=> setIsHover(true)} 
    onMouseLeave={()=> { setHasTooltip(false)
      setIsHover(false)}}
  >
    <div style={{position:"relative", height: '350px'}}>
      { hasTooltip ? 
        <Tooltip 
          text={pickText(typePice)} 
          top={typePice === "magritte" ? top- 90 : top } 
          left={left} 
          bgCol={pickColor(typePice)}
          /> : null
      }
      <img src={calcImage()}></img>
    </div>
  </div>
  );
}

export default Piece;