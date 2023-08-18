import { useState } from 'react'
import styles from './About.module.css'
import LeftSlideCard from '../LeftSlideCard/LeftSlideCard'
import RightSlideCard from '../RightSlideCard/RightSlideCard'
function Home() {


  return (
    <div className={styles.Cards}>
        <div className={styles.flexStart}>
            <LeftSlideCard cardTitle = 'About Me' cardInfo = "Hello! I'm Vladimir my profession is programmer and i like to create web-site's because i'm fullstack web Developer"/>
        </div>
        <div className={styles.flexEnd}>
            <RightSlideCard cardTitle = 'Experienced Programmer' cardInfo = 'I have a big experience in programming which means more than five years of developing'/>
        </div>
        <div className={styles.flexStart}>
            <LeftSlideCard cardTitle = 'Responsibility' cardInfo = "I approach any tasks with responsibility"/>
        </div>
    </div>
    
    
  )
}

export default Home
