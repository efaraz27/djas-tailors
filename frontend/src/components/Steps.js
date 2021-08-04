import React from 'react'
import step1_img from '../images/steps/perfect_fit.svg'
import step2_img from '../images/steps/design_to_your_liking.svg'
import step3_img from '../images/steps/we_are_with_you.svg'
import './Steps.css'


function Steps() {
    return (
        <div className='Steps'>
            <div className='header'>A Few Simple Steps Towards a Better Fit</div>
            <div className='steps-container'>
                <div className='step'>
                    <div className='step-img'><img src={step1_img} alt='Perfect Fit Guaranteed'></img></div>
                    <div className='step-heading'>A Perfect Fit Guaranteed</div>
                    <div className='step-desc'>You make it yours, we'll make it fit. Should your first garment not fit as pictured we’ll replace it free of charge.</div>
                </div>
                <div className='step'>
                    <div className='step-img'><img src={step2_img} alt='Design To Your Liking'></img></div>
                    <div className='step-heading'>Design To Your Liking</div>
                    <div className='step-desc'>Make your custom clothing even more personal using our advanced design tool.</div>
                </div>
                <div className='step'>
                    <div className='step-img'><img src={step3_img} alt='We are with you'></img></div>
                    <div className='step-heading'>We're With You</div>
                    <div className='step-desc'>We're here to help you with everything from fit issues to style advice, don't hesitate to get in touch with us.</div>
                </div>
            </div>
        </div>
    )
}

export default Steps
