import bcrypt from 'bcryptjs';

import pool from './database';

const query = {

  text: 'INSERT INTO users(user_ids, first_name, last_name, other_name, email, phone_number, passport_url, password, is_admin) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
  values: ['9001', 'Tosin', 'Tosin', 'Tosin', 'tosin@yahoo.com', '080tosin', 'tosin.png', bcrypt.hashSync('Youngster1', 10), 'true'],
};

pool.query(query)
  .then(console.log('User created'))
  .catch(e => console.error(e.stack));
