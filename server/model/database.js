import pg from 'pg';

import dotenv from 'dotenv';

dotenv.config();

process.env.NODE_ENV = 'test';

let connection;
const string = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  max: 10,
  idleTimeoutMillis: 3000,
};
const stringTest = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME2,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  max: 10,
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
