const express = require("express");
const router = express.Router();
const axios = require("axios");
//to show events

const token = {
  token_type: "Bearer",
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzgzMzQwLCJpYXQiOjE3MjA3ODMwNDAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjBiNGVlMDMxLTgyZWEtNGE3MS1iZDVlLTQxOTdiOWI1YzZlNiIsInN1YiI6InJhZ2hhdi5ndXB0YV9jczIxQGdsYS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiMGI0ZWUwMzEtODJlYS00YTcxLWJkNWUtNDE5N2I5YjVjNmU2IiwiY2xpZW50U2VjcmV0IjoiWmZQZXJRZ3ZaUGJkdHZNbyIsIm93bmVyTmFtZSI6IlJhZ2hhdiIsIm93bmVyRW1haWwiOiJyYWdoYXYuZ3VwdGFfY3MyMUBnbGEuYWMuaW4iLCJyb2xsTm8iOiIyMTE1MDAwNzk2In0.TIkpTjcxBHYEJyqcVkU9Q9w0Pp6t2TIxaqYVIOYSGYs",
  expires_in: 1720783340,
};

router.get("/products", async (req, res) => {
  let { companyName, category, n, minPrice, maxPrice } = req.body;
  try {
    const response = await axios.get(
      `http://20.244.56.144/test/companies/${companyName}/categories/${category}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      {
        // params: { minPrice, maxPrice, top }, // Include 'top' parameter here
        headers: {
          Authorization: `Bearer ${token.access_token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    if (error.response) {
      console.error(
        "Server responded with:",
        error.response.status,
        error.response.data
      );
      res.status(error.response.status).json(error.response.data); // Send error response back to client
    } else {
      res.status(500).json({ message: "Internal Server Error" }); // Handle other types of errors
    }
  }
});
