import React, { useRef } from "react";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const companyName = useRef();
  const category = useRef();
  const minPrice = useRef();
  const maxPrice = useRef();
  const n = useRef();
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND + `/products`,
        {
          companyName: companyName.current.value,
          category: category.current.value,
          n: n.current.value,
          minPrice: minPrice.current.value,
          maxPrice: maxPrice.current.value,
        }
      );
      console.log(response.data);
      navigate("/"); // Navigate to the desired route after a successful API call
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <label htmlFor="n">Number</label>
      <input type="number" id="n" placeholder="Enter N" ref={n} />
      <br />
      <select name="companyName" id="companyName" ref={companyName}>
        <option value="AMZ">AMZ</option>
        <option value="FLP">FLP</option>
        <option value="SNP">SNP</option>
        <option value="AZO">AZO</option>
      </select>
      <br />
      <select name="category" id="category" ref={category}>
        <option value="Phone">Phone</option>
        <option value="Computer">Computer</option>
        <option value="TV">TV</option>
        <option value="Earphone">Earphone</option>
        <option value="Tablet">Tablet</option>
        <option value="Charger">Charger</option>
      </select>
      <br />
      <label htmlFor="minPrice">Min value</label>
      <input type="number" name="minPrice" id="minPrice" ref={minPrice} />
      <br />
      <label htmlFor="maxPrice">Max value</label>
      <input type="number" name="maxPrice" id="maxPrice" ref={maxPrice} />
      <br />
      <button className="success" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export default HomePage;
