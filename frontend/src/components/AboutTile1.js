import React from 'react'
import './AboutTile1.css'

function AboutTile1(props) {
    return (
        <div className='AboutTile1' id='about'>
            <div className='text'>
                <div className='header'>{props.header}</div>
                <div className='desc'>{props.desc}</div>
            </div>
                <img src={props.image} alt=''></img>
        </div>
    )
}

export default AboutTile1
