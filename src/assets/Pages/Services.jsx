import React, { useEffect } from 'react'
import Nav from '../Component/Nav'
import ServicesBody from '../Component/ServicesBody'
import Footer from '../Component/Footer'
function Services() {
  useEffect(()=>{
    document.title = "Services"
  })
  return (
    <div>
        <Nav/>
        <ServicesBody/>
        <Footer/>
    </div>
  )
}

export default Services