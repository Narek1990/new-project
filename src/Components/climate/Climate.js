import React from 'react';
import "./climate.css"


export const Climate=(props)=> {
    return <div className="climatmain">
   <img alt="" src={props.jpg}/>
   <p className='text2' >Environmental activist Satish </p>
   <p className="text1">{props.text}</p>
    </div>
}