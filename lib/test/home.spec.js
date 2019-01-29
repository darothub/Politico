"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global describe it */
_chai.default.should();

_chai.default.use(_chaiHttp.default);

describe('Homepage', function () {
  it('should return hello world', function (done) {
    _chai.default.request(_app.default).get('/').end(function (err, res) {
      res.json = {
        status: 200,
        message: 'Hello World'
      };
      res.should.have.status(200);
    });

    done();
  });
});