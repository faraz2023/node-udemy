//start running the db
require("../src/db/mongoose");

const Question = require("../src/models/question");

Question.findByIdAndDelete("5e1d29ca7847681c5d15efc4").then((question) => {
    console.log(question);
    return Question.find({ solved: true })
}).then((result) => {
    console.log(result)
}).catch(e => console.log(e))

