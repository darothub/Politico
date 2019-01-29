"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _database = _interopRequireDefault(require("../model/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_dotenv.default.config();

var Test =
/*#__PURE__*/
function () {
  function Test() {
    _classCallCheck(this, Test);
  }

  _createClass(Test, null, [{
    key: "getAllParties",
    value: function getAllParties(req, res) {
      _database.default.query('SELECT * FROM party', function (error, results) {
        if (error) {
          throw error;
        }

        return res.status(200).json({
          status: 200,
          data: results.rows
        });
      });
    }
  }]);

  return Test;
}();

var _default = Test;
exports.default = _default;