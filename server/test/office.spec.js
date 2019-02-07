/* global describe it */
import chai, { expect, assert } from 'chai';

import dotenv from 'dotenv';

import chaiHttp from 'chai-http';

import server from '../app/app';


dotenv.config();

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b3NpbkB5YWhvby5jb20iLCJpc19hZG1pbiI6dHJ1ZSwiaWF0IjoxNTQ5NDY2NTkzLCJleHAiOjE1ODEwMDI1OTN9.F5lFQzrNeZWFX7NOoh8gO0XxzFMXyl6_GjLczGqEG2Y';

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
      });
    done();
  });
  it('should return id for new office', (done) => {
    const newOffice = {
      name: 'House',
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
        done();
      });
  });
  it('should return property name for new office', (done) => {
    const newOffice = {
      name: 'Councillor',
      type: 'Local Government',
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
        done();
      });
  });
  it('should return property type for new office', (done) => {
    const newOffice = {
      name: 'Deputy Governor',
      type: 'State',
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
