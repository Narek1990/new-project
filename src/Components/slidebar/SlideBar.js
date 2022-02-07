import React from 'react';
import "./Slidebar.css"
import Slide from "../../images/Image.png"
import Light from "../../images/Light.svg"

export const SlideBar=()=> {
  return <div className='main' >
<img alt="" src={Slide} className='slide'/>
<div className="slidetext">
<img alt="" src={Light} className="playbutton"/>
<p className="headtitle">Enfant Sauvage: Force Field</p>
<p className="secondtitle">The Blaze’s Guillaume Alric releases the last film in a three-part love story for his debut solo album</p>
</div>
  </div>;
}

