"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app/app"));

var _officeDummy = _interopRequireDefault(require("../db/officeDummy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* global describe it */
_chai.default.should();

_chai.default.use(_chaiHttp.default);

describe('POST/api/v1/offices', function () {
  it('should return 200 for new office', function (done) {
    var newOffice = {
      id: _officeDummy.default.length + 1,
      name: 'Senator',
      type: 'Federal'
    };

    _chai.default.request(_app.default).post('/api/v1/offices').type('form').send(newOffice).end(function (err, res) {
      res.should.to.have.status(201);
      (0, _chai.expect)(res.body).to.have.property('data');

      _chai.assert.isOk(res.body); // expect(res.body).to.have.property('name');
      // expect(res.body).to.have.property('hqAddress');
      // expect(res.body).to.have.property('logoUrl');
      // assert.isNumber(res.body.id);

    });

    done();
  });
  it('should return id for new office', function (done) {
    var newOffice = {
      id: _officeDummy.default.length + 1,
      name: 'Senator',
      type: 'Federal'
    };

    _chai.default.request(_app.default).post('/api/v1/offices').type('form').send(newOffice).end(function (err, res) {
      res.should.to.have.status(201);
      (0, _chai.expect)(res.body).to.have.property('data');

      _chai.assert.isOk(res.body);

      _chai.assert.nestedProperty(res.body, 'data.id'); // expect(res.body).to.have.property('name');
      // expect(res.body).to.have.property('hqAddress');
      // expect(res.body).to.have.property('logoUrl');
      // assert.isNumber(res.body.id);

    });

    done();
  });
  it('should return property name for new office', function (done) {
    var newOffice = {
      id: _officeDummy.default.length + 1,
      name: 'Senator',
      type: 'Federal'
    };

    _chai.default.request(_app.default).post('/api/v1/offices').type('form').send(newOffice).end(function (err, res) {
      res.should.to.have.status(201);
      (0, _chai.expect)(res.body).to.have.property('data');

      _chai.assert.isOk(res.body);

      _chai.assert.nestedProperty(res.body, 'data.name'); // expect(res.body).to.have.property('name');
      // expect(res.body).to.have.property('hqAddress');
      // expect(res.body).to.have.property('logoUrl');
      // assert.isNumber(res.body.id);

    });

    done();
  });
  it('should return property type for new office', function (done) {
    var newOffice = {
      id: _officeDummy.default.length + 1,
      name: 'Senator',
      type: 'Federal'
    };

    _chai.default.request(_app.default).post('/api/v1/offices').type('form').send(newOffice).end(function (err, res) {
      res.should.to.have.status(201);
      (0, _chai.expect)(res.body).to.have.property('data');

      _chai.assert.isOk(res.body);

      _chai.assert.nestedProperty(res.body, 'data.type'); // expect(res.body).to.have.property('name');
      // expect(res.body).to.have.property('hqAddress');
      // expect(res.body).to.have.property('logoUrl');
      // assert.isNumber(res.body.id);

    });

    done();
  });
});
describe('GET /api/v1/offices', function () {
  it('should return status 200 for getAll offices', function (done) {
    _chai.default.request(_app.default).get('/api/v1/offices').end(function (err, res) {
      (0, _chai.expect)(res.body.status).to.eql(200);
    });

    done();
  });
  it('should return an object for getAll offices', function (done) {
    _chai.default.request(_app.default).get('/api/v1/offices').end(function (err, res) {
      _chai.assert.isOk(res.body);

      _chai.assert.isObject(res.body);
    });

    done();
  });
  it('should return an object with an array data for getAll offices', function (done) {
    _chai.default.request(_app.default).get('/api/v1/offices').end(function (err, res) {
      _chai.assert.property(res.body, 'data');

      _chai.assert.isArray(res.body.data);

      (0, _chai.expect)(res.body.data).to.eql(_officeDummy.default);
    });

    done();
  });
});