"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummy = _interopRequireDefault(require("../db/dummy"));

var _util = _interopRequireDefault(require("../helper/util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Party =
/*#__PURE__*/
function () {
  function Party() {
    _classCallCheck(this, Party);
  }

  _createClass(Party, null, [{
    key: "createParty",
    value: function createParty(req, res) {
      var request = req.body;

      if (!_util.default.isParty(request)) {
        res.status(400).json({
          status: 400,
          error: 'Invalid name/hqAddress/logoUrl'
        });
      }

      var newParty = {
        id: _dummy.default.length + 1,
        name: request.name,
        hqAddress: request.hqAddress,
        logoUrl: request.logoUrl
      };

      _dummy.default.push(newParty);

      return res.status(201).json({
        status: 201,
        data: newParty
      });
    }
  }, {
    key: "getAllParties",
    value: function getAllParties(req, res) {
      return res.status(200).json({
        status: 200,
        data: _dummy.default
      });
    }
  }, {
    key: "getPartyById",
    value: function getPartyById(req, res) {
      var party = _dummy.default.find(function (data) {
        return data.id === parseInt(req.params.id, 10);
      });

      if (!party) {
        return res.status(404).json({
          status: 404,
          data: 'resource not found'
        });
      }

      return res.status(200).json({
        status: 200,
        data: party
      });
    }
  }, {
    key: "editPartyName",
    value: function editPartyName(req, res) {
      var party = _dummy.default.find(function (data) {
        return data.id === parseInt(req.params.id, 10);
      });

      if (!party) {
        return res.status(404).json({
          status: 404,
          data: 'resource not found'
        });
      }

      party.name = req.body.name;
      var id = party.id,
          name = party.name;
      return res.status(200).json({
        status: 200,
        data: {
          id: id,
          name: name
        }
      });
    }
  }, {
    key: "deleteParty",
    value: function deleteParty(req, res) {
      var party = _dummy.default.find(function (data) {
        return data.id === parseInt(req.params.id, 10);
      });

      if (!party) {
        return res.status(404).json({
          status: 404,
          data: 'resource not found'
        });
      }

      var position = _dummy.default.indexOf(party);

      _dummy.default.splice(position, 1);

      return res.status(200).json({
        status: 200,
        data: {
          message: "".concat(party.name, " has been deleted")
        }
      });
    }
  }]);

  return Party;
}();

var _default = Party;
exports.default = _default;