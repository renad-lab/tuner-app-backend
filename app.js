// app.js
// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");
const playlistsController = require("./controllers/playlistsController");
const songsController = require("./controllers/songsController");
const artistsController = require("./controllers/artistsController");

// CONFIGURATION

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/playlists", playlistsController);
app.use("/songs", songsController);
app.use("/artists", artistsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner App!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
