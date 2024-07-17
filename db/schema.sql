-- Drop the database if it exists
DROP DATABASE IF EXISTS songs_dev;

-- Create the database
CREATE DATABASE songs_dev;

-- Connect to the database
\c songs_dev;

-- Create the songs table with the required columns

CREATE TABLE songs (
  id SERIAL PRIMARY KEY, 
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  album TEXT,
  time TEXT,
  is_favorite BOOLEAN
);




