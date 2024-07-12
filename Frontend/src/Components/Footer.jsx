import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-page'>
        <div className='subscribe-div'>
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <div className='input-div'>
                <p>Your Email Address</p>
                <a href="#">Subscribe</a>
            </div>
        </div>
        <div className='footer-div'>
            <div>
                <h5>ABOUT US</h5>
                <p>&raquo; About Us</p>
                <p>&raquo; Contact Us</p>
                <p>&raquo; Latest Blog</p>
                <p>&raquo; Authenticity Gaurantee</p>
            </div>
            <div>
                <h5>MY ACCOUNT</h5>
                <p>&raquo; About Us</p>
                <p>&raquo; Contact Us</p>
                <p>&raquo; Latest Blog</p>
                <p>&raquo; Authenticity Gaurantee</p>
            </div>
            <div>
                <h5>HELP CENTER</h5>
                <p>&raquo; About Us</p>
                <p>&raquo; Contact Us</p>
                <p>&raquo; Latest Blog</p>
                <p>&raquo; Authenticity Gaurantee</p>
            </div>
            <div>
                <h5>LEGAL INFO</h5>
                <p>&raquo; About Us</p>
                <p>&raquo; Contact Us</p>
                <p>&raquo; Latest Blog</p>
                <p>&raquo; Authenticity Gaurantee</p>
            </div>
        </div>
        <div className='copyright-div'>
            <div className='copyright-text'>Copyright &copy; 2024. All rights reserved by <span>GamePlay</span></div>
            <div className='icons-div'></div>
        </div>
    </div>
  )
}

export default Footer