import React from 'react'
import {useHistory} from 'react-router-dom';
import AboutTile2 from './AboutTile2';
import Navbar2 from './Navbar2';
import AboutCard from './AboutCard';
import './ShirtPage.css'

//image imports
import makingItYourselfImg from '../images/making-it-yourself.jpg'
import fabricImage from '../images/about/fabric.jpg'
import interliningImage from '../images/about/interlining.jpg'
import seamsImage from '../images/about/seams.jpg'
import collarsImage from '../images/about/collars.jpg'
import cuffsImage from '../images/about/cuffs.jpg'
import buttonsImage from '../images/about/buttons.jpg'




function ShirtPage() {
    const history = useHistory()
    return (
        <div className='shirt-page'>
            <Navbar2/>
            <div className='shirt-home'>
                <div className="content">
                    <div className='slogan'>Custom-tailored dress shirts</div>
                    <div className='btn'  onClick={()=>{history.push('/create-shirt')}}>Create your shirt</div>
                </div>
            </div>
            <div className='shirt-about'>
                <div className='header'>
                    Custom-tailored dress shirts made easy
                    <div className='desc'>Eager to learn more about our fantastic custom-tailored dress shirts? Behind every produced garment lies high-quality fabrics and innovative, ever-evolving technology. We believe this is the future. When you slip on your one-of-a-kind Tailor Store dress shirt, you won’t just feel the difference, you’ll remember it forever.</div>
                </div>
            </div>
            <AboutTile2
                header="A Sustainable Dress Shirt Production"
                desc="We believe in transparency and ethical production of our dress shirts. Therefore, we fully own, operate, and take responsibility for our facilities in Sri Lanka. Our tailors are well-compensated and we believe in full transparency throughout the process from raw materials to finished products. We produce every garment to order in our production in order to avoid any waste and store unnecessary inventory."
                image={makingItYourselfImg}/>
            <div className='shirt-about'>
                <div className='header'>
                    The road to a perfect fit
                    <div className='desc'>Using precise construction to make each dress shirt and artificial intelligence to gather on point measurements, there’s a lot of work and care behind each and every custom-tailored dress shirt we produce. Combining the skills of our talented tailors with innovative engineering and the authenticity of our brand is what separates us and our dress shirts from the rest.</div>
                </div>
                <div className='about-cards'>
                    <AboutCard image={fabricImage} desc={'A custom-tailored dress shirt is nothing without a good quality fabric. That’s why we use nothing less than high-quality fabrics. Discover our wide range of shirt fabrics, ranging from pure business to bold and fun patterns, we’ve got something for all tastes.'}/>
                    <AboutCard image={interliningImage} desc={'Our high-quality interlinings are made by the best craftmens to ensure the best result possible for our dress shirts. Up to three different thicknesses are available to get the perfect finish of the collar and cuff. Choose your preference.'}/>
                    <AboutCard image={seamsImage} desc='Our high-quality sewing thread, produced by European suppliers, and our skilled tailors allow us to stitch together the perfect shirt that will last. Each seam with its unique, special purpose.' />
                    <AboutCard image={collarsImage} desc='Our collars are engineered to fit the curve around the neck perfectly. A wide range of different collar styles allows variation and a fit for every occasion. The interlining is fused together with the collar and gives the perfect stiffness and look to the shirt.' />
                    <AboutCard image={cuffsImage} desc='Our wide range of different cuff styles allows variation and a fit for every occasion. The interlining is fused together with the cuff and gives the perfect stiffness and finish to the shirt.' />
                    <AboutCard image={buttonsImage} desc='Our high-quality buttons are available in a wide range of colors and shapes, all designed to match our different fabrics and colors perfectly. For the supreme look, we also offer buttons made out of exclusive mother of pearl.' />
                </div>
            </div>
            
        </div>
    )
}

export default ShirtPage
