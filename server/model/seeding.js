import bcrypt from 'bcryptjs';

import pool from './database';

const query = {
  text: 'INSERT INTO users(user_id, first_name, last_name, other_name, email, phone_number, passport_url, password, is_admin) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
  values: ['9001', 'Tosin', 'Tosin', 'Tosin', 'tosin@yahoo.com', '080tosin', 'tosin.png', bcrypt.hashSync('Youngster1', 10), 'true'],
};
pool.query(query)
  .then(console.log('User created'))
  .catch(e => console.error(e.stack));

// const officeQuery = {
//   text: 'INSERT INTO offices(office_id, name, type) VALUES($1, $2, $3),($1, $2, $3)',
//   values: ['901', 'President', 'Federal', '902', 'Senator', 'Federal'],
// };

// pool.query(officeQuery)
//   .then(console.log('New office created'))
//   .catch(e => console.error(e.stack));

// const partyQuery = {
//   text: 'INSERT INTO parties(party_id, name, hqAddress, logoUrl) VALUES($1, $2, $3, $4)',
//   values: ['91', 'APC', '1, APC avenue', 'www.apc.com.jpg'],
// };

// pool.query(partyQuery)
//   .then(console.log('New party created'))
//   .catch(e => console.error(e.stack));
