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
}

export default Helper;
