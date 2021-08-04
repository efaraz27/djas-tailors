import React, { Component } from 'react'
import './ContactUs.css';
class ContactUs extends Component{
    render(){
        return(<div className='ContactUs' id='contact'>
            <div className='contact-us-content'>
                <div className='contact-heading'>Contact Us</div>
                <div className='phone'>Call Us: +91 89102 51031</div>
                <div className='address'>Address: 296, Acharya Prafulla Chandra Rd, Garpar, Raja Bazar, Kolkata, West Bengal 700009</div>
                <div className='email'>Email: djas@gmail.com</div>
            </div>
        </div>);
    }
}
export default ContactUs;