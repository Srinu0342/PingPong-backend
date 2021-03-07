/* eslint-disable linebreak-style */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const request = require('supertest');
const assert = require('assert');
const app = require('./index');

// start creating tests

describe('GET /', () => {
  it('should return successfully', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect((res) => {
        assert.equal(res.body['msg'], 'WORKING PROPERLY');
      })
      .end(done);
  });
});

describe('Game Saving Test', () => {
  it('Should return acknowledgement for game saving', (done) => {
    request(app)
      .post('/game')
      .send({ player1: { name: 'player1', score: 0 }, player2: { name: 'player2', score: 0 } })
      .expect(200)
      .expect((res) => {
        assert.equal(res.body['msg'], 'received');
      })
      .end(done);
  });
});

describe('Check Data posted on last test using admmin_data_reach', () => {
  it('should send the current data stored in server memmory', (done) => {
    request(app)
      .get('/admin_data_reach')
      .expect(200)
      .expect((res) => {
        assert.equal(res.body['player1']['player2'], 0);
        assert.equal(res.body['player2']['player1'], 0);
      })
      .end(done);
  });
});
