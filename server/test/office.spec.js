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
