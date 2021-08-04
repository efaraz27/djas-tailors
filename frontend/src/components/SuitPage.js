import React from 'react'
import {useHistory} from 'react-router-dom';
import Navbar2 from './Navbar2'
import AboutTile1 from './AboutTile1';
import AboutTile2 from './AboutTile2';
import AboutCard from './AboutCard';
import './SuitPage.css'


//image imports
import fundamental_of_quality from '../images/fundamental_of_quality.jpg'
import shoulder from '../images/shoulder.jpg'
import suit_fabric from '../images/suit_fabric.jpg'
import step1 from '../images/suit_steps/step1.svg'
import step2 from '../images/suit_steps/step2.svg'
import step3 from '../images/suit_steps/step3.svg'
import step4 from '../images/suit_steps/step4.svg'


function SuitPage() {
    const history = useHistory()
    return (
        <div className='suit-page'>
            <Navbar2/>
            <div className='suit-home'>
                <div className="content">
                    <div className='slogan'>Custom-tailored Suits</div>
                    <div className='btn' onClick={()=>{history.push('/create-suit')}}>Create your suit</div>
                </div>
            </div>
            <div className='suit-about'>
                <div className='header'>
                    A new way to secure the perfect fit
                    <div className='desc'>A custom-tailored suit is much like a piece of art. We create custom-tailored suits in supreme quality with your unique fit in mind. Using our game-changing fitting samples you're guaranteed a perfect fit from the very start. Discover a new way of shopping suits, it doesn’t get much more revolutionary than this.</div>
                </div>
            </div>
            <AboutTile1
                header='The fundamental of a quality suit'
                desc='Our suits are made precisely by one of the best teams in business, they make it with utter care and diligence meeting your requirement and our standards, based on your measurements, they chalk it directly upon the fabric of your choice.'
                image={fundamental_of_quality}/>
            <AboutTile2
                header='The suit’s shoulders hug yours'
                desc='The suit jacket shoulders should gently hug and encase yours, creating the perfect structure. To achieve this, our suits feature a small top shoulder canvas, and pads are manually attached. A further subtle enhancement is the use of cotton tapes to strengthen the shoulder seams.'
                image={shoulder}/>
            <AboutTile1
                header='Quality fabrics'
                desc='A good quality fabric helps the suit keep its shape. All of our suit fabrics provide both comfort and a tailored finish. This makes it easier than ever to create the suit of your dreams, wearable for all those types of occasions you have in mind.'
                image={suit_fabric}/>
            <div className='blue-bg'>
                <div className='header'>
                        How long does it take to make my custom-tailored suit?
                        <div className='desc'>There are some things in life you shouldn’t rush, and greatness is one of them. Since our suits are designed and made explicitly using your measurements, please allow approximately 4-6 weeks for both fitting sample(s) and the final suit.</div>
                </div>
            </div>
            <div className='step-cards'>
                <AboutCard image={step1} desc='1) Measuring - Use a measuring tape'/>
                <AboutCard image={step2} desc="2) Design and order your suit - we'll send you a fitting sample for free"/>
                <AboutCard image={step3} desc='3) Time to test the fitting sample + communication with customer service'/>
                <AboutCard image={step4} desc='4) Delivery of the finished garment'/>
                
            </div>
        </div>
    )
}

export default SuitPage
