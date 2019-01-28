import offices from '../db/officeDummy';

import Helper from '../helper/util';

class Office {
  static createOffice(req, res) {
    const request = req.body;
    if (!Helper.isOffice(request)) {
      res.status(400).json({
        status: 400,
        error: 'Invalid data post',
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
}

export default Office;
