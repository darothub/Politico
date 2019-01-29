"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _officeDummy = _interopRequireDefault(require("../db/officeDummy"));

var _util = _interopRequireDefault(require("../helper/util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Office =
/*#__PURE__*/
function () {
  function Office() {
    _classCallCheck(this, Office);
  }

  _createClass(Office, null, [{
    key: "createOffice",
    value: function createOffice(req, res) {
      var request = req.body;

      if (!_util.default.isOffice(request)) {
        res.status(400).json({
          status: 400,
          error: 'Invalid office name/type'
        });
      }

      var newOffice = {
        id: _officeDummy.default.length + 1,
        name: request.name,
        type: request.type
      };

      _officeDummy.default.push(newOffice);

      return res.status(201).json({
        status: 201,
        data: newOffice
      });
    }
  }, {
    key: "getAllOffices",
    value: function getAllOffices(req, res) {
      return res.status(200).json({
        status: 200,
        data: _officeDummy.default
      });
    }
  }]);

  return Office;
}();

var _default = Office;
exports.default = _default;