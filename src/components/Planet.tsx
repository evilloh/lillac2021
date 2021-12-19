import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

type Props = {
  image: any
  planet: string,
  planetNumber: number,
  setPickedPlanet: Function,
}

const Planet: React.FC<Props> = ({image, planet, planetNumber, setPickedPlanet}) => {
  const [selectedPlanet, setSelectedPlanet] = useState<boolean>(false)
  const [isHover, setIsHover] = useState<boolean>(false)
  const navigate = useNavigate();

  useEffect(() => {
    setPickedPlanet(false)
  }, [])
  
  let style = {
    width: planet === "sun" ? "600px" : "250px",
    left: `${planet === "sun" ? -250 : 0 + 450*planetNumber}px`,
    top: `calc(50vh - ${ planet === "sun" ? 300 : 150}px )`,
    cursor: "pointer",
    transition: "all 1s"
  }

  const selectPlanet = () => {
    if (planet === "sun") {
      localStorage.removeItem('lilac')
    }
    setSelectedPlanet(true)
    setPickedPlanet(true)
    setTimeout(() => {
      if(planet === "sun"){
        navigate("/");
        window.location.reload();
      } else {
        navigate(`/${planet}`);
      }
    }, 4000);
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