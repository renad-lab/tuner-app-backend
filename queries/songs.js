const db = require("../db/dbConfig.js");

// Retrieve all songs
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

// Retrieve a single song by ID
const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

// Create a new song
const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist_id, album, duration, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist_id, song.album, song.duration, song.is_favorite]
    );
    console.log(newSong);
    return newSong;
  } catch (error) {
    console.error("Error creating song:", error);
    return error;
  }
};

// Delete a song by ID
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

// Update an existing song
const updateSong = async (id, song) => {
  try {
    console.log(song, id);
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, album=$2, duration=$3, is_favorite=$4, artist_id=$5 WHERE id=$6 RETURNING *",
      [
        song.name,
        song.album,
        song.duration,
        song.is_favorite,
        song.artist_id,
        +id,
      ]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
};
