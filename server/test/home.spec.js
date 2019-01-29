/* global describe it */
import chai from 'chai';

import chaiHttp from 'chai-http';

import server from '../app/app';

chai.should();
chai.use(chaiHttp);

describe('Homepage', () => {
  it('should return hello world', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.json = ({
          status: 200,
          message: 'Hello World',
        });
        res.should.have.status(200);
      });
    done();
  });
});
