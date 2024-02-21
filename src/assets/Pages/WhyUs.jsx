import React, { useEffect } from 'react'
import Nav from '../Component/Nav'
import WhyUsbody from '../Component/WhyUsbody'
import Footer from '../Component/Footer'

function WhyUs() {
  useEffect(()=>{
    document.title = "Why us"
  })
  return (
    <div>
        <Nav/>
        <WhyUsbody/>
        <Footer/>
    </div>
  )
}

export default WhyUs