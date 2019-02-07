import jwt from 'jsonwebtoken';
import pool from '../model/database';
import Helper from '../helper/util';

class Party {
  static createParty(req, res) {
    const decoded = jwt.verify(req.token, process.env.SECRET_KEY);
    const { name, hqAddress, logoUrl } = req.body;
    const selQuery = {
      text: 'SELECT * FROM parties WHERE name=$1',
      values: [name],
    };
    const insQuery = {
      text: 'INSERT INTO parties(name, hqAddress, logoUrl) VALUES($1, $2, $3) RETURNING *',
      values: [name, hqAddress, logoUrl],
    };
    if (decoded.is_admin !== true) {
      return res.status(401).json({
        status: 401,
        message: 'You are not authorized for this task',
      });
    }

    if (!Helper.isParty(req.body)) {
      res.status(400).json({
        status: 400,
        error: 'Invalid name/hqAddress/logoUrl',
      });
    }
    return pool.query(selQuery)
      .then((party) => {
        if (party.rowCount === 1) {
          return res.status(409).send({
            status: 409,
            message: 'Party exist already',
          });
        }
        return pool.query(insQuery)
          .then(newParty => res.status(201).json({
            status: 201,
            data: newParty.rows[0],
          }))
          .catch(e => res.send(e));
      })
      .catch(e => res.send(e));
  }

  static getAllParties(req, res) {
    const selQuery = {
      text: 'SELECT * FROM parties',
    };
    return pool.query(selQuery)
      .then(partiess => res.status(200).json({
        status: 200,
        data: partiess.rows,
      }))
      .catch(e => res.send(e));
  }

  static getPartyById(req, res) {
    const { id } = req.params;
    const selQuery1 = {
      text: 'SELECT * FROM parties WHERE id=$1',
      values: [id],
    };
    if (!Helper.isNumber(req.params)) {
      res.status(400).json({
        status: 400,
        message: 'Invalid party ID',
      });
    }
    return pool.query(selQuery1)
      .then((party) => {
        if (party.rowCount === 0) {
          return res.status(404).json({
            status: 404,
            message: 'party not found',
          });
        }
        return res.status(200).json({
          status: 200,
          data: party.rows[0],
        });
      })
      .catch(e => res.send(e));
  }

  static editPartyName(req, res) {
    const decoded = jwt.verify(req.token, process.env.SECRET_KEY);
    const { name } = req.body;
    const { id } = req.params;
    const selQuery1 = {
      text: 'SELECT * FROM parties WHERE id=$1',
      values: [id],
    };
    const updQuery1 = {
      text: 'UPDATE parties SET name = $1 WHERE id = $2 RETURNING *',
      values: [name, id],
    };
    if (!Helper.isNumber(req.params)) {
      res.status(400).json({
        status: 400,
        message: 'Invalid party ID',
      });
    }
    return pool.query(selQuery1)
      .then((party) => {
        if (party.rowCount === 0) {
          return res.status(404).json({
            status: 404,
            message: 'party not found',
          });
        }
        if (decoded.is_admin !== true) {
          return res.status(401).json({
            status: 401,
            message: 'You are not authorized for this task',
          });
        }
        return pool.query(updQuery1)
          .then(newParty => res.status(200).json({
            status: 200,
            data: {
              id: newParty.rows[0].id,
              New_name: newParty.rows[0].name,
            },
          }))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));

    // party.name = req.body.name;
    // const { id, name } = party;
    // return res.status(200).json({
    //   status: 200,
    //   data: { id, name },
    // });
  }

  static deleteParty(req, res) {
    const decoded = jwt.verify(req.token, process.env.SECRET_KEY);
    const { id } = req.params;
    const selQuery1 = {
      text: 'SELECT * FROM parties WHERE id=$1',
      values: [id],
    };
    const delQuery1 = {
      text: 'DELETE FROM parties WHERE id = $1 RETURNING *',
      values: [id],
    };
    if (!Helper.isNumber(req.params)) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid party ID',
      });
    }
    if (decoded.is_admin !== true) {
      return res.status(401).json({
        status: 401,
        message: 'You are not authorized for this task',
      });
    }
    return pool.query(selQuery1)
      .then((party) => {
        if (party.rowCount === 0) {
          return res.status(404).json({
            status: 404,
            message: 'party not found',
          });
        }
        return pool.query(delQuery1)
          .then(delParty => res.status(200).json({
            status: 200,
            data: {
              message: `${delParty.rows[0].name} has been deleted`,
            },
          }))
          .catch(e => res.send(e));
      })
      .catch(e => res.send(e));
  }
}

export default Party;
