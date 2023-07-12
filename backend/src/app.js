const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const error = require("./middleware/error");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
  })
);

//route imports
const user = require("./routes/userRoute");

app.use("/api/v1", user);

//middleware for error
app.use(error);

module.exports = app;
