-- -- Drop the database if it exists



-- DROP DATABASE IF EXISTS songs_dev;

-- -- Create the database
-- CREATE DATABASE songs_dev;

-- -- Connect to the database
-- \c songs_dev;

-- -- Create the songs table with the required columns

-- CREATE TABLE songs (
--   id SERIAL PRIMARY KEY, 
--   name TEXT NOT NULL,
--   artist TEXT NOT NULL,
--   album TEXT,
--   time TEXT,
--   is_favorite BOOLEAN
-- );


-- Drop and create the database
DROP DATABASE IF EXISTS music_dev;
CREATE DATABASE music_dev;

-- Connect to the database
\c music_dev;

-- Suppress notices

SET client_min_messages = WARNING;
-- The notices you see about tables not existing are normal because the DROP TABLE IF EXISTS statements check if the tables exist before attempting to drop them. If they don't exist, it simply skips the drop, which is why you're seeing the "does not exist, skipping" notices.

-- Drop tables if they exist to start fresh
DROP TABLE IF EXISTS playlist_songs;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS playlists;
DROP TABLE IF EXISTS artists;

-- Create table for artists
CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    genre TEXT,
    country TEXT,
    is_active BOOLEAN DEFAULT FALSE
);

-- Create songs table
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    album VARCHAR(255),
    duration INTEGER,
    is_favorite BOOLEAN DEFAULT FALSE,
    artist_id INT REFERENCES artists(id) ON DELETE CASCADE
);

-- Create playlists table
CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    creation_date DATE DEFAULT CURRENT_DATE,
    is_public BOOLEAN DEFAULT TRUE
);

-- Create playlist_songs table
CREATE TABLE playlist_songs (
    playlist_id INT REFERENCES playlists(id) ON DELETE CASCADE,
    song_id INT REFERENCES songs(id) ON DELETE CASCADE
);

