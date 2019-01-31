import bcrypt from 'bcryptjs';

import pool from './database';


const query = {
  text: 'INSERT INTO users(first_name, last_name, other_name, email, phone_number, passport_url, password, isAdmin) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
  values: ['Tosin', 'Tosin', 'Tosin', 'tosin@yahoo.com', '080tosin', 'tosin.png', bcrypt.hashSync('Youngster1', 10), 'yes'],
};

pool.query(query)
  .then(console.log('User created'))
  .catch(e => console.error(e.stack));
