const app = require("./src/app");
const dotenv = require("dotenv");
const connectDatabase = require("./src/config/database");
// const express = require("express");
// const multer = require("multer");
// const app = express();

// //upload files
// app.post("/upload", (req, resp) => {
//   resp.send("file upload");
// });

// app.listen(5000);

//handeling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(
    `Error ${err.message} sutting down the server due to uncaught exception`
  );
  process.exit(1);
});

//setting path for dotenv config
dotenv.config({ path: "./src/config/config.env" });

// connectDatabase
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(
    `Error ${err.message} sutting down the server due to unhandled promise rejection`
  );

  server.close(() => {
    process.exit(1);
  });
});
