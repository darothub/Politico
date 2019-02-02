import pool from '../model/database';

import Helper from '../helper/util';


class Vote {
  static addNewVote(req, res) {
    const { officeId, voterId, candidateId } = req.body;

    const selQuery = {
      text: 'SELECT * FROM votes WHERE voter =$1 AND office =$2',
      values: [voterId, officeId],
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

    return pool.query(selQuery)
      .then((vote) => {
        if (vote.rowCount === 1) {
          return res.status(409).json({
            status: 409,
            message: 'Voter has previously voted for this office',
          });
        }
        return pool.query(insQuery)
          .then(newVote => res.status(201).json({
            status: 201,
            data: newVote.rows[0],
          }))
          .catch(e => res.send(e));
      })
      .catch(e => res.send(e));
  }
}

export default Vote;
