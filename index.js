/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bp = require('body-parser');

const app = express();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const data = {};

app.get('/', (req, res) => {
  console.log('connected');
  res.send(data);
});

app.post('/game', (req, res) => {
  // console.log(req.body);

  if (data[req.body.player1.name]) {
    data[req.body.player1.name][req.body.player2.name] = req.body.player1.score;
  } else {
    data[req.body.player1.name] = {};
    data[req.body.player1.name][req.body.player2.name] = req.body.player1.score;
  }

  if (data[req.body.player2.name]) {
    data[req.body.player2.name][req.body.player1.name] = req.body.player2.score;
  } else {
    data[req.body.player2.name] = {};
    data[req.body.player2.name][req.body.player1.name] = req.body.player2.score;
  }

  // console.log(data);
  res.send('received');
});

app.post('/matchsetup', (req, res) => {
  let score1 = 0;
  let score2 = 0;

  if (data[req.body.player1]) {
    const score = data[req.body.player1][req.body.player2];
    score1 = score || 0;
  } else {
    data[req.body.player1] = {};
    data[req.body.player1][req.body.player2] = 0;
  }

  if (data[req.body.player2]) {
    const score = data[req.body.player2][req.body.player1];
    score2 = score || 0;
  } else {
    data[req.body.player2] = {};
    data[req.body.player2][req.body.player1] = 0;
  }

  res.send({ score1, score2 });
});

app.listen(8000, () => console.log('server running at port: 8000'));
