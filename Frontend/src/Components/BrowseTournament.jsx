import React, { useEffect, useState } from "react";
import Game1 from "../assets/game1.jpg";
import Game2 from "../assets/game2.png";
import Game3 from "../assets/game3.jpg";
import Game4 from "../assets/game4.jpg";
import Coins from "../assets/coins.png";
import "./BrowseTournament.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function BrowseTournament() {
  const [show, setShow] = useState([]);
  useEffect(() => {
    async function getData() {
      let response = await axios.get(import.meta.env.VITE_BACKEND + `/show`);
      console.log(response);
      setShow(response.data.events);
    }
    getData();
  }, []);

  return <div className="browse-page" id="rag"></div>;
}

export default BrowseTournament;
