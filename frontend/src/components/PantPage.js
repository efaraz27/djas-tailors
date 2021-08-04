import React from 'react'
import {useHistory} from 'react-router-dom';
import Navbar2 from './Navbar2'
import AboutTile1 from './AboutTile1';
import AboutTile2 from './AboutTile2';
import './PantPage.css'


//image imports
import pick_your_style from '../images/pick_your_style.jpg'
import pick_your_fit from '../images/pick_your_fit.jpg'
import pick_your_design from '../images/pick_your_design.jpg'

function PantPage() {
    const history = useHistory()
    return (
        <div className='pant-page'>
            <Navbar2/>
            <div className='pant-home'>
                <div className="content">
                    <div className='slogan'>Custom-tailored Pants</div>
                    <div className='btn' onClick={()=>{history.push('/create-pant')}}>Create your pant</div>
                </div>
            </div>
            <div className='pant-about'>
                <div className='header'>
                    The perfect pair of trousers, re-invented.
                    <div className='desc'>Discover our updated custom-tailored trouser, the perfect match for your custom-tailored trousers. Expand your perfect fitted wardrobe with these high-quality garments, wearable for all types of different occasions.</div>
                </div>
            </div>
            <AboutTile1 header='Pick your style'
                desc='Trousers are perfect for the casual as well as for professional look. keep it casual with our funky color collection or keep it professional with an elegant look no matter what we got you covered, Durable without compromising on the comfort in any way.'
                image={pick_your_style}/>
            <AboutTile2 header='Pick your fit'
                desc='Looking for a real skinny fit? Or do you see yourself in a more relaxed look? Either way, you prefer it, we’ve got the perfect fit just for you. Choose between three different fits ranging from skinny, slim to regular; all ensuring a one-of-a-kind perfect fit.'
                image={pick_your_fit}/>
            <AboutTile1 header='Pick your design'
                desc='As always, our garments are measured and cut with only your measurements in mind. Customize your new trousers to your taste and make them even more personal. No matter how you want it to be done we will do it with conformance'
                image={pick_your_design}/>
        </div>
    )
}

export default PantPage
