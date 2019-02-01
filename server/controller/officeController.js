import offices from '../db/officeDummy';

import Helper from '../helper/util';

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
}

export default Office;
