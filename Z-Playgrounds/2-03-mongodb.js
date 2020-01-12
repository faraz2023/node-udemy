//To start running the db you need to cd to 
// the bin folder of mongodb and run the command:
// sudo /mongod --dbpath=/Users/FarazKhoshbakhtian/mongodb-data
//dbpath refers to 

// CRUD Create Read Update Delete

const mongodb = require('mongodb');
const chalk = require('chalk')

const MongoClient = mongodb.MongoClient;


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'philosophers-app'

//connecting to database, note it is async and recives a callback
MongoClient.connect(connectionURL, {
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log(error)
    }
    console.log('Connected!')

    const db = client.db(databaseName);

    //<<<<<<<Create>>>>>>
    //insert one demonstration
    /*
    db.collection('users').insertOne({
        name: 'Faraz',
        age: 27
    }, (error, result) => {
        if (error) {
            return console.log(error);
        }
        console.log(result.ops);
        console.log('Success!');

        client.close();
    })
    */

    /*
    db.collection('users').insertMany([{
            name: 'Niloo',
            age: 25
        },
        {
            name: 'Sari',
            age: 20
        }
    ], (error, result) => {
        if (error) {
            return console.log(error);
        }

        result.ops.forEach(e => console.log(`${chalk.cyan.bold('Added:')} ${e.name}`));


        console.log('Success!');

        client.close();
    })
    */

    db.collection('questions').insertMany([{
            description: "Mind Body problem",
            solved: false
        },
        {
            description: 'Ontological Argument',
            solved: false
        }
    ], (error, result) => {
        if (error) {
            return console.log(error);
        }

        result.ops.forEach(e => console.log(`${chalk.cyan.bold('Added:')} ${e.description}`));


        console.log('Success!');

        client.close();
    })


    //<<<<<<<Create>>>>>>

})