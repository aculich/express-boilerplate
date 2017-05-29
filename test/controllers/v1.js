const express = require('express');
const request = require('supertest');
const should = require('should');
const app = express();

app.use(require('../../controllers/v1'));

describe('v1', () => {
    describe('GET /', () => {
      it('should respond with hello world', done => {
        request(app)
          .get('/')
          .expect(200)
          .end((err, res) => {
              if (err) return done(err);
              res.text.should.equal('hello world');
              done();
          });
      });
    });
});
