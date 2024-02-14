import React from 'react'
import "../css/Fotter.css"
// icons 
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

// icons 
import { NavLink ,Link } from 'react-router-dom';
function Footer() {
  return (
    <div>

    <div className='fotter'>
        <div>
            <h1>Address</h1>
            <ul>
                <li><IoLocationOutline size={20}/> Location</li>
                <li><FaPhoneAlt size={16}/>  +8801148525468</li>
                <li><CgMail size={20}/>demo@demo.com</li>
            </ul>
            <div className="social">
                <a href="#" target='_blank'><FaFacebook /></a>
                <a href="#" target='_blank'><FaInstagram/></a>
                <a href="#" target='_blank'><FaLinkedinIn/></a>
                <a href="#" target='_blank'><FaTwitter/></a>
                <a href="#" target='_blank'><FaYoutube/></a>
            </div>
        </div>
        <div>
            <h1>Info</h1>
            <p>necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
        </div>

        <div>
            <h1>Links</h1>
        <ul className='nav nav1'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/whyus">Why us</NavLink></li>
            <li><NavLink to="/team">Team</NavLink></li>
        </ul>
        </div>
        <div>
            <h1>Subscribe</h1>
            <input type="text"  placeholder='Enter email'/>
            <button type="submit" value="Subcribe" >Subcribe</button>
        </div>

    </div>
        <p className='Copyright'>Copyright © 2024 by Correct Coding | All Right Reserved.</p>
    </div>
  )
}

export default Footer