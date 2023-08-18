import { useState } from 'react'
import styles from './Home.module.css'
import Avatar from '../Avatar/Avatar'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import Button from '../Button/Button'
import About from '../About/About'
import Skills from '../Skills/Skills'
import SocialMedia from '../Social Media/SocialMedia'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function Home() {
  

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <div className={styles.header}>

          <Avatar/>
          

          <Button ButtonName = 'About' Path = '/About'/>
          <Button ButtonName = 'Skills' Path = '/Skills'/>
          <Button ButtonName = 'Social Media' Path = '/SocialMedia'/>
          
          <HeaderTitle/>

        </div>
        

        <hr />

      
        
        <Routes>
            <Route element = {<About/>} path = '/'/>
            <Route element = {<About/>} path = '/About'/>
            <Route element = {<Skills/>} path = '/Skills'/>
            <Route element = {<SocialMedia/>} path = '/SocialMedia'/>
        </Routes>
      </div>
    </BrowserRouter>
      
    
  )
}

export default Home
