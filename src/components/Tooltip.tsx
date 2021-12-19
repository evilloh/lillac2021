import React from 'react'
import styles from './Tooltip.module.css';

type Props = {
  text: string,
  left: number,
  top: number,
  bgCol: string,
}

const Tooltip: React.FC<Props> = ({text, top, left, bgCol}) => {

  const style = {
    tooltipContainer: {
      position: 'fixed',
      top: top - 100,
      left: left - 150,
      width: '200px',
      height: '100px',
      zIndex: 999,
    },
    tooltip: {
      padding: '10px',
      backgroundColor: bgCol,
    }
  }

  return (
    // @ts-ignore "fuck CSS typings"
    <div style={style.tooltipContainer}>
      <div className={styles.tooltip2} style={style.tooltip}>
        <p >{text}</p>
      </div>
    </div>
  )
}

export default Tooltip;