"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app/app"));

var _dummy = _interopRequireDefault(require("../db/dummy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* global describe it */
_chai.default.should();

_chai.default.use(_chaiHttp.default);

describe('POST/api/v1/parties', function () {
  it('should return 200 for new party', function (done) {
    var newParty = {
      id: _dummy.default.length + 1,
      name: 'APGC',
      hqAddress: '1 Iyana Iba ',
      logoUrl: 'www.logo.net.png'
    };

    _chai.default.request(_app.default).post('/api/v1/parties').type('form').send(newParty).end(function (err, res) {
      res.should.to.have.status(201);
      (0, _chai.expect)(res.body).to.have.property('data');

      _chai.assert.isOk(res.body); // expect(res.body).to.have.property('name');
      // expect(res.body).to.have.property('hqAddress');
      // expect(res.body).to.have.property('logoUrl');
      // assert.isNumber(res.body.id);

    });

    done();
  });
  it('should return id for new party', function (done) {
    var newParty = {
      id: _dummy.default.length + 1,
      name: 'APGC',
      hqAddress: '1 Iyana Iba ',
      logoUrl: 'www.logo.net.png'
    };

    _chai.default.request(_app.default).post('/api/v1/parties').type('form').send(newParty).end(function (err, res) {
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
  it('should return property name for new party', function (done) {
    var newParty = {
      id: _dummy.default.length + 1,
      name: 'APGC',
      hqAddress: '1 Iyana Iba ',
      logoUrl: 'www.logo.net.png'
    };

    _chai.default.request(_app.default).post('/api/v1/parties').type('form').send(newParty).end(function (err, res) {
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
  it('should return property hqAddress for new party', function (done) {
    var newParty = {
      id: _dummy.default.length + 1,
      name: 'APGC',
      hqAddress: '1 Iyana Iba ',
      logoUrl: 'www.logo.net.png'
    };

    _chai.default.request(_app.default).post('/api/v1/parties').type('form').send(newParty).end(function (err, res) {
      res.should.to.have.status(201);
      (0, _chai.expect)(res.body).to.have.property('data');

      _chai.assert.isOk(res.body);

      _chai.assert.nestedProperty(res.body, 'data.hqAddress'); // expect(res.body).to.have.property('name');
      // expect(res.body).to.have.property('hqAddress');
      // expect(res.body).to.have.property('logoUrl');
      // assert.isNumber(res.body.id);

    });

    done();
  });
  it('should return property logoUrl for new party', function (done) {
    var newParty = {
      id: _dummy.default.length + 1,
      name: 'APGC',
      hqAddress: '1 Iyana Iba ',
      logoUrl: 'www.logo.net.png'
    };

    _chai.default.request(_app.default).post('/api/v1/parties').type('form').send(newParty).end(function (err, res) {
      res.should.to.have.status(201);
      (0, _chai.expect)(res.body).to.have.property('data');

      _chai.assert.isOk(res.body);

      _chai.assert.nestedProperty(res.body, 'data.logoUrl'); // expect(res.body).to.have.property('name');
      // expect(res.body).to.have.property('hqAddress');
      // expect(res.body).to.have.property('logoUrl');
      // assert.isNumber(res.body.id);

    });

    done();
  });
});
describe('GET /api/v1/parties', function () {
  it('should return status 200 for getAll parties', function (done) {
    _chai.default.request(_app.default).get('/api/v1/parties').end(function (err, res) {
      (0, _chai.expect)(res.body.status).to.eql(200);
    });

    done();
  });
  it('should return an object for getAll parties', function (done) {
    _chai.default.request(_app.default).get('/api/v1/parties').end(function (err, res) {
      _chai.assert.isOk(res.body);

      _chai.assert.isObject(res.body);
    });

    done();
  });
  it('should return an object with an array data for getAll parties', function (done) {
    _chai.default.request(_app.default).get('/api/v1/parties').end(function (err, res) {
      _chai.assert.property(res.body, 'data');

      (0, _chai.expect)(res.body.data).to.eql(_dummy.default);
    });

    done();
  });
});
describe('GET /api/v1/parties/:id', function () {
  it('should return party for the given id', function (done) {
    _chai.default.request(_app.default).get('/api/v1/parties/1').end(function (err, res) {
      res.should.to.have.status(200);

      _chai.assert.isOk(res.body);

      _chai.assert.isNumber(res.body.data.id);

      _chai.assert.nestedProperty(res.body, 'data.id');

      _chai.assert.propertyVal(res.body.data, 'id', 1);
    });

    done();
  });
  it('should return error for the unknown id', function (done) {
    _chai.default.request(_app.default).get('/api/v1/parties/0').end(function (err, res) {
      res.should.to.have.status(404);

      _chai.assert.isOk(res.body);

      _chai.assert.propertyVal(res.body, 'status', 404);

      _chai.assert.propertyVal(res.body, 'data', 'resource not found');
    });

    done();
  });
});
describe('PATCH/api/v1/parties/:id/name', function () {
  it('should edit name of the party with given id', function (done) {
    var data = {
      name: 'APGC'
    };

    _chai.default.request(_app.default).patch('/api/v1/parties/1/name').type('form').send(data).end(function (err, res) {
      res.should.to.have.status(200);

      _chai.assert.isOk(res.body);

      _chai.assert.nestedProperty(res.body, 'data.id');

      _chai.assert.propertyVal(res.body.data, 'name', 'APGC');
    });

    done();
  });
});
describe('DELETE/api/v1/parties/:id', function () {
  it('should delete the party with given id', function (done) {
    _chai.default.request(_app.default).delete('/api/v1/parties/1/').end(function (err, res) {
      res.should.to.have.status(200);

      _chai.assert.isOk(res.body);

      _chai.assert.nestedProperty(res.body.data, 'message');
    });

    done();
  });
});