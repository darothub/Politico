import pg from 'pg';

import dotenv from 'dotenv';

dotenv.config();

const {
  DB_USER, DB_NAME, DB_PASS, DB_PORT2, DB_PORT, TESTDB_NAME,
} = process.env;

let connection;
const string = {
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASS,
  port: DB_PORT,
  max: 50,
  idleTimeoutMillis: 3000,
};
const stringTest = {
  user: DB_USER,
  database: TESTDB_NAME,
  password: DB_PASS,
  port: DB_PORT2,
  max: 50,
  idleTimeoutMillis: 3000,
};
if (process.env.NODE_ENV === 'production') {
  connection = {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  };
} else if (process.env.NODE_ENV === 'test') {
  connection = stringTest;
} else {
  connection = string;
}
const pool = new pg.Pool(connection);

export default pool;
