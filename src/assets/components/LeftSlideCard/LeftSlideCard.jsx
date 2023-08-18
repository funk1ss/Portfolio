import { useState } from 'react'
import styles from './LeftSlideCard.module.css'



function LeftSlideCard(props) {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.card}>
        <div className={styles.cardTitle}>{props.cardTitle}</div>
        <div className={styles.cardInfo}>{props.cardInfo}</div>
    </div>
  )
}

export default LeftSlideCard
