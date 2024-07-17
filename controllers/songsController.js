const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/song");
const { checkName, checkBoolean } = require("../validations/checkSongs");

// Function to check if ID is valid
const isValidId = async (id) => {
  const song = await getSong(id);
  return !!song;
};

// INDEX
songs.get("/", async (req, res) => {
  const { order, is_favorite } = req.query;
  try {
    const allSongs = await getAllSongs(order, is_favorite);
    if (allSongs.length > 0) {
      res.status(200).json(allSongs);
    } else {
      res.status(404).json({ error: "No songs found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// SHOW
songs.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const isValid = await isValidId(id);
    if (!isValid) {
      return res.status(404).json({ error: "Song not found" });
    }
    const song = await getSong(id);
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE
songs.post("/", checkName, checkBoolean, async (req, res) => {
  try {
    const newSong = await createSong(req.body);
    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
songs.put("/:id", checkName, checkBoolean, async (req, res) => {
  try {
    const { id } = req.params;
    const isValid = await isValidId(id);
    if (!isValid) {
      return res.status(404).json({ error: "Song not found" });
    }
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
songs.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const isValid = await isValidId(id);
    if (!isValid) {
      return res.status(404).json({ error: "Song not found" });
    }
    const deletedSong = await deleteSong(id);
    res.status(200).json(deletedSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = songs;
