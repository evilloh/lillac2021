import React, {useState} from 'react';
import { Link } from "react-router-dom";
import styles from './NewGame.module.css';
import planet from '../images/home/planet.png'
import text1 from '../images/home/newgame.png'
import text2 from '../images/home/nomin.png'
import text3 from '../images/home/guess.png'
import lilac from '../images/home/lilac.png'
import lilacyear from '../images/home/2021.png'
import Nominees from './Nominees';



const NewGame: React.FC = () => {
  const [watchNominee, setwatchNominee] = useState(false)

  return (
  <div className={styles.container}>
    { watchNominee ? <Nominees setwatchNominee={setwatchNominee}/> : null}
    <div className={styles.lilacContainer}>
      <img className={styles.lilac} src={lilac} ></img>
      <img className={styles.lilacyear} src={lilacyear} ></img>
    </div>
    <div className={styles.textContainer}>
      <Link to="/home">
      <img className={styles.text1} src={text1} ></img></Link>
      <img className={styles.text2} src={text2} onClick={() => setwatchNominee(true)}></img>
      <img className={styles.text3} src={text3} ></img>
    </div>
    <img className={styles.planet} src={planet} ></img>

  </div>
);
} 

export default NewGame;