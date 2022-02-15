
import React from 'react'
import './social.css';

export const Social=(props)=> {
  return (
    <div className='socialgeneral'>
    <div className='mainsocial'>
        <div className='socialImage'>
<img alt="" src={props.img}/>
</div>
<div className='subscribeArea'>
    <p>Facebook</p>
<img alt="" src={props.icon}/>
<p>Our daily feed.</p>
<button className='followbutton'>{props.button}</button>
</div>
    </div>
    </div>

  )
}
