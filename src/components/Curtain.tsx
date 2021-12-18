import React from 'react';
import { Link } from "react-router-dom";
//styles
import styles from './Calvary.module.css';


const Curtain: React.FC = () => (
  <div className={styles.curtain}>
    <h2>
      You get close to the clouds, but it appears to be a place too heavenly to land.
      You can't go to heaven yet (sinner!) but you can surely peek through the porthole!
    </h2>
  </div>
);

export default Curtain;