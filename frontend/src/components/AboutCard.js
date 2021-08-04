import React from 'react'
import './AboutCard.css'

function AboutCard(props) {
    return (
        <div className='about-card'>
            <div className='about-image'><img src={props.image} alt='about'></img></div>
            <div className='about-desc'>{props.desc}</div>
        </div>
    )
}

export default AboutCard
