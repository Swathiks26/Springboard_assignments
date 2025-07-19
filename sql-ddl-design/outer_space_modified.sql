DROP DATABASE IF EXISTS universe;
CREATE DATABASE universe;

\c universe

-- Planets table
CREATE TABLE planets (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around TEXT NOT NULL,
  galaxy TEXT NOT NULL
);

-- Moons table (normalized)
CREATE TABLE moons (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  planet_id INTEGER NOT NULL REFERENCES planets(id) ON DELETE CASCADE
);
