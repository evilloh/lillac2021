import React, {useState, useEffect} from 'react';
//styles
import styles from './Homepage.module.css';

type Props = {
  image: any
  planet: string,
  planetNumber: number,
  setPickedPlanet: Function,
}



const Planet: React.FC<Props> = ({image, planet, planetNumber, setPickedPlanet}) => {
  const [selectedPlanet, setSelectedPlanet] = useState<boolean>(false)
  const [isHover, setIsHover] = useState<boolean>(false)

  useEffect(() => {
    setPickedPlanet(false)
  }, [])
  
  let style = {
    width: planet === "sun" ? "600px" : "250px",
    left: `${planet === "sun" ? -250 : 0 + 450*planetNumber}px`,
    top: `calc(50vh - ${ planet === "sun" ? 300 : 150}px )`,
    cursor: planet === "sun" ? "inherit" : "pointer",
    transition: "all 1s"
  }

  const selectPlanet = () => {
    setSelectedPlanet(true)
    setPickedPlanet(true)
  }

  return (
    <img 
      src={image} 
      style={style}      
      className={`${selectedPlanet ? "selectedPlanet" : ""} ${isHover ? "planetHover" : ""} `} 
      onMouseEnter={() =>  setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => selectPlanet()}
      />
    )
};

export default Planet;