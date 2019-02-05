/* global describe it */
import chai, { expect, assert } from 'chai';

import dotenv from 'dotenv';

import chaiHttp from 'chai-http';

import server from '../app/app';

// import offices from '../db/officeDummy';

dotenv.config();

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b3NpbkB5YWhvby5jb20iLCJpc19hZG1pbiI6dHJ1ZSwiaWF0IjoxNTQ5Mzc0NjE2LCJleHAiOjE1NDk0NjEwMTZ9.xeR9QBD8aFUzV0k2DckmktEPE6jLNIgP_DnDHmAGeQw';

describe('POST/api/v1/offices', () => {
  it('should return 201 for new office', (done) => {
    const newOffice = {
      name: 'Vice President',
      type: 'Federal',
    };
    chai.request(server)
      .post('/api/v1/offices')
      .set('Authorization', token)
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
      name: 'Vice President',
      type: 'Federal',
    };
    chai.request(server)
      .post('/api/v1/offices')
      .set('Authorization', token)
      .type('form')
      .send(newOffice)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
        assert.property(res.body.data, 'id');
        // expect(res.body).to.have.property('name');
        // expect(res.body).to.have.property('hqAddress');
        // expect(res.body).to.have.property('logoUrl');
        // assert.isNumber(res.body.id);
        done();
      });
  });
  it('should return property name for new office', (done) => {
    const newOffice = {
      name: 'Vice President',
      type: 'Federal',
    };
    chai.request(server)
      .post('/api/v1/offices')
      .set('Authorization', token)
      .type('form')
      .send(newOffice)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
        assert.property(res.body.data, 'name');
        // expect(res.body).to.have.property('name');
        // expect(res.body).to.have.property('hqAddress');
        // expect(res.body).to.have.property('logoUrl');
        // assert.isNumber(res.body.id);
        done();
      });
  });
  it('should return property type for new office', (done) => {
    const newOffice = {
      name: 'Vice President',
      type: 'Federal',
    };
    chai.request(server)
      .post('/api/v1/offices')
      .set('Authorization', token)
      .type('form')
      .send(newOffice)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
        assert.property(res.body.data, 'type');
        // expect(res.body).to.have.property('name');
        // expect(res.body).to.have.property('hqAddress');
        // expect(res.body).to.have.property('logoUrl');
        // assert.isNumber(res.body.id);
        done();
      });
  });
});

describe('GET /api/v1/offices', () => {
  it('should return status 200 for getAll offices', (done) => {
    chai.request(server)
      .get('/api/v1/offices')
      .end((err, res) => {
        expect(res.body.status).to.eql(200);
        done();
      });
  });
  it('should return an object for getAll offices', (done) => {
    chai.request(server)
      .get('/api/v1/offices')
      .end((err, res) => {
        assert.isOk(res.body);
        assert.isObject(res.body);
        done();
      });
  });
  it('should return an object with an array data for getAll offices', (done) => {
    chai.request(server)
      .get('/api/v1/offices')
      .end((err, res) => {
        assert.property(res.body, 'data');
        assert.isArray(res.body.data);
        // expect(res.body.data).to.eql(offices);
        done();
      });
  });
});
