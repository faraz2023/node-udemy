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

    /*
    db.collection('questions').findOne({
        solved: false
    }, (error, question) => {
        if (error) {
            return console.log(error);
        }
        id = new ObjectID(question._id);
        console.log(id)
        // UpdateOn returns a promise
        const updatePromise = db.collection('questions').updateOne({
            _id: id
        }, {
            //See Update Operators docs for more operators!
            $set: {
                solved: true,
                //adds new field if not existed before
                philosopher: 'Hume',
            },
            $inc: {
                age: -200
            }
        })

        updatePromise.then((result) => {
            console.log(result.modifiedCount)
        }).catch((error) => {
            console.log('Error', error)
        })
    })
    */

    const solvePromise = db.collection('questions').updateMany({
        solved: false,
        //philosopher: 'Hume'
    }, {
        $set: {
            solved: true
        },
        $inc: {
            age: -200
        },
    })

    solvePromise.then(result => {
        console.log(result.modifiedCount);
    }).catch(error => {
        console.log(error);
    })

})