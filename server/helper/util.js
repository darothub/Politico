import dotenv from 'dotenv';

import jwt from 'jsonwebtoken';

dotenv.config();

class Helper {
  static isParty(newParty) {
    const validName = typeof newParty.name === 'string'
                                      && newParty.name.trim() !== '';
    const validHqAdress = typeof newParty.hqAddress === 'string'
                                        && newParty.hqAddress.trim() !== '';
    const validLogoUrl = typeof newParty.logoUrl === 'string'
                                        && newParty.logoUrl.trim() !== '';
    return validName && validHqAdress && validLogoUrl;
  }

  static isOffice(newOffice) {
    const validType = typeof newOffice.type === 'string'
                                      && newOffice.type.trim() !== '';
    const validName = typeof newOffice.name === 'string'
                                        && newOffice.name.trim() !== '';
    return validName && validType;
  }

  static isValidEmailPassword(user) {
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email);
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(user.password);
    return validEmail && validPassword;
  }

  static isValidName(user) {
    const validFirstName = typeof user.firstName === 'string'
                                        && user.firstName.trim() !== '';
    const validLastName = typeof user.lastName === 'string'
                                        && user.lastName.trim() !== '';
    const validOtherName = typeof user.otherName === 'string'
                                        && user.otherName.trim() !== '';
    return validFirstName && validLastName && validOtherName;
  }

  static isValidPhoneNumber(user) {
    const validPhoneNumber = typeof user.phoneNumber === 'string';
    return validPhoneNumber;
  }

  static verifyToken(req, res, next) {
    const tokenHeader = req.headers.authorization;
    if (typeof tokenHeader !== 'undefined') {
      const tokenBearer = tokenHeader.split(' ');
      const bearerToken = tokenBearer[1];
      req.token = bearerToken;
      const decoded = jwt.verify(req.token, process.env.SECRET_KEY);
      req.userData = decoded;
      next();
    } else {
      res.status(403);
    }
  }
}

export default Helper;
