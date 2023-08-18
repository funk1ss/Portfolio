import { useState } from 'react'
import styles from './Button.module.css'
import { Link } from 'react-router-dom'
import About from '../About/About'
import Skills from '../Skills/Skills'
import SocialMedia from '../Social Media/SocialMedia'


function Home(props) {


  return (
    <Link to={props.Path}>
        <button className={styles.button}>        
            {props.ButtonName}
        </button>
    </Link>   

  )
}

export default Home
