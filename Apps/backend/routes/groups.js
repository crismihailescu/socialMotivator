var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.3zspm.mongodb.net/CATS?retryWrites=true&w=majority";

// DEBUG=backend:* npm start to run server

const DUPLICATE = 409;
const INSERTED = 201;
const NOT_FOUND = 404;

// DEBUG=backend:* npm start to run server
/* GET all groups of one user. */

router.get('/:username', async function (req, res, next) {
    const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
    try {
        await client.connect();
        const groups = await client.db('CATS').collection('groups').find({ 'members': { $elemMatch: { 'username': { $in: [`${req.params.username}`] } } } });
        let result = [];
        await groups.forEach(group => result.push(group));
        res.send(result);
    } finally {
        client.close()
    }
});


/* add group. */

router.post('/', async function (req, res, next) {
    let body = req.body;
    const name = body.name;
    const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
    try {
        await client.connect();
        const name = await client.db('CATS').collection('groups').findOne({ name: name });
        if (name) {
            res.sendStatus(DUPLICATE);
        } else {
            await client.db('CATS').collection('groups').insertOne(body);
            res.sendStatus(INSERTED);
        }
    } finally {
        client.close()
    }
});

module.exports = router;
