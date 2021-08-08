var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");
var ObjectId = require('mongodb').ObjectID;
const { checkout } = require('./users');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.3zspm.mongodb.net/CATS?retryWrites=true&w=majority";

const DUPLICATE = 409;
const INSERTED = 201;
const NOT_FOUND = 404;
const OK = 200;

function compareDates(newDate) {
    let DATE = new Date();
    let formattedNewDate = new Date((`${newDate[0]}-${newDate[1]}-${newDate[2]}`));
    return(formattedNewDate < DATE);

}



// Get all
router.get('/', async function(req, res, next) {
    const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser: true});
    try {
        await client.connect();
        let activities = client.db('CATS').collection('activities').find();
        let result = [];
        await activities.forEach(activity => result.push(activity));
        for (let activity of result) {
            if (compareDates(activity.start)) {
                for (let user of activity.users) {
                    await client.db('CATS').collection('users').updateOne({ "_id": ObjectId(user.toString()) },
                    {$push: {"history":  activity}});
                    await client.db('CATS').collection('users').updateOne({ "_id": ObjectId(user.toString()) },
                    {$pull: {"current": {"_id": (activity._id).toString()}}});
                    await client.db('CATS').collection('users').updateOne({ "_id": ObjectId(user.toString()) },
                    {$inc: {participation: 1}});
                }
             await client.db('CATS').collection('pastActivities').insertOne(activity);
             await client.db('CATS').collection('activities').deleteOne({ "_id": activity._id });
                };
            }
        result = [];
        activities = client.db('CATS').collection('activities').find();
        await activities.forEach(activity => result.push(activity));
        res.send(result);
    } finally {
        client.close()
    }
});


// Add activity
router.post('/', async function (req, res, next) {
    const activityName = req.body;
    const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser: true });
    try {
        await client.connect();
        let result = await client.db('CATS').collection('activities').insertOne(activityName);
        const activities = await client.db('CATS').collection('activities').find();
        result = [];
        await activities.forEach(activity => result.push(activity));
        res.send(result);
    } finally {
        client.close();
        console.log("client closed");
    }
});


module.exports = router;

