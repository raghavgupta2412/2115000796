import React from 'react'
import Game1 from '../assets/game1.jpg'
import Game2 from '../assets/game2.png'
import Game3 from '../assets/game3.jpg'
import Game4 from '../assets/game4.jpg'
import LeftArrow from '../assets/arrow-left.png'
import RightArrow from '../assets/arrow-right.png'
import './GameShow.css'

function GameShow() {
  return (
    <div className='game-container'>
        <div className='game-div'>
          <div className='game-head-div'>
            <h3>Available Games</h3>
            <p>We are constantly adding new Games for you.</p>
          </div>
          <div className='game-img-div'>
          <img src={LeftArrow} alt="" />
            <img src={RightArrow} alt="" />
          </div>
        </div>
        <div className='game-images'>
            <img src={Game1} alt="" />
            <img src={Game2} alt="" />
            <img src={Game3} alt="" />
            <img src={Game4} alt="" />
        </div>
      </div>
  )
}

export default GameShow