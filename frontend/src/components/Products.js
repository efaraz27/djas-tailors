import React from 'react';
import {useHistory} from 'react-router-dom';
import './Products.css'

function Products() {
    const history =  useHistory()
    const handleClick1= () => {
        history.push('/shirts')
        window.scrollTo(0, 0)
    }
    const handleClick2= () => {
        history.push('/suits')
        window.scrollTo(0, 0)
    }
    const handleClick3= () => {
        history.push('/pants')
        window.scrollTo(0, 0)
    }
    return (
        <div className='Products' id='products'>
                <div className='shirt' onClick={handleClick1}><div className='bottom'>Custom Tailored <div className='product-head'>Shirts</div></div></div>
                <div className='suit' onClick={handleClick2}><div className='bottom'>Custom Tailored <div className='product-head'>Suits</div></div></div>
                <div className='pant' onClick={handleClick3}><div className='bottom'>Custom Tailored <div className='product-head'>Pants</div></div></div>
            </div>
    )
}
export default Products
