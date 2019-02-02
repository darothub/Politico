import dotenv from 'dotenv';

import jwt from 'jsonwebtoken';

import pool from '../model/database';

import offices from '../db/officeDummy';

import Helper from '../helper/util';

dotenv.config();

class Office {
  static createOffice(req, res) {
    const request = req.body;
    if (!Helper.isOffice(request)) {
      res.status(400).json({
        status: 400,
        error: 'Invalid office name/type',
      });
    }
    const newOffice = {
      id: offices.length + 1,
      name: request.name,
      type: request.type,
    };
    offices.push(newOffice);
    return res.status(201).json({
      status: 201,
      data: newOffice,
    });
  }

  static getAllOffices(req, res) {
    return res.status(200).json({
      status: 200,
      data: offices,
    });
  }

  static addNewCandidate(req, res) {
    const decoded = jwt.verify(req.token, process.env.SECRET_KEY);
    const { officeId, partyId } = req.body;
    const { userId } = req.params;

    const selQuery1 = {
      text: 'SELECT * FROM users WHERE user_id =$1',
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
                message: 'You need an admin right to perform this task',
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
}

export default Office;
