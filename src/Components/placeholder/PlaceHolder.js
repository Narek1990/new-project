import React from 'react';
import "./Placeholder.css"

export const PlaceHolder=(props)=> {
  return <div className='placeholder'>
    
    <p className='slidetitle'>Placeholder</p>
<img alt="" src={props.img}/>
<p>{props.desc}</p>
</div>

}
