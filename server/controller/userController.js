import dotenv from 'dotenv';

import pool from '../model/database';

dotenv.config();

class Test {
  static getAllParties(req, res) {
    pool.query('SELECT * FROM party', (error, results) => {
      if (error) {
        throw error;
      }
      return res.status(200).json({
        status: 200,
        data: results.rows,
      });
    });
  }
}

export default Test;
