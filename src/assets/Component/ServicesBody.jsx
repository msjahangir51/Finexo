import React from 'react';
import "../css/ServicesBody.css";
import img1 from "../images/s1.png"
import img2 from "../images/s2.png"
import img3 from "../images/s3.png"
function ServicesBody() {
  return (
    <div className='ServicesBody'>
        <h1>Our <span>Services</span></h1>
        <p className='desc'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
        <div className="cards">
            <div className="card">
                <img  src={img1} alt="" />
                <h1>CURRENCY WALLET</h1>
                <p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                <a className='btn1' href="#">Read More</a>
            </div>
            <div className="card">
                <img  src={img2} alt="" />
                <h1>SECURITY STORAGE</h1>
                <p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                <a className='btn1' href="#">Read More</a>
            </div>
            <div className="card">
                <img  src={img3} alt="" />
                <h1>EXPERT SUPPORT</h1>
                <p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                <a className='btn1' href="#">Read More</a>
            </div>
        </div>
                <a className='btn' href="#">Read More</a>
    </div>
  )
}

export default ServicesBody