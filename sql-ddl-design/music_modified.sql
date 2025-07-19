-- Drop and create the database
DROP DATABASE IF EXISTS music;
CREATE DATABASE music;

\c music

-- Core Tables
CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  release_date DATE NOT NULL,
  album TEXT NOT NULL
);

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE producers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

-- Join Tables
CREATE TABLE song_artists (
  song_id INT REFERENCES songs(id) ON DELETE CASCADE,
  artist_id INT REFERENCES artists(id) ON DELETE CASCADE,
  PRIMARY KEY (song_id, artist_id)
);

CREATE TABLE song_producers (
  song_id INT REFERENCES songs(id) ON DELETE CASCADE,
  producer_id INT REFERENCES producers(id) ON DELETE CASCADE,
  PRIMARY KEY (song_id, producer_id)
);
