// DEPENDENCIES
const express = require("express");
const artists = express.Router();

// Queries
const {
  getAllArtists,
  getArtist,
  createArtist,
  updateArtist,
  deleteArtist,
} = require("../queries/artists");

const { checkName } = require("../validations/checkPlaylists");

// INDEX
// e.g., localhost:4001/artists
artists.get("/", async (req, res) => {
  try {
    const artistsList = await getAllArtists();
    res.status(200).json(artistsList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// SHOW
// e.g., localhost:4001/artists/1
artists.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const artist = await getArtist(id);
    if (artist) {
      res.status(200).json(artist);
    } else {
      res.status(404).json({ error: "Artist not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE
// e.g., POST to localhost:4001/artists
artists.post("/", checkName, async (req, res) => {
  try {
    const newArtist = await createArtist(req.body);
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE
// e.g., PUT to localhost:4001/artists/1
artists.put("/:id", checkName, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedArtist = await updateArtist(id, req.body);
    if (updatedArtist) {
      res.status(200).json(updatedArtist);
    } else {
      res.status(404).json({ error: "Artist not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
// e.g., DELETE to localhost:4001/artists/1
artists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedArtist = await deleteArtist(id);
    if (deletedArtist) {
      res.status(200).json(deletedArtist);
    } else {
      res.status(404).json({ error: "Artist not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = artists;
