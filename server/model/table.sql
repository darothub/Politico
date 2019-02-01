DROP DATABASE IF EXISTS politico;
CREATE DATABASE politico;
\c politico
CREATE TABLE users(
    id SERIAL,
    user_id INTEGER NOT NULL PRIMARY KEY,
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
    id SERIAL,
    party_id INTEGER PRIMARY KEY,
    name VARCHAR NOT NULL,
    hqAddress VARCHAR NOT NULL,
    logoUrl VARCHAR NOT NULL
);
CREATE TABLE offices(
    id SERIAL,
    office_id INTEGER PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL
);

CREATE TABLE candidates(
    id SERIAL,
    office INTEGER NOT NULL REFERENCES offices(office_id),
    party INTEGER NOT NULL,
    candidate INTEGER REFERENCES users(user_id)
);


INSERT INTO offices(office_id, name, type) VALUES('901', 'President', 'Federal'),('902', 'Senator', 'Federal');
INSERT INTO parties(party_id, name, hqAddress, logoUrl) VALUES('91', 'APC', '1, APC avenue', 'www.apc.com.jpg'),
('92', 'APGA', '1, APGA avenue', 'www.apga.com.jpg');
