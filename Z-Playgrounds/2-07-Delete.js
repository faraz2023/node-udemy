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

let id;

//connecting to database, note it is async and recives a callback
MongoClient.connect(connectionURL, {
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log(error)
    }

    const db = client.db(databaseName);
    console.log('Connected!');

    // deleteMany()
    /*
    db.collection('questions').deleteMany({
        solved: false
    }).then(result => {
        console.log(result.deletedCount)
    }).catch(error => {
        console.log(error)
    })
    */

    db.collection('questions').deleteOne({
        solved: false
    }).then(result => {
        console.log(result.deletedCount)
    }).catch(error => {
        console.log(error)
    })

})