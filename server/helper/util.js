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

  static isCandidate(newCandidate) {
    const validOfficeId = /^-?[\d.]+(?:e-?\d+)?$/.test(newCandidate.officeId);
    const validPartyId = /^-?[\d.]+(?:e-?\d+)?$/.test(newCandidate.partyId);

    return validOfficeId && validPartyId;
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
  static isValidUserNumber(user) {
    const validPhoneNumber = /^-?[\d.]+(?:e-?\d+)?$/.test(user.phoneNumber);
    const validUserId = /^-?[\d.]+(?:e-?\d+)?$/.test(user.userId);
    return validPhoneNumber && validUserId;

  }
}

export default Helper;
