import { useState } from 'react'
import styles from './Skills.module.css'
import LeftSlideCard from '../LeftSlideCard/LeftSlideCard'
import RightSlideCard from '../RightSlideCard/RightSlideCard'

function Skills() {


  return (
    <div>
        <div className={styles.Cards}>
          <div className={styles.flexStart}>
              <LeftSlideCard cardTitle = 'Hard Skills' cardInfo = "Frontend: CSS, HTML, JS, REACT. Backend: PHP, Laravel."/>
          </div>
          <div className={styles.flexEnd}>
              <RightSlideCard cardTitle = 'Soft Skills' cardInfo = 'Sociability, Responsibility, English B1, Motivation'/>
          </div>
        </div>
    </div>
  )
}

export default Skills
