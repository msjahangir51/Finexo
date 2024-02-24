import React from 'react'
import Alldocument from "../../../public/requres.json";
import "../css/WhyusBody.css"

function WhyUsbody() {
  return (
    <div className='whyChooseus'>
        <h1>Why Choose <span>Us</span></h1>
        <div className="cards">
                {
                    Alldocument.map((Doc,index) =>{
                        return (
                            <div key={index} className="card">
                                <div className="imgbox">
                                <img key={Doc.id} src={Doc.img} alt="" />
                                </div>
                                <h1>{Doc.tittle}</h1>
                                <p>{Doc.desc}</p>
                            </div>

                            )
                    })
                }
<a className='btn' href="#">READMORE</a>
            </div>
     </div>
  )
}

export default WhyUsbody