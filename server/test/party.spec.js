/* global describe it */
import chai, { expect, assert } from 'chai';

import chaiHttp from 'chai-http';

import dotenv from 'dotenv';

import server from '../app/app';


dotenv.config();

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b3NpbkB5YWhvby5jb20iLCJpc19hZG1pbiI6dHJ1ZSwiaWF0IjoxNTQ5NDY2NTkzLCJleHAiOjE1ODEwMDI1OTN9.F5lFQzrNeZWFX7NOoh8gO0XxzFMXyl6_GjLczGqEG2Y';


describe('POST/api/v1/parties', () => {
  it('should return 201 for new party', (done) => {
    const newParty = {
      name: 'APGC',
      hqAddress: '1 Iyana Iba ',
      logoUrl: 'www.logo.net.png',
    };
    chai.request(server)
      .post('/api/v1/parties')
      .set('Authorization', token)
      .type('form')
      .send(newParty)
      .end((err, res) => {
        res.should.to.have.status(201);
        done();
      });
  });
  it('should return id for new party', (done) => {
    const newParty = {
      name: 'PDP',
      hqAddress: 'PDP avenue ',
      logoUrl: 'www.logo.net.png',
    };
    chai.request(server)
      .post('/api/v1/parties')
      .set('Authorization', token)
      .type('form')
      .send(newParty)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.property(res.body.data, 'id');
        assert.isOk(res.body);
        done();
      });
  });
  it('should return property name for new party', (done) => {
    const newParty = {
      name: 'LP',
      hqAddress: 'LP Avenue ',
      logoUrl: 'www.logo.net.png',
    };
    chai.request(server)
      .post('/api/v1/parties')
      .set('Authorization', token)
      .type('form')
      .send(newParty)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.property(res.body.data, 'name');
        assert.isOk(res.body);
        done();
      });
  });
  it('should return property hqAddress for new party', (done) => {
    const newParty = {
      name: 'PGP',
      hqAddress: 'PGP avenue ',
      logoUrl: 'www.logo.net.png',
    };
    chai.request(server)
      .post('/api/v1/parties')
      .set('Authorization', token)
      .type('form')
      .send(newParty)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
        // assert.nestedProperty(res.body, 'data.name');
        assert.property(res.body.data, 'hqaddress');
        done();
      });
  });
  it('should return property logoUrl for new party', (done) => {
    const newParty = {
      name: 'BDG',
      hqAddress: 'BDG avenue ',
      logoUrl: 'www.logo.net.png',
    };
    chai.request(server)
      .post('/api/v1/parties')
      .set('Authorization', token)
      .type('form')
      .send(newParty)
      .end((err, res) => {
        res.should.to.have.status(201);
        expect(res.body).to.have.property('data');
        assert.isOk(res.body);
        assert.property(res.body.data, 'logourl');
        done();
      });
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
        done();
      });
  });
  it('should return an object with an array data for getAll parties', (done) => {
    chai.request(server)
      .get('/api/v1/parties')
      .end((err, res) => {
        assert.property(res.body, 'data');
        // expect(res.body.data).to.eql(parties);
        done();
      });
  });
});

describe('GET /api/v1/parties/:id', () => {
  it('should return party for the given id', (done) => {
    chai.request(server)
      .get('/api/v1/parties/1')
      .end((err, res) => {
        res.should.to.have.status(200);
        assert.isOk(res.body);
        assert.isNumber(res.body.data.id);
        assert.property(res.body.data, 'id');
        assert.propertyVal(res.body.data, 'id', 1);
        done();
      });
  });
  it('should return error for the unknown id', (done) => {
    chai.request(server)
      .get('/api/v1/parties/0')
      .end((err, res) => {
        res.should.to.have.status(404);
        assert.isOk(res.body);
        assert.propertyVal(res.body, 'status', 404);
        assert.propertyVal(res.body, 'message', 'party not found');
        done();
      });
  });
});

describe('PATCH/api/v1/parties/:id/name', () => {
  it('should edit name of the party with given id', (done) => {
    const data = {
      name: 'APGC',
    };
    chai.request(server)
      .patch('/api/v1/parties/1/name')
      .set('Authorization', token)
      .type('form')
      .send(data)
      .end((err, res) => {
        res.should.to.have.status(200);
        assert.nestedProperty(res.body, 'data.id');
        assert.propertyVal(res.body.data, 'New_name', 'APGC');
        done();
      });
  });
});
