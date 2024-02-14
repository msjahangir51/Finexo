import React from 'react';
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaLinkedinIn } from "react-icons/fa";
import "../css/TeamBody.css";
import TeamDetails from "../TeamDetals.json";
function TeamBody() {
  return (
    <div className='teamDetalis'>
        <h1 className='section-heading'>Our <span>Team</span></h1>

        <div className="row">
            {
                TeamDetails.map(((item,index)=>{
                    return (
                        <div key={index} className="box">
                            <div className="box-img">
                                <img src={item.Image}/>
                            </div>
                            <h1>{item.Name}</h1>
                            <p>{item.Work}</p>
                            <div className="social">
                                <a href={item.facebook} target='_blank'><FaFacebook/></a>
                                <a href={item.twitter} target='_blank'><FaTwitter/></a>
                                <a href={item.linkedin} target='_blank'><FaLinkedinIn/></a>
                                <a href={item.instagram} target='_blank'><FaInstagram/></a>
                                <a href={item.youtube} target='_blank'><FaYoutube/></a>
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    </div>
  )
}

export default TeamBody