import React, { useEffect } from 'react'
import Nav from '../Component/Nav'
import AboutBody from './../Component/AboutBody';
import Footer from './../Component/Footer';

function About() {
  useEffect(()=>{
    document.title = "About"
  })
  return (
    <div>
        <Nav/>
        <AboutBody/>
        <Footer/>
    </div>
  )
}

export default About