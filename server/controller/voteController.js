import dotenv from 'dotenv';

import pool from '../model/database';

import Helper from '../helper/util';


dotenv.config();

class Vote {
  static addNewVote(req, res) {
    const { officeId, voterId, candidateId } = req.body;

    const selQuery1 = {
      text: 'SELECT * FROM users WHERE user_ids =$1',
      values: [voterId],
    };

    const selQuery2 = {
      text: 'SELECT * FROM votes WHERE voter =$1 AND office =$2',
      values: [voterId, officeId],
    };
    const selQuery3 = {
      text: 'SELECT * FROM candidates WHERE candidate =$1 AND office =$2',
      values: [candidateId, officeId],
    };
    const insQuery = {
      text: 'INSERT INTO votes (office, candidate, voter) VALUES($1, $2, $3) RETURNING *',
      values: [officeId, candidateId, voterId],
    };
    if (!Helper.isVote(req.body)) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid officeId/voterId/candidateId',
      });
    }

    return pool.query(selQuery1)
      .then((voter) => {
        if (voter.rowCount === 0) {
          return res.status(404).json({
            status: 404,
            message: 'Voter is not registered',
          });
        }
        return pool.query(selQuery2)
          .then((vote) => {
            if (vote.rowCount === 1) {
              return res.status(409).json({
                status: 409,
                message: 'Voter has previously voted for this office',
              });
            }
            return pool.query(selQuery3)
              .then((candidate) => {
                if (candidate.rowCount === 0) {
                  return res.status(400).json({
                    status: 400,
                    message: 'Candidate is not found',
                  });
                }
                return pool.query(insQuery)
                  .then(newVote => res.status(200).json({
                    status: 200,
                    data: newVote.rows[0],
                  }))
                  .catch(e => res.send(e));
              })
              .catch(e => res.send(e));
          })
          .catch(e => res.send(e));
      })
      .catch(e => res.send(e));
  }
}

export default Vote;
