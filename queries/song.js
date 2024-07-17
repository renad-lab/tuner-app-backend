// queries/song.js
const db = require("../db/dbConfig.js");

// Function to get all songs with optional filtering and sorting
const getAllSongs = async (order = "asc", isFavorite) => {
  let query = "SELECT * FROM songs";
  const params = [];

  if (isFavorite !== undefined) {
    query += " WHERE is_favorite = $1";
    params.push(isFavorite === "true"); // Convert string to boolean
  }

  if (order) {
    query += " ORDER BY name " + (order === "desc" ? "DESC" : "ASC");
  }

  try {
    const allSongs = await db.any(query, params);
    return allSongs;
  } catch (error) {
    return error;
  }
};

// Function to get a single song by ID
const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id = $1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

// Function to create a new song
const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

// Function to update an existing song
const updateSong = async (id, song) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

// Function to delete a song by ID
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getSong, createSong, updateSong, deleteSong };
