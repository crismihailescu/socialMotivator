var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.3zspm.mongodb.net/CATS?retryWrites=true&w=majority";

// DEBUG=backend:* npm start to run server

const DUPLICATE = 409;
const INSERTED = 201;
const NOT_FOUND = 404;

/* GET all users. */

router.get('/', async function (req, res, next) {
  const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
  try {
    await client.connect();
    const userList = await client.db('CATS').collection('users').find();
    let result = [];
    await userList.forEach(user => result.push(user));
    res.send(result);
  } finally {
    client.close()
  }
});

/* GET one user. */

router.get('/:username', async function (req, res, next) {
  const username = req.params.username;
  const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
  try {
    await client.connect();
    const result = await client.db('CATS').collection('users').findOne({ username: username });
    if (result) { res.send(result) } else { res.send(NOT_FOUND) };
  } finally {
    client.close()
  }
});

/* sign up user. */

router.post('/:username/:email', async function (req, res, next) {
  const username = req.params.username;
  const email = req.params.email;
  const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
  try {
    await client.connect();
    const username1 = await client.db('CATS').collection('users').findOne({ username: username });
    const email1 = await client.db('CATS').collection('users').findOne({ email: email });
    if (username1 || email1) {
      res.send(DUPLICATE);
    } else {
      await client.db('CATS').collection('users').insertOne(req.body);
      res.send(INSERTED);
    }
  } finally {
    client.close()
  }
});

module.exports = router;
