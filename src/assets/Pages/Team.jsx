import React, { useEffect } from 'react'
import Nav from '../Component/Nav'
import WhyUsbody from '../Component/WhyUsbody'
import TeamBody from '../Component/TeamBody'
import Footer from '../Component/Footer'

function Team() {
  useEffect(()=>{
    document.title = "Team"
  })
  return (
    <div>
        <Nav/>
      <TeamBody/>
      <Footer/>
    </div>
  )
}

export default Team