import React from 'react'
import left from '../assets/left-banner.png'
import right from '../assets/right-banner.png'
import versus from '../assets/versus.png'
import './Landing.css'

function Landing() {
  return (
    <div className='home-page'>
        <div className='home-container'>
          <h4>PLAY UNLIMITED</h4>
          <h3>TOURNAMENTS</h3>
          <p>Compete in Free and Paid entry Tournaments. Transform your games to real money.</p>
          <a href="#" className='home-btn'>Get Started</a>
          <div className='image-div'>
            <img src={left} className='boy' alt="" />
            <img className='versus' src={versus} alt="" />
            <img src={right} className='girl' alt="" />
          </div>
        </div>
      </div>
  )
}

export default Landing