var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.3zspm.mongodb.net/CATS?retryWrites=true&w=majority";

// DEBUG=backend:* npm start to run server

const DUPLICATE = 409;
const INSERTED = 201;
const NOT_FOUND = 404;
const OK = 200;

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

router.get('/:username/:password', async function (req, res, next) {
  const username = req.params.username;
  const password = req.params.password;
  const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
  try {
    await client.connect();
    const result = await client.db('CATS').collection('users').findOne({ username: username, password: password });
    if (result) { res.send(result) } else { res.send(NOT_FOUND) };
  } finally {
    client.close()
  }
});

/* sign up user. */

router.post('/', async function (req, res, next) {
  let body = req.body;
  let result;
  const username = body.username;
  const email = body.email;
  const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
  try {
    await client.connect();
    const username1 = await client.db('CATS').collection('users').findOne({ username: username });
    const email1 = await client.db('CATS').collection('users').findOne({ email: email });
    if (username1 || email1) {
      res.send(DUPLICATE);
    } else {
      await client.db('CATS').collection('users').insertOne(body);
      result = await client.db('CATS').collection('users').findOne({ username: username });
      res.send(result);
    }
  } finally {
    client.close()
  }
});

/* update user. */

router.put('/', async function (req, res, next) {
  let body = req.body;
  const id = body._id;
  const username = body.username;
  const email = body.email;
  const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
  try {
    await client.connect();
    const username1 = await client.db('CATS').collection('users').findOne({ username: username });
    const email1 = await client.db('CATS').collection('users').findOne({ email: email });
    if ((username1 && username1._id.toString() !== id.toString()) || (email1 && email1._id.toString() !== id.toString())) {
      res.send(DUPLICATE);
    } else {
      await client.db('CATS').collection('users').updateOne({ "_id": ObjectId(id.toString()) },
        { $set: { "username": username, "email": email, "password": body.password, "firstname": body.firstname, "lastname": body.lastname } }, { upsert: true });
      res.send(OK);
    }
  } finally {
    client.close()
  }
});

module.exports = router;