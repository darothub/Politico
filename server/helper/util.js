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
}

export default Helper;
