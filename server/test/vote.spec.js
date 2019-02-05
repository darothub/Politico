/* global describe it */
import chai, { expect, assert } from 'chai';

import chaiHttp from 'chai-http';

import dotenv from 'dotenv';

import server from '../app/app';


dotenv.config();

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);


describe('POST/votes', () => {
  it('should return 409 for duplicate vote', (done) => {
    const vote = {
      officeId: 1,
      candidateId: 9002,
      voterId: 9001,
    };
    chai.request(server)
      .post('/votes')
      .type('form')
      .send(vote)
      .end((err, res) => {
        expect(res.status).to.equal(409);
        assert.isOk(res.body);
        done();
      });
  });

  it('should return 400 for candidate not found', (done) => {
    const vote = {
      officeId: 2,
      candidateId: 9003,
      voterId: 9002,
    };
    chai.request(server)
      .post('/votes')
      .type('form')
      .send(vote)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        assert.isOk(res.body);
        done();
      });
  });
  it('should return 200 for successful vote', (done) => {
    const vote = {
      officeId: 1,
      candidateId: 9004,
      voterId: 9004,
    };
    chai.request(server)
      .post('/votes')
      .type('form')
      .send(vote)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        assert.isOk(res.body);
        done();
      });
  });
});
