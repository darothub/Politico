DROP DATABASE IF EXISTS testpolitico;
CREATE DATABASE testpolitico;
\c testpolitico
CREATE TABLE users(
    id SERIAL,
    user_ids INTEGER NOT NULL PRIMARY KEY,
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
    id SERIAL,
    office INTEGER NOT NULL,
    party INTEGER NOT NULL,
    candidate INTEGER,
    PRIMARY KEY(candidate, office)
);

CREATE TABLE votes(
    id SERIAL,
    office INTEGER NOT NULL,
    candidate INTEGER NOT NULL,
    voter INTEGER,
    PRIMARY KEY(voter, office)
);



