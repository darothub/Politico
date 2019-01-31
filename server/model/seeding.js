import pg from 'pg';

import dotenv from 'dotenv';

import bcrypt from 'bcryptjs';

dotenv.config();

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_pass,
  port: process.env.DB_PORT,
  max: 10,
  idleTimeoutMillis: 3000,
});

// const dropQuery = {
//   text: 'DROP DATABASE IF EXISTS politico',
// };
// const createQuery = {
//   text: 'CREATE DATABASE politico',
// };
const query = {
  text: 'INSERT INTO users(first_name, last_name, other_name, email, phone_number, passport_url, password, isAdmin) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
  values: ['Tosin', 'Tosin', 'Tosin', 'tosin@yahoo.com', '080tosin', 'tosin.png', bcrypt.hashSync('Youngster1', 10), 'yes'],
};
// pool.query(dropQuery)
//   .then(console.log('Database dropped'))
//   .catch(e => console.error(e.stack));
// pool.query(createQuery)
//   .then(console.log('Database politico created'))
//   .catch(e => console.error(e.stack));
pool.query(query)
  .then(console.log('User created'))
  .catch(e => console.error(e.stack));

export default pool;
