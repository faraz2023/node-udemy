//Trying out Object IDs [Globally unique IDs]

//this is just to demonstrate how Object ID works. 
//We usually do not need to set it up manually

const chalk = require('chalk')

const {
    MongoClient,
    ObjectID
} = require('mongodb');

const id = new ObjectID();
// 4byte for the time. 5byte random value, 3byte counter (starting with a random value)
console.log(`Id is ${id} and id timpestamp is ${id.getTimestamp()}`)
//Raw binary info:
console.log(id.id)
// See how binary cuts the size of string into half
console.log(id.id.length)
console.log(id.toHexString().length)

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'philosophers-app'

MongoClient.connect(connectionURL, {
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log(error)
    }

    console.log('Connected!')
    const db = client.db(databaseName);
    db.collection('questions').insertOne({
        _id: id,
        description: "Question of Justice",
        solved: false
    }, (error, result) => {
        if (error) {
            return console.log(error);
        }

        console.log(chalk.cyan.bold('Added:'))
        console.log(result.ops)
        client.close()
    })
})