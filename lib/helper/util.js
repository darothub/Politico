"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helper =
/*#__PURE__*/
function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: "isParty",
    value: function isParty(newParty) {
      var validName = typeof newParty.name === 'string' && newParty.name.trim() !== '';
      var validHqAdress = typeof newParty.hqAddress === 'string' && newParty.hqAddress.trim() !== '';
      var validLogoUrl = typeof newParty.logoUrl === 'string' && newParty.logoUrl.trim() !== '';
      return validName && validHqAdress && validLogoUrl;
    }
  }, {
    key: "isOffice",
    value: function isOffice(newOffice) {
      var validType = typeof newOffice.type === 'string' && newOffice.type.trim() !== '';
      var validName = typeof newOffice.name === 'string' && newOffice.name.trim() !== '';
      return validName && validType;
    }
  }]);

  return Helper;
}();

var _default = Helper;
exports.default = _default;