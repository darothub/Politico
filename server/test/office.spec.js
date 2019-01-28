/* global describe it */
import chai, { expect, assert } from 'chai';

import chaiHttp from 'chai-http';

import server from '../app/app';

import offices from '../db/officeDummy';

chai.should();
chai.use(chaiHttp);


describe('POST/api/v1/offices', () => {
  it('should return 200 for new office', (done) => {
    const newOffice = {
      id: offices.length + 1,
      name: 'Senator',
      type: 'Federal',
    };
    chai.request(server)
      .post('/api/v1/offices')
      .type('form')
      .send(newOffice)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
        // expect(res.body).to.have.property('name');
        // expect(res.body).to.have.property('hqAddress');
        // expect(res.body).to.have.property('logoUrl');
        // assert.isNumber(res.body.id);
      });
    done();
  });
  it('should return id for new office', (done) => {
    const newOffice = {
      id: offices.length + 1,
      name: 'Senator',
      type: 'Federal',
    };
    chai.request(server)
      .post('/api/v1/offices')
      .type('form')
      .send(newOffice)
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
  it('should return property name for new office', (done) => {
    const newOffice = {
      id: offices.length + 1,
      name: 'Senator',
      type: 'Federal',
    };
    chai.request(server)
      .post('/api/v1/offices')
      .type('form')
      .send(newOffice)
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
  it('should return property type for new office', (done) => {
    const newOffice = {
      id: offices.length + 1,
      name: 'Senator',
      type: 'Federal',
    };
    chai.request(server)
      .post('/api/v1/offices')
      .type('form')
      .send(newOffice)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
        assert.nestedProperty(res.body, 'data.type');
        // expect(res.body).to.have.property('name');
        // expect(res.body).to.have.property('hqAddress');
        // expect(res.body).to.have.property('logoUrl');
        // assert.isNumber(res.body.id);
      });
    done();
  });
});

describe('GET /api/v1/offices', () => {
  it('should return status 200 for getAll offices', (done) => {
    chai.request(server)
      .get('/api/v1/offices')
      .end((err, res) => {
        expect(res.body.status).to.eql(200);
      });
    done();
  });
  it('should return an object for getAll offices', (done) => {
    chai.request(server)
      .get('/api/v1/offices')
      .end((err, res) => {
        assert.isOk(res.body);
        assert.isObject(res.body);
      });
    done();
  });
  it('should return an object with an array data for getAll offices', (done) => {
    chai.request(server)
      .get('/api/v1/offices')
      .end((err, res) => {
        assert.property(res.body, 'data');
        assert.isArray(res.body.data);
        expect(res.body.data).to.eql(offices);
      });
    done();
  });
});
