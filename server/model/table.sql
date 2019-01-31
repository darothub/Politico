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
    isAdmin BOOLEAN NULL
);
CREATE TABLE parties(
    ID SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    hqAddress VARCHAR NOT NULL,
    logoUrl VARCHAR NOT NULL
);
CREATE TABLE offices(
    ID SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL
);

CREATE TABLE candidates(
    ID SERIAL PRIMARY KEY,
    office INT NOT NULL,
    party INT NOT NULL,
    candidate INT NOT NULL
);

-- INSERT INTO users VALUES 
--     ('darot', 'darotudeen@gmail.com', 'okbakassi'),
--     ('amoke', 'amoke@gmail.com', 'alonge');
