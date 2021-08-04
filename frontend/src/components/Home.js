import React from 'react';
import './Home.css';
import {useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory()
    const handleClick = () => {
        history.push('create-shirt')
    }
    return(
        <div className='Home  w3-animate-top' id="home">
            <div className="content">
                <div className='slogan'>Fashion as unique as you are.</div>
                <div className='tagline'>Custom Tailored Shirts, Suits and More </div>
                   <div className='btn' onClick={handleClick}>Create your shirt</div>
            </div>
        </div>
    );
}

export default Home
