// server.js

const express = require('express');
const app = express();
const mongodb = require('mongodb');

const config = require('./db');
const PORT = 8080;
const client = mongodb.MongoClient;

client.connect(config.DB, function (err, db) {
  if (err) {
    console.log('dafrfrtabase is not connected')
  }
  else {
    console.log('connected!!')
  }
});

app.get('/', function (req, res) {
  res.json({ "helrfrflo": "world" });
});

app.listen(PORT, function () {
  console.log('Your node js server is running on PORT:', PORT);
});