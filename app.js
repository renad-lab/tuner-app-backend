// app.js
// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songsController");

// CONFIGURATION

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner App!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
