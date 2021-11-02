const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config({ path: "./config/config.env" });
const middleware = require("./middleware/middleware");
const connectDB = require("./config/db");
const router = require("./router/routes");
//init express
const app = express();
//init express json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// enviromwnt variable
const url = process.env.API_URL;
const port = process.env.PORT;
//middleware
middleware(app);
connectDB();
//router
app.use(`${url}`, router);
//listen to server
app.listen(port, () =>
  console.log(`Server Running on port ${port}`.bgYellow.black)
);
