import parties from '../db/dummy';

import Helper from '../helper/util';

class Party {
  static createParty(req, res) {
    const request = req.body;
    if (!Helper.isParty(request)) {
      res.status(400).json({
        status: 400,
        error: 'Invalid name/hqAdress/logoUrl',
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
}

export default Party;
