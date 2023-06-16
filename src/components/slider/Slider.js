import {React, useState} from 'react'
import './slider.css'
import dataslider from "./dataSlider"

export default function Slider() {
  return (
    <div className="container-slider">
        {dataslider.map((obj,index)=>{
            return(
                <div>
                    <img src={process.env.PUBLIC_URL + `/image/img${index+1}.`}/>
                </div>
            )
        })}
      
    </div>
  )
}
