import React from 'react';
import "./Placeholder.css"
import Placeholder1 from "../../images/Placeholder1.png"

export const PlaceHolder=()=> {
  return <div className='placeholderMain'>
    <div className='placeholder'>
    <p className='slidetitle'>Placeholder</p>
<img alt="" src={Placeholder1}/>
<p>Anatomy of an Artist: Aleksandra Domanović</p>
</div>
<div className='placeholder'>
    <p className='slidetitle'>Placeholder</p>
<img alt="" src={Placeholder1}/>
<p>Meet the artists by Art Basel: Bárbara Wagner and Benjamin de Burca</p>
</div>
<div className='placeholder'>
    <p className='slidetitle'>Placeholder</p>
<img alt="" src={Placeholder1}/>
<p>Anatomy of an Artist: Aleksandra Domanović</p>
</div>
  </div>;
}
