var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.3zspm.mongodb.net/CATS?retryWrites=true&w=majority";

const DUPLICATE = 409;
const INSERTED = 201;
const NOT_FOUND = 404;
const OK = 200;


// Get all
router.get('/', async function(req, res, next) {
    const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser: true});
    try {
        await client.connect();
        const activities = await client.db('CATS').collection('activities').find();
        let result = [];
        await activities.forEach(activity => result.push(activity));
        res.send(result);
        console.log(result);
    } finally {
        client.close()
    }
});

// // Get one
// router.get('/:activity', async function (req, res, next) {
//     const activityName = req.params.activity;
//     const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
//     try {
//         await client.connect();
//         const result = await client.db('CATS').collection('users').findOne({activity: activityName});
//         if (result) { res.send(result) } else {res.send(NOT_FOUND) };
//     } finally {
//         client.close();
//     }
// });

// Add activity
router.post('/', async function (req, res, next) {
    const activityName = req.body;
    console.log("reached line 42 ./routes/activities");
    const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser: true });
    try {
        await client.connect();
        console.log("reached line 46 ./routes/activities")
        const result = await client.db('CATS').collection('activities').insertOne(activityName);
        res.send(result);
    } finally {
        client.close();
        console.log("client closed");
    }
});


module.exports = router;

