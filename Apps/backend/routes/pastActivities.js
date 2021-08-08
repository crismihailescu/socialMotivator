var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.3zspm.mongodb.net/CATS?retryWrites=true&w=majority";

const DUPLICATE = 409;
const INSERTED = 201;
const NOT_FOUND = 404;
const OK = 200;

// Get all past events
router.get('/', async function(req, res, next) {
    const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser: true});
    try {
        await client.connect();
        let pastActivities = client.db('CATS').collection('pastActivities').find();
        let result = [];
        await pastActivities.forEach(pastActivity => result.push(pastActivity));
        res.send(result);
    } finally {
        client.close()
    }
});

module.exports = router;
