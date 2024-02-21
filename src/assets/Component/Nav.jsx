import React,{useState} from 'react'
import "../css/Navbar.css";
// icons 
import { FaUser,FaBars,FaTimes } from "react-icons/fa";
import { NavLink ,Link } from 'react-router-dom';

// icons 
function Nav() {
    let [nav,SetNav] = useState(false);
  return (
    <div className='Navbar'>
        <div className="logo"><a href="#" className='logo'>Finexo</a></div>
        <ul className={!nav ? "nav" :"nav active"}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/whyus">Why us</NavLink></li>
            <li><NavLink to="/team">Team</NavLink></li>

            {/* <li><a href='#'><FaUser size={14} /> LOGIN</a></li> */}
        </ul>

        <div onClick={()=> SetNav(!nav)} className='bars'>
          {nav ? <FaTimes size={20}/> : <FaBars size={20}/>}
        </div>
    </div>
  )
}

export default Nav

