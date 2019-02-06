import pool from './database';

const userDropQuery = {
    text: 'DROP TABLE IF EXISTS users',
  };
pool.query(userDropQuery)
    .then(console.log('Users table created'))
    .catch(e => console.error(e.stack));
  
const officeDropQuery = {
   text: 'DROP TABLE IF EXISTS users;'
    }
pool.query(officeDropQuery)
    .then(console.log('offices table created'))
    .catch(e => console.error(e.stack));
  
const partiesDropQuery = {
   text: 'DROP TABLE IF EXISTS parties;'
  }
pool.query(partiesDropQuery)
    .then(console.log('parties table created'))
    .catch(e => console.error(e.stack));
  
const candidateDropQuery = {
  text: 'DROP TABLE IF EXISTS candidates;',
  }
pool.query(candidateDropQuery)
    .then(console.log('Candidate table created'))
    .catch(e => console.error(e.stack));
const votesDropQuery = {
        text: 'DROP TABLE IF EXISTS votes;',
    }
pool.query(votesDropQuery)
    .then(console.log('parties table created'))
    .catch(e => console.error(e.stack));