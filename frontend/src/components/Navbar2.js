import React from 'react'
import {useHistory} from 'react-router-dom';
import './Navbar2.css'

function Navbar2() {
    const history =  useHistory()
    const handleClick = () => {
        history.push('/')
    }
    return (
        <div className='Navbar'>
            <div className='home-button' onClick={handleClick}>Back To Home</div>
        </div>
    )
}

export default Navbar2
