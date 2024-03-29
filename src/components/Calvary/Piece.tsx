import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Tooltip from '../Tooltip';
import maramala from '../../images/calvary/3-3.png'

//styles

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


  const setPositions = (e:any):void => {
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
      "Nata sama! >//<",
      "I guess if there's an hentai genre for us"
    ]
    const magritte = [
      "Who is an apple’s favourite relative? A Granny",
      "How do you make an apple turnover? Push it downhill.",
      "What kind of apple isn't an apple? A pineapple.",
      "What do you call a grumpy apple? A crab apple",
      "What did the apple say to the walnut? You're nuts.",
      `Lei: "Mio figlio assomiglia tutto al padre!". L'amica: "nu poco pure a maritete!". `,
      "Why did the apple go to the doctor? It wasn’t peeling well"
    ]
    const ear = [
      "Baby metal are the best",
      "Shush I'm listening to music",
      "Laura1 is the best Laura",
      "SOOOMEBODY---",
      "Bimborimbiri, bimbirimbiri!",
      "Oola peeepa ona pataaataa",
      "These earphones are super cool, it's a gift from the apple guy over there!",
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

    return "such a great lilac"
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

    return '#f5f3e0'
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