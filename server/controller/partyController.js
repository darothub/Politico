// import pool from '../model/database';

import parties from '../db/dummy';

import Helper from '../helper/util';

class Party {
  static createParty(req, res) {
    const request = req.body;
    if (!Helper.isParty(request)) {
      res.status(400).json({
        status: 400,
        error: 'Invalid name/hqAddress/logoUrl',
      });
    }
    const newParty = {
      id: parties.length + 1,
      name: request.name,
      hqAddress: request.hqAddress,
      logoUrl: request.logoUrl,
    };
    parties.push(newParty);
    return res.status(201).json({
      status: 201,
      data: newParty,
    });
  }

  static getAllParties(req, res) {
    return res.status(200).json({
      status: 200,
      data: parties,
    });
  }

  // static getAllParties(req, res) {
  //   pool.query('SELECT * FROM party', (error, results) => {
  //     if (error) {
  //       throw error;
  //     }
  //     return res.status(200).json({
  //       status: 200,
  //       data: results.rows,
  //     });
  //   });
  // }

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
