import React, {useState} from 'react';
//styles
import styles from './Homepage.module.css';

type Props = {
  image: any
  planet: string,
  planetNumber: number
}



const Planet: React.FC<Props> = ({image, planet, planetNumber}) => {
  const [selectedPlanet, setSelectedPlanet] = useState(false)
  const [isHover, setIsHover] = useState(false)

  let style = {
    width: planet === "sun" ? "600px" : "250px",
    left: `${planet === "sun" ? -250 : 0 + 450*planetNumber}px`,
    top: `calc(50vh - ${ planet === "sun" ? 300 : 150}px )`,
    cursor: planet === "sun" ? "inherit" : "pointer",
    transition: "all 1s"
  }


  return (
    <img 
      src={image} 
      style={style}      
      className={`${selectedPlanet ? "selectedPlanet" : ""} ${isHover ? "planetHover" : ""} `} 
      onMouseEnter={() =>  setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setSelectedPlanet(true)}
      />
    )
};

export default Planet;