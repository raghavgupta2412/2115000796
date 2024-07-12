const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./Apis/ProductRoutes");

mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log("DB Connected!"))
  .catch(() => console.log("Error connecting DB"));

var whitelist = ["http://localhost:5173", "http://localhost:5174"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors("*"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(productRouter);

const PORT = 8089;
app.listen(PORT, () => {
  console.log("Server Connected at " + PORT);
});
