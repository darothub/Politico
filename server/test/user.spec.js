/* global describe it */
import chai, { expect, assert } from 'chai';

import chaiHttp from 'chai-http';

import dotenv from 'dotenv';

import server from '../app/app';


dotenv.config();

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);


describe('POST/auth/signup', () => {
  it('should return a new user object', (done) => {
    const user = {
      firstName: 'Tola',
      lastName: 'Tola',
      otherName: 'Tola',
      email: 'tola@yahoo.com',
      phoneNumber: '080555555',
      password: 'Youngster1',
      userId: 9008,
      passportUrl: 'www.tola.com.png',
    };
    chai.request(server)
      .post('/auth/signup')
      .type('form')
      .send(user)
      .end((err, res) => {
        assert.isOk(res.body);
        done();
      });
  });
});

describe('POST/auth/signin', () => {
  it('should return 200 for successful signin', (done) => {
    const user = {
      email: 'tosin@yahoo.com',
      password: 'Youngster1',
    };
    chai.request(server)
      .post('/auth/signin')
      .type('form')
      .send(user)
      .end((err, res) => {
        res.should.to.have.status(200);
        done();
      });
  });
  it('should return 404 for unregistered user', (done) => {
    const user = {
      email: 'tunde@yahoo.com',
      password: 'Youngster1',
    };
    chai.request(server)
      .post('/auth/signin')
      .type('form')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
});
