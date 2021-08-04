import React, { Component } from 'react'
import Home from './Home'
import Products from './Products'
import ContactUs from './ContactUs';
import Steps from './Steps';
import AboutTile1 from './AboutTile1';
import AboutTile2 from './AboutTile2'
import makingItFitImg from '../images/making_it_fit.jpg'
import makingItRightImg from '../images/making_it_right.jpg'
import makingItYourselfImg from '../images/making-it-yourself.jpg'

class HomePage extends Component
{
    render()
    {
        return(
            <div className='home-page' style={{backgroundColor: '#303030'}}>
                <Home/>
                <Products/>
                <Steps/>
                <AboutTile1 header="Making It Fit"
                    desc="What's the first thing that comes to your mind when you think about an outfit? will it fit precisely?  Forget everything you thought you knew about sizes and fit. We do truly made to measure. Your measurements are always front and center to create your ideal fit."
                    image={makingItFitImg}/>
                <AboutTile2 header="Making It Right"
                    desc="Our tailors take honor in every step of their work whether it's cutting stitching or sewing with maximum care and accuracy. Feel as good as you look knowing that your garment is made with sustainability in mind by well-compensated workers."
                    image={makingItRightImg}/>
                <AboutTile1 header="Making It Yourself"
                    desc="You want it - we’ve got it, we provide a wide range of customizable options, make your outfit the way you like the way you want it to be. The outfit which is made for you precisely, with your personally chosen details. no premade bullshit."
                    image={makingItYourselfImg}/>
                <ContactUs/>
            </div>
        );
    }
}

export default HomePage;