/* eslint-disable no-console */
import bcrypt from 'bcryptjs';

import pool from './database';

const user1 = {
  text: 'INSERT INTO users(first_name, last_name, other_name, email, phone_number, passport_url, password, is_admin) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
  values: ['Tosin', 'Tosin', 'Tosin', 'tosin@yahoo.com', '080tosin', 'tosin.png', bcrypt.hashSync('Youngster1', 10), 'true'],
};

pool.query(user1)
  .then(console.log('Admincreated'))
  .catch(e => console.error(e.stack));

const user2 = {

  text: 'INSERT INTO users(first_name, last_name, other_name, email, phone_number, passport_url, password, is_admin) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
  values: ['Tola', 'Tola', 'Tola', 'tola@yahoo.com', '080tola', 'tola.png', bcrypt.hashSync('Youngster1', 10), 'false'],
};

pool.query(user2)
  .then(console.log('user created'))
  .catch(e => console.error(e.stack));

const user3 = {

  text: 'INSERT INTO users(first_name, last_name, other_name, email, phone_number, passport_url, password, is_admin) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
  values: ['Tolas', 'Tolas', 'Tolas', 'tolas@yahoo.com', '080tolas', 'tolas.png', bcrypt.hashSync('Youngster1', 10), 'false'],
};

pool.query(user3)
  .then(console.log('user created'))
  .catch(e => console.error(e.stack));

const party1 = {

  text: 'INSERT INTO parties(name, hqAddress, logoUrl ) VALUES($1, $2, $3)',
  values: ['CPC', 'CPC avenue', 'www.logo.net.png'],
};
pool.query(party1)
  .then(console.log('party1 created'))
  .catch(e => console.error(e.stack));

const party2 = {

  text: 'INSERT INTO parties(name, hqAddress, logoUrl ) VALUES($1, $2, $3)',
  values: ['CPPC', 'CPPC avenue', 'www.logo.net.png'],
};
pool.query(party2)
  .then(console.log('party2 created'))
  .catch(e => console.error(e.stack));

const office1 = {

  text: 'INSERT INTO offices(name, type) VALUES($1, $2)',
  values: ['Chairman', 'Local'],
};
pool.query(office1)
  .then(console.log('office1 created'))
  .catch(e => console.error(e.stack));

const office2 = {
  text: 'INSERT INTO offices(name, type) VALUES($1, $2)',
  values: ['Concillor', 'Local'],
};

pool.query(office2)
  .then(console.log('office2 created'))
  .catch(e => console.error(e.stack));

const candidate1 = {
  text: 'INSERT INTO candidates(office, party, candidate) VALUES($1, $2, $3)',
  values: ['1', '2', '9002'],
};

pool.query(candidate1)
  .then(console.log('candidate1 created'))
  .catch(e => console.error(e.stack));

const candidate2 = {

  text: 'INSERT INTO candidates(office, party, candidate ) VALUES($1, $2, $3)',
  values: ['2', '1', '9003'],
};

pool.query(candidate2)
  .then(console.log('candidate2 created'))
  .catch(e => console.error(e.stack));

const vote1 = {

  text: 'INSERT INTO votes(office, candidate, voter ) VALUES($1, $2, $3)',
  values: ['1', '9002', '9001'],
};

pool.query(vote1)
  .then(console.log('vote1 created'))
  .catch(e => console.error(e.stack));
