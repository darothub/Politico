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


const query = {
  text: 'INSERT INTO users(first_name, last_name, other_name, email, phone_number, passport_url, password, is_admin) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
  values: ['Tosin', 'Tosin', 'Tosin', 'tosin@yahoo.com', '080tosin', 'tosin.png', bcrypt.hashSync('Youngster1', 10), 'true'],
};
pool.query(query)
  .then(console.log('User created'))
  .catch(e => console.error(e.stack));

const officeQuery = {
  text: 'INSERT INTO offices(name, type) VALUES($1, $2)',
  values: ['President', 'Federal'],
};

pool.query(officeQuery)
  .then(console.log('New office created'))
  .catch(e => console.error(e.stack));

const partyQuery = {
  text: 'INSERT INTO parties(name, hqAddress, logoUrl) VALUES($1, $2, $3)',
  values: ['APC', '1, APC avenue', 'www.apc.com.jpg'],
};

pool.query(partyQuery)
  .then(console.log('New party created'))
  .catch(e => console.error(e.stack));
export default pool;
