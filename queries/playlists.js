const db = require("../db/dbConfig.js");

// Retrieve all playlists
const getAllPlaylists = async () => {
  try {
    const allPlaylists = await db.any("SELECT * FROM playlists");
    return allPlaylists;
  } catch (error) {
    return error;
  }
};

// Retrieve a single playlist by ID
const getPlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    return onePlaylist;
  } catch (error) {
    return error;
  }
};

// Create a new playlist
const createPlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlists (name, description, creation_date, is_public) VALUES($1, $2, $3, $4) RETURNING *",
      [
        playlist.name,
        playlist.description,
        playlist.creation_date,
        playlist.is_public,
      ]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
};

// Delete a playlist by ID
const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlists WHERE id = $1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (error) {
    return error;
  }
};

// Update an existing playlist
const updatePlaylist = async (id, playlist) => {
  try {
    const updatedPlaylist = await db.one(
      "UPDATE playlists SET name=$1, description=$2, creation_date=$3, is_public=$4 WHERE id=$5 RETURNING *",
      [
        playlist.name,
        playlist.description,
        playlist.creation_date,
        playlist.is_public,
        id,
      ]
    );
    return updatedPlaylist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
};
