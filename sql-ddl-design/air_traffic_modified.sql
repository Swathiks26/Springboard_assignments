-- 1. Passengers
CREATE TABLE passengers (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

-- 2. Airlines
CREATE TABLE airlines (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

-- 3. Locations
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  UNIQUE(city, country)
);

-- 4. Tickets
CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  passenger_id INT REFERENCES passengers(id),
  airline_id INT REFERENCES airlines(id),
  seat TEXT NOT NULL,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  from_location_id INT REFERENCES locations(id),
  to_location_id INT REFERENCES locations(id)
);
