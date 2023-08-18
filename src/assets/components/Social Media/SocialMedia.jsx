import { useState } from 'react'
import styles from './SocialMedia.module.css'
import LeftSlideCard from '../LeftSlideCard/LeftSlideCard'
import RightSlideCard from '../RightSlideCard/RightSlideCard'

function SocialMedia() {


  return (
    <div>
        <div className={styles.Cards}>
          <div className={styles.flexStart}>
              <LeftSlideCard cardTitle = 'Telegram' cardInfo = "@hchekch"/>
          </div>

        </div>
    </div>
  )
}

export default SocialMedia
