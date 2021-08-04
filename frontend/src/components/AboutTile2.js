import React from 'react'
import './AboutTile2.css'

function AboutTile1(props) {
    return (
        <div className='AboutTile2'>
            <img src={props.image} alt=''></img>
            <div className='text'>
                <div className='header'>{props.header}</div>
                <div className='desc'>{props.desc}</div>
            </div>
        </div>
    )
}

export default AboutTile1
