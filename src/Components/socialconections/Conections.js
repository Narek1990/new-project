import React from 'react'
import { iconsdata } from '../../data/mockdata'
import "./conections.css"

export const Conections = () => {
    return (

        <div className='conections'>
            <div className='newmember'>
                <p>Join the NOWNESS community to create your own playlists, rate and comment on stories, subscribe to your favorite categories and more.</p>
                <button className='memberbutton'>BECOME A NOWNESS MEMBER</button>
                <p>Already A Member? <span className='signin'>Sign in</span></p>
            </div>
            <div className='socialmedia'>
                <p>Connect with NOWNESS</p>
                <div className='socialicons'>
                    {iconsdata.map((item, index) => (
                        <div className='socialmediaitem' key={index}>
                            <img
                                item={index}
                                src={item?.src}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
