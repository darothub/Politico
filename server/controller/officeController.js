import dotenv from 'dotenv';

import jwt from 'jsonwebtoken';

import pool from '../model/database';

import Helper from '../helper/util';

dotenv.config();

class Office {
  static addOffice(req, res) {
    const decoded = jwt.verify(req.token, process.env.SECRET_KEY);
    const { name, type } = req.body;
    const selQuery = {
      text: 'SELECT * FROM offices WHERE name=$1',
      values: [name],
    };
    const insQuery = {
      text: 'INSERT INTO offices(name, type) VALUES($1, $2) RETURNING *',
      values: [name, type],
    };

    if (!Helper.isOffice(req.body)) {
      res.status(400).json({
        status: 400,
        error: 'Invalid name/type',
      });
    }
    return pool.query(selQuery)
      .then((office) => {
        if (office.rowCount === 1) {
          return res.status(409).send({
            status: 409,
            message: 'Office exist already',
          });
        }
        if (decoded.is_admin !== true) {
          return res.status(401).json({
            status: 401,
            message: 'You are not authorized for this task',
          });
        }
        return pool.query(insQuery)
          .then(newOffice => res.status(201).json({
            status: 201,
            data: newOffice.rows[0],
          }))
          .catch(e => res.send(e));
      })
      .catch(e => res.send(e));
  }

  static getAllOffices(req, res) {
    const selQuery = {
      text: 'SELECT * FROM offices',
    };
    return pool.query(selQuery)
      .then(offices => res.status(200).json({
        status: 200,
        data: offices.rows,
      }))
      .catch(e => res.send(e));
  }

  static addNewCandidate(req, res) {
    const decoded = jwt.verify(req.token, process.env.SECRET_KEY);
    const { officeId, partyId } = req.body;
    const { userId } = req.params;

    const selQuery1 = {
      text: 'SELECT * FROM users WHERE user_ids =$1',
      values: [userId],
    };

    const selQuery2 = {
      text: 'SELECT * FROM candidates WHERE candidate =$1 AND office =$2',
      values: [userId, officeId],
    };
    const insQuery = {
      text: 'INSERT INTO candidates (office, party, candidate) VALUES($1, $2, $3) RETURNING *',
      values: [officeId, partyId, userId],
    };
    if (!Helper.isCandidate(req.body)) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid officeId/partyId/candidateId',
      });
    }
    return pool.query(selQuery1)
      .then((user) => {
        if (user.rowCount === 0) {
          return res.status(400).json({
            status: 400,
            message: 'User not registered',
          });
        }
        return pool.query(selQuery2)
          .then((candidate) => {
            if (candidate.rowCount === 1) {
              return res.status(409).json({
                status: 409,
                message: 'Candidate has been previously registered for this office',
              });
            }
            if (decoded.is_admin !== true) {
              return res.status(401).json({
                status: 401,
                message: 'You are not authorized for this task',
              });
            }
            return pool.query(insQuery)
              .then(newCandidate => res.status(201).json({
                status: 201,
                data: newCandidate.rows[0],
              }))
              .catch(e => res.send(e));
          })
          .catch(e => res.send(e));
      })
      .catch(e => res.send(e));
  }

  static getOfficeResult(req, res) {
    const { officeId } = req.params;
    const selQuery = {
      text: 'SELECT office, candidate, COUNT(*) AS "result" FROM votes WHERE office=$1 GROUP BY office, candidate',
      values: [officeId],
    };
    return pool.query(selQuery)
      .then(result => res.status(200).json({
        status: 200,
        data: result.rows,
      }))
      .catch(e => res.send(e));
  }
}

export default Office;
