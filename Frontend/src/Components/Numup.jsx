import React from 'react'
import './Numup.css'
import logo from "../assets/gamelogo1.png"

function Numup() {
    let valueDisplays = document.querySelectorAll(".num");
      let interval = 4000;
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
      
  return (
    <div className="numup">
        <div className="wrapper"> 
          <div className="container">
            <img src={logo} alt="" />
            <span className="num" data-val="100">0</span>
            <span className="text">Match Played</span>
          </div>
          <div className="container">
            <img src={logo} alt="" />
            <span className="num" data-val="50">0</span>
            <span className="text">Winnings Paid</span>
          </div>
          <div className="container">
            <img src={logo} alt="" />
            <span className="num" data-val="25">0</span>
            <span className="text">Active Ladders</span>
          </div>
          <div className="container">
            <img src={logo} alt="" />
            <span className="num" data-val="130">0</span>
            <span className="text">XP Earned</span>
          </div>
        </div>
    </div>
  )
}

export default Numup