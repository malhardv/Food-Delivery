import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" height={'50px'}/>
                <p>Crave is your trusted food delivery partner, connecting you with the best flavors your city has to offer. With a focus on convenience, reliability, and supporting local businesses, we’re committed to making every meal special for you.</p>
                <div className="footer-social-icons">
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/about-us'}><li>About Us</li></Link>
                    <Link to={'/faqs'}><li>FAQs</li></Link>
                    <Link to={'/privacy'}><li>Privacy Policy</li></Link>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-234-567-8901</li>
                    <li>contact@crave.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © crave.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer