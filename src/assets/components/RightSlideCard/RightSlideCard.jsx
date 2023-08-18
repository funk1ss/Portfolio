import { useState } from 'react'
import styles from './RightSlideCard.module.css'



function RightSlideCard(props) {
  

  return (
    <div className={styles.card}>
        <div className={styles.cardTitle}>{props.cardTitle}</div>
        <div className={styles.cardInfo}>{props.cardInfo}</div>
    </div>
  )
}

export default RightSlideCard
