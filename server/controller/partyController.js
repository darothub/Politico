import jwt from 'jsonwebtoken';
import pool from '../model/database';
import parties from '../db/dummy';
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
        if (decoded.is_admin !== true) {
          return res.status(401).json({
            status: 401,
            message: 'You need an admin right to perform this task',
          });
        }
        return pool.query(insQuery)
          .then(newParty => res.status(201).json({
            status: 201,
            data: newParty.rows[0],
          }));
      });
  }

  static getAllParties(req, res) {
    return res.status(200).json({
      status: 200,
      data: parties,
    });
  }

  static getPartyById(req, res) {
    const party = parties.find(data => data.id === parseInt(req.params.id, 10));
    if (!party) {
      return res.status(404).json({
        status: 404,
        data: 'resource not found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: party,
    });
  }

  static editPartyName(req, res) {
    const party = parties.find(data => data.id === parseInt(req.params.id, 10));
    if (!party) {
      return res.status(404).json({
        status: 404,
        data: 'resource not found',
      });
    }
    party.name = req.body.name;
    const { id, name } = party;
    return res.status(200).json({
      status: 200,
      data: { id, name },
    });
  }

  static deleteParty(req, res) {
    const party = parties.find(data => data.id === parseInt(req.params.id, 10));
    if (!party) {
      return res.status(404).json({
        status: 404,
        data: 'resource not found',
      });
    }
    const position = parties.indexOf(party);
    parties.splice(position, 1);
    return res.status(200).json({
      status: 200,
      data: {
        message: `${party.name} has been deleted`,
      },
    });
  }
}

export default Party;
