// DEPENDENCIES
const express = require("express");
const playlists = express.Router();

const songsController = require("./songsController.js");
//localhost:4001/playlists/1/songs
playlists.use("/:playlist_id/songs", songsController);

// Queries
const {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../queries/playlists");

// Validations
const { checkName, validateURL } = require("../validations/checkPlaylists.js");

// INDEX
playlists.get("/", async (req, res) => {
  try {
    const allPlaylists = await getAllPlaylists();
    if (allPlaylists[0]) {
      res.status(200).json(allPlaylists);
    } else {
      res.status(404).json({ error: "No playlists found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// SHOW
playlists.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const playlist = await getPlaylist(id);
    if (playlist) {
      res.status(200).json(playlist);
    } else {
      res.status(404).json({ error: "Playlist not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// CREATE
playlists.post("/", checkName, validateURL, async (req, res) => {
  try {
    const playlist = await createPlaylist(req.body);
    res.status(201).json(playlist);
  } catch (error) {
    res.status(400).json({ error: "Error creating playlist" });
  }
});

// DELETE
playlists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPlaylist = await deletePlaylist(id);
    if (deletedPlaylist) {
      res.status(200).json(deletedPlaylist);
    } else {
      res.status(404).json({ error: "Playlist not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// UPDATE
playlists.put("/:id", checkName, validateURL, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPlaylist = await updatePlaylist(id, req.body);
    if (updatedPlaylist) {
      res.status(200).json(updatedPlaylist);
    } else {
      res.status(404).json({ error: "Playlist not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = playlists;
