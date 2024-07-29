const db = require("../db/dbConfig.js");

// Retrieve all artists
const getAllArtists = async () => {
  try {
    const allArtists = await db.any("SELECT * FROM artists");
    return allArtists;
  } catch (error) {
    return error;
  }
};

// Retrieve a single artist by ID
const getArtist = async (id) => {
  try {
    const oneArtist = await db.one("SELECT * FROM artists WHERE id=$1", id);
    return oneArtist;
  } catch (error) {
    return error;
  }
};

// Create a new artist
const createArtist = async (artist) => {
  try {
    const newArtist = await db.one(
      "INSERT INTO artists (name, genre, country is_active) VALUES($1, $2, $3, $4) RETURNING *",
      [artist.name, artist.genre, artist.country, artist.is_active]
    );
    return newArtist;
  } catch (error) {
    return error;
  }
};

// Delete an artist by ID
const deleteArtist = async (id) => {
  try {
    const deletedArtist = await db.one(
      "DELETE FROM artists WHERE id = $1 RETURNING *",
      id
    );
    return deletedArtist;
  } catch (error) {
    return error;
  }
};

// Update an existing artist
const updateArtist = async (id, artist) => {
  try {
    const updatedArtist = await db.one(
      "UPDATE artists SET name=$1, genre=$2, country=$3, is_active=$4 WHERE id=$5 RETURNING *",
      [artist.name, artist.genre, artist.country, artist.is_active, id]
    );
    return updatedArtist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllArtists,
  getArtist,
  createArtist,
  deleteArtist,
  updateArtist,
};
