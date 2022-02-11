import React from 'react';
import "./climate.css"


export const Climate=(props)=> {
    return <div className="climatmain">
      
       {
      props.title && (
        <p className='mostwatched' >{ props.title} </p>
      )
    }
   <img alt="" src={props.jpg}/>
   {
      props.parenttitle && (
        <p className='parenttitle' >{ props.parenttitle} </p>
      )
    }
       {
      props.climeTitle && (
        <p className='text2' >Environmental activist Satish </p>
      )
    }
   <p className="text1">{props.text}</p>
    </div>
}