import React from 'react'
import "../css/About.css";
import AboutImg from "../images/about-img.png";
function AboutBody() {
  return (
    <div className='about-section'>
        <h1 className='section-heading'>About <span>Us</span></h1>
        <p>Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus</p>

        <div className='about-content'>
            <div className='about-img'>
                <img src={AboutImg} alt="" />
            </div>
            <div className='text-content'>
                <h1>We Are Finexo</h1>
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
                <br></br>
                <br></br>
                Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                </p>
                <a href="#" className='btn'>Read More</a>
            </div>
        </div>
    </div>
  )
}

export default AboutBody;