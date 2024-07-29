// DEPENDENCIES
const express = require("express");
const songs = express.Router({ mergeParams: true });

const { getPlaylist } = require("../queries/playlists");

// Queries
const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/songs");

const { checkName } = require("../validations/checkPlaylists");

// INDEX
// e.g., localhost:4001/playlists/1/songs
// songs.get("/", async (req, res) => {
//   const { playlist_id } = req.params;
//   try {
//     const songsList = await getAllSongs(playlist_id); //take out playlist_id
//     const playlist = await getPlaylist(playlist_id);
//     if (playlist) {
//       res.status(200).json({ ...playlist, songs: songsList });
//     } else {
//       res.status(404).json({ error: "Playlist not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

songs.get("/", async (req, res) => {
  const { playlist_id } = req.params; // Get the playlist_id from the request parameters
  try {
    let songsList;

    // Check if playlist_id is provided
    if (playlist_id) {
      const playlist = await getPlaylist(playlist_id); // Try to get the playlist

      if (playlist) {
        // If the playlist exists, get the songs for that playlist
        songsList = await getAllSongs(playlist_id);
        return res.status(200).json({ ...playlist, songs: songsList });
      }
    }

    // If no playlist_id is provided or the playlist doesn't exist, get all songs
    songsList = await getAllSongs();
    res.status(200).json({ songs: songsList });
  } catch (error) {
    // Handle any errors that occur during database operations
    res.status(500).json({ error: error.message });
  }
});

// SHOW
// e.g., localhost:4001/playlists/1/songs/1
songs.get("/:id", async (req, res) => {
  const { playlist_id, id } = req.params;
  try {
    const song = await getSong(id);
    const playlist = await getPlaylist(playlist_id);
    if (song && playlist) {
      res.status(200).json({ ...playlist, song });
    } else {
      res.status(404).json({ error: "Song or playlist not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE
// e.g., POST to localhost:4001/playlists/1/songs
songs.post("/", checkName, async (req, res) => {
  const { playlist_id } = req.params;
  try {
    const newSong = await createSong({ ...req.body, playlist_id });
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE
// e.g., PUT to localhost:4001/playlists/1/songs/1
songs.put("/:id", checkName, async (req, res) => {
  const { playlist_id, id } = req.params;
  try {
    const updatedSong = await updateSong(id, { playlist_id, ...req.body });
    if (updatedSong) {
      res.status(200).json(updatedSong);
    } else {
      res.status(404).json({ error: "Song not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
// e.g., DELETE to localhost:4001/playlists/1/songs/1
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSong = await deleteSong(id);
    if (deletedSong) {
      res.status(200).json(deletedSong);
    } else {
      res.status(404).json({ error: "Song not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = songs;
