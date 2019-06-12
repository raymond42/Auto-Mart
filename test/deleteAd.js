import { describe, it } from 'mocha';
import dotenv from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../server/server';

chai.use(chaiHttp);
chai.should();
dotenv.config();

describe('Delete a posted car ad', () => {
  it('user should be able to delete posted car ad', (done) => {
    const admin = {
      isAdmin: 'true',
    };
    const token = jwt.sign(admin, process.env.SECRET_KEY, { expiresIn: '24hrs' });
    chai.request(app)
      .delete('/api/v1/car/1')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });

  it('user should not be able to delete posted car ad when the car is not in the system', (done) => {
    const admin = {
      isAdmin: 'true',
    };
    const token = jwt.sign(admin, process.env.SECRET_KEY, { expiresIn: '24hrs' });
    chai.request(app)
      .delete('/api/v1/car/9')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });

  it('user should not be able to delete posted car ad when he is not an admin', (done) => {
    const admin = {
      isAdmin: 'false',
    };
    const token = jwt.sign(admin, process.env.SECRET_KEY, { expiresIn: '24hrs' });
    chai.request(app)
      .delete('/api/v1/car/1')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(403);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(403);
        res.body.should.have.property('message');
        done();
      });
  });
});
