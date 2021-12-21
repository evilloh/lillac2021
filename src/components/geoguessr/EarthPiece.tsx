import React, {useState} from 'react';
import Tooltip from '../Tooltip';

import styles from './Earth.module.css';

import cat from '../../images/geoguessr/cat.png';
import car from '../../images/geoguessr/car.png';
import pedro from '../../images/geoguessr/pedro.png';
import nonno from '../../images/geoguessr/nonno.png';


type Props = {
  setHasTooltip: any,
  hasTooltip: boolean,
  leftPos: number,
  textCounter: number,
  setTextCounter: any
}
const Earth: React.FC<Props> = ({setHasTooltip, hasTooltip, leftPos, textCounter, setTextCounter}) => {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [text, setText] = useState("Pota")

  const setPositions = (e:any, piece: string):void => {
      setTop(e.pageY - 40)
      setLeft(e.pageX- 40)
      setHasTooltip(true)
      setText(pickText(piece))
      if (textCounter < 6){
       setTextCounter(textCounter + 1)
      } else {
        setTextCounter(0)
      }
  }



  const pickText = (typePiece:string):string  => {
    switch (typePiece) {
      case '1':
        return [
          "You're looking at the latest technology in here",
          "I'm an hybrid model",
          "HEE HOOOOOOO",
          "Don't eat the yellow snow",
          "Khajiit Has Wares",
          "You wouldn't believe how sexy girls find my Carro™",
          "Pota"
        ][textCounter]
        case '2':
          return [
            "People are so kind to me around here",
            "I feel at home here",
            "They even have yellow snow!",
            "HEE HOOOOOOO",
            "I just attended a party in my honor at a local cemetery!",
            "Such a lovely place this is",
            "They even have a Potato fair once a year in the nearby village!"
          ][textCounter]
      case '3':
        return [
          "I wanted to visit the place that made me millionaire",
          "People here used to give me money",
          "Thanks to those donations I could buy a lot of bitcoins years ago",
          "Having money even withens your skin!",
          "Here I discovered that people have to work to get money lol",
          "People here smell like poor",
          "Name's Pedro",
        ][textCounter]
      case '4':
        return [
          "Back here where it all began...",
          "...where it all ended...",
          "...where it all began again",
          "Can we please get rid of hitlerino pantaloncino please?",
          "I can make the snow yellow MEAAAOOWWW",
          "Khajiit Has Wares... don't trust that one, he's not any Khajiit.",
          "I should be gone before someone kills me again"
        ][textCounter]
    }

    return 'Pota'
  }


  const style1 = {
    left:   `calc(0px -  100vw * ${leftPos}) `,
    transition: 'all 2s',
   }
  const style2 = {
    left:   `calc(0px -  100vw * ${leftPos-1}) `,
    transition: 'all 2s',
   }
  const style3 = {
    left:   `calc(0px -  100vw * ${leftPos-2}) `,
    transition: 'all 2s',
   }
  const style4 = {
    left:   `calc(0px -  100vw * ${leftPos-3}) `,
    transition: 'all 2s',
   }

  console.log(textCounter)
  return (
    <div className={styles.earthContainer} >
        <div className={styles.imageContainer} id={styles.image1} style={style1} >
          <img onClick={(e)=> setPositions(e, '1')} className={styles.car} src={car}/>
        </div>
        <div className={styles.imageContainer} id={styles.image2} style={style2} >
          <img onClick={(e)=> setPositions(e, '2')} className={styles.nonno} src={nonno}/>
        </div>
        <div className={styles.imageContainer} id={styles.image3} style={style3} >
          <img onClick={(e)=> setPositions(e, '3')} className={styles.pedro} src={pedro}/>
        </div>
        <div className={styles.imageContainer} id={styles.image4} style={style4} >
          <img onClick={(e)=> setPositions(e, '4')} className={styles.cat} src={cat}/>
        </div>
        { hasTooltip && <Tooltip 
            text={text}
            left={left}
            top={top}
            bgCol=''
            />}
    </div>
);
} 

export default Earth;