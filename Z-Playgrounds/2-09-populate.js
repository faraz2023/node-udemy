const {
    User,
    Question
} = require('./2-08-mongoose.js')

const saveItemsToDb = (items) => {
    console.log(items)
    items.forEach(element => {
        console.log(element)
        element.save().then(result => {
            console.log(result)
        }).catch((error) => {
            console.log("Error :", error.message)
        })

    });
}

var items = []
const q1 = new Question({
    desc: "Ontologiucal Arg",
    solved: true,
    topic: "Ontology"
})


const q2 = new Question({
    desc: "Mind Body",
})


const u1 = new User({
    name: "faraz",
    email: 'faraz@mail.com',
    password: 'faraz123'
})

const u2 = new User({
    name: "faraz",
    email: 'faraz@toronto.com',
    password: 'faraz123'
})

items = items.concat([q1, q2, u1, u2])

console.log(items)

saveItemsToDb(items)