//To start running the db you need to cd to 
// the bin folder of mongodb and run the command:
// sudo /mongod --dbpath=/Users/FarazKhoshbakhtian/mongodb-data
//dbpath refers to 

// CRUD Create Read Update Delete

const {
    MongoClient,
    ObjectID
} = require('mongodb');
const chalk = require('chalk')



const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'philosophers-app'

//connecting to database, note it is async and recives a callback
MongoClient.connect(connectionURL, {
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log(error)
    }

    const db = client.db(databaseName);

    console.log('Connected!');

    //findOne by attribute
    db.collection('questions').findOne({
        solved: true,
    }, (error, result) => {
        if (error) {
            return console.log(error);
        }
        console.log('FindOne Result')
        console.log(result)
    })
    //findOne by id
    db.collection('questions').findOne({
        _id: new ObjectID('5e1b39227736e4292138ff9f')
    }, (error, result) => {
        if (error) {
            return console.log(error);
        }
        console.log('FindOne Result')
        console.log(result)
    })

    //find
    db.collection('questions').find({
        solved: false
    }).toArray((error, results) => {
        if (error) {
            return console.log(error)
        }
        console.log('-----')
        console.log(results)

    })

    db.collection('questions').find({
        solved: false
    }).forEach(e => {
        if (error) {
            return console.log(error)
        }
        console.log('From for each')
        console.log(e.description)

    })

    db.collection('questions').find({
        solved: false
    }).count((error, results) => {
        if (error) {
            return console.log(error)
        }
        console.log('-----')
        console.log(results)

    })

})