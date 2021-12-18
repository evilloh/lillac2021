import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Curtain from './Curtain'
import Tooltip from './Tooltip';
import Piece from './Piece'
//styles
import styles from './Calvary.module.css';

import porthole from '../images/calvary/porthole.png';
import clouds from '../images/calvary/calvaryClouds.png';
import img1 from '../images/calvary/1-1.png'
import img2 from '../images/calvary/2-1.png'
import img3 from '../images/calvary/3-1.png'
import img4 from '../images/calvary/4-1.png'

import himg1 from '../images/calvary/1-2.png'
import himg2 from '../images/calvary/2-2.png'
import himg3 from '../images/calvary/3-2.png'
import himg4 from '../images/calvary/4-2.png'



const Calvary: React.FC = () => {
  const [whatPieceIsClicked, setWhatPieceIsClicked] = useState<string>("none")
  
  return (
    <div className={styles.calvaryContainer}>
    {/* <Curtain ></Curtain> */}
    <Link to="/">casa</Link>
    <div className={styles.selectionsDiv}>
      <Piece image={[img1, himg1]} typePice={'magritte'} whatPieceIsClicked={whatPieceIsClicked} setWhatPieceIsClicked={setWhatPieceIsClicked}></Piece>
      <Piece image={[img2, himg2]} typePice={'ear'} whatPieceIsClicked={whatPieceIsClicked} setWhatPieceIsClicked={setWhatPieceIsClicked}></Piece>
      <Piece image={[img4, himg4]} typePice={'nip'} whatPieceIsClicked={whatPieceIsClicked} setWhatPieceIsClicked={setWhatPieceIsClicked}></Piece>
      <Piece image={[img3, himg3]} typePice={'mara'} whatPieceIsClicked={whatPieceIsClicked} setWhatPieceIsClicked={setWhatPieceIsClicked}></Piece>
    </div>
    <img className={styles.porthole} src={porthole}/>
    <img className={styles.clouds} src={clouds}/>
  </div>
);
} 

export default Calvary;