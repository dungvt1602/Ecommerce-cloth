import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div>
    <div className="footer">
        <div className="logo-footer">
            <img src={logo} alt="logo" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy text ever since the 1500s, when an 
              unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
        </div>

        <div className="about-footer">
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>

        <div className='contact-footer'>
            <p className='text-xl font-medium mb-5'>CONTACT</p>
            <ul>
              <li>(84+)328724589</li>
              <li>HoChiMinh city, VIETNAM</li>
        
            </ul>
           
        </div>
    </div>
    
    <div className="copy-right">
      <hr/>
      <p className='py-5 text-sm text-center font-medium'>Copyright 2025@ nguyentiendung.dev - All Right Reserved.</p>
    </div>
    
    </div>
  )
}

export default Footer