DROP DATABASE IF EXISTS politico;
CREATE DATABASE politico;
\c politico
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    other_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone_number VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    passport_url VARCHAR NOT NULL,
    is_admin BOOLEAN DEFAULT false
);
CREATE TABLE parties(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    hqAddress VARCHAR NOT NULL,
    logoUrl VARCHAR NOT NULL
);
CREATE TABLE offices(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL
);

CREATE TABLE candidates(
    id SERIAL REFERENCES users(id),
    office INTEGER NOT NULL REFERENCES offices(id),
    party INTEGER NOT NULL,
    candidate INTEGER NOT NULL
);

