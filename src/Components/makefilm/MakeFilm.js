import React from 'react'
import "./makefilm.css"

export const MakeFilm=(props)=> {
  return (
    <div className='makefilm'>
        <div className='filmimg'>
    <img alt='' src={props.img}/>
        </div>
        <div className='filmtitle'>
            <p className='sampletext'>Sample text</p>
            <p>Make a short film on just one cartridge of super 8 - Editing only with each pull of Your Camera’s </p>
        </div>
    </div>
  )
}
