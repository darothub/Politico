/* global describe it */
import chai, { expect, assert } from 'chai';

import chaiHttp from 'chai-http';

import server from '../app/app';

import parties from '../db/dummy';

chai.should();
chai.use(chaiHttp);


describe('POST/api/v1/parties', () => {
  it('should return 200 for new party', (done) => {
    const newParty = {
      id: parties.length + 1,
      name: 'APGC',
      hqAddress: '1 Iyana Iba ',
      logoUrl: 'www.logo.net.png',
    };
    chai.request(server)
      .post('/api/v1/parties')
      .type('form')
      .send(newParty)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
      });
    done();
  });
  it('should return id for new party', (done) => {
    const newParty = {
      id: parties.length + 1,
      name: 'APGC',
      hqAddress: '1 Iyana Iba ',
      logoUrl: 'www.logo.net.png',
    };
    chai.request(server)
      .post('/api/v1/parties')
      .type('form')
      .send(newParty)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
        assert.nestedProperty(res.body, 'data.id');
        // expect(res.body).to.have.property('name');
        // expect(res.body).to.have.property('hqAddress');
        // expect(res.body).to.have.property('logoUrl');
        // assert.isNumber(res.body.id);
      });
    done();
  });
  it('should return property name for new party', (done) => {
    const newParty = {
      id: parties.length + 1,
      name: 'APGC',
      hqAddress: '1 Iyana Iba ',
      logoUrl: 'www.logo.net.png',
    };
    chai.request(server)
      .post('/api/v1/parties')
      .type('form')
      .send(newParty)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
        assert.nestedProperty(res.body, 'data.name');
        // expect(res.body).to.have.property('name');
        // expect(res.body).to.have.property('hqAddress');
        // expect(res.body).to.have.property('logoUrl');
        // assert.isNumber(res.body.id);
      });
    done();
  });
  it('should return property hqAddress for new party', (done) => {
    const newParty = {
      id: parties.length + 1,
      name: 'APGC',
      hqAddress: '1 Iyana Iba ',
      logoUrl: 'www.logo.net.png',
    };
    chai.request(server)
      .post('/api/v1/parties')
      .type('form')
      .send(newParty)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
        assert.nestedProperty(res.body, 'data.hqAddress');
        // expect(res.body).to.have.property('name');
        // expect(res.body).to.have.property('hqAddress');
        // expect(res.body).to.have.property('logoUrl');
        // assert.isNumber(res.body.id);
      });
    done();
  });
  it('should return property logoUrl for new party', (done) => {
    const newParty = {
      id: parties.length + 1,
      name: 'APGC',
      hqAddress: '1 Iyana Iba ',
      logoUrl: 'www.logo.net.png',
    };
    chai.request(server)
      .post('/api/v1/parties')
      .type('form')
      .send(newParty)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
        assert.nestedProperty(res.body, 'data.logoUrl');
        // expect(res.body).to.have.property('name');
        // expect(res.body).to.have.property('hqAddress');
        // expect(res.body).to.have.property('logoUrl');
        // assert.isNumber(res.body.id);
      });
    done();
  });
});

describe('GET /api/v1/parties', () => {
  it('should return status 200 for getAll parties', (done) => {
    chai.request(server)
      .get('/api/v1/parties')
      .end((err, res) => {
        expect(res.body.status).to.eql(200);
      });
    done();
  });
  it('should return an object for getAll parties', (done) => {
    chai.request(server)
      .get('/api/v1/parties')
      .end((err, res) => {
        assert.isOk(res.body);
        assert.isObject(res.body);
      });
    done();
  });
  it('should return an object with an array data for getAll parties', (done) => {
    chai.request(server)
      .get('/api/v1/parties')
      .end((err, res) => {
        assert.property(res.body, 'data');
        expect(res.body.data).to.eql(parties);
      });
    done();
  });
});
