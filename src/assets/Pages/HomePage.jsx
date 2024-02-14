import React from 'react'
import "../css/HomePage.css";
import homeIMG  from "../images/slider-img.png";

function HomePage() {
  return (
    <div>
        <div className='HomePage'>
            <div className='Home-text'>
                <h1>CRYPTO <br></br>CURRENCY</h1>
                <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                <a href="#" className='btn'>Read More</a>
            </div>
            <div className='Home-img'>
                <img src={homeIMG}/>
            </div>
        </div>
    </div>
  )
}

export default HomePage