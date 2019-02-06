import pool from './database';

const userCreateQuery = {
  text: 'CREATE TABLE users(id SERIAL, user_ids INTEGER NOT NULL PRIMARY KEY,first_name VARCHAR NOT NULL, last_name VARCHAR NOT NULL, other_name VARCHAR NOT NULL, email VARCHAR NOT NULL, phone_number VARCHAR NOT NULL, password VARCHAR NOT NULL, passport_url VARCHAR NOT NULL, is_admin BOOLEAN DEFAULT false)',
}
pool.query(userCreateQuery);
  .then(console.log('Users table created'))
  .catch(e => console.error(e.stack));

const partyQuery = 'CREATE TABLE parties(id SERIAL PRIMARY KEY,name VARCHAR NOT NULL,hqAddress VARCHAR NOT NULL, logoUrl VARCHAR NOT NULL)';
const partiesCreateQuery = {
    text: partyQuery,
}
pool.query(partiesCreateQuery);
    .then(console.log('parties table created'))
    .catch(e => console.error(e.stack));

const officesCreateQuery = {
    text: 'CREATE TABLE offices (id SERIAL PRIMARY KEY, name VARCHAR NOT NULL, type VARCHAR NOT NULL)',
}

pool.query(officesCreateQuery);
    .then(console.log('offices table created'))
    .catch(e => console.error(e.stack));

const candidateCreateQuery = {
    text: 'CREATE TABLE candidates(id SERIAL,office INTEGER NOT NULL REFERENCES offices(id), party INTEGER NOT NULL, candidate INTEGER REFERENCES users(user_ids))',
}

pool.query(candidateCreateQuery );
    .then(console.log('candidates table created'))
    .catch(e => console.error(e.stack));

const votesCreateQuery = {
        text: 'CREATE TABLE votes(id SERIAL, office INTEGER NOT NULL REFERENCES offices(id), candidate INTEGER NOT NULL, voter INTEGER REFERENCES users(user_ids))',
}
    
pool.query(candidateCreateQuery );
    .then(console.log('candidates table created'))
    .catch(e => console.error(e.stack));