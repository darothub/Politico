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
        // expect(res.body).to.have.property('name');
        // expect(res.body).to.have.property('hqAddress');
        // expect(res.body).to.have.property('logoUrl');
        // assert.isNumber(res.body.id);
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
