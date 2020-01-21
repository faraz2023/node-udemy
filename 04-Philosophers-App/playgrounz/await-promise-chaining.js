//start running the db
require("../src/db/mongoose");

const User = require("../src/models/user");

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount("5e238490ad01b9315f762036", 100).then(result => {
    console.log("Update age: " + result)
}).catch(e => {
    console.log(e)
})


const Question = require("../src/models/question");

const deleteCountUncomplete = async (id) => {
    const question = await Question.findByIdAndDelete(id);
    const count = await Question.countDocuments({ solved: false });
    return count;
}

deleteCountUncomplete("5e23a98618bc6f0fde6899c6").then(result => {
    console.log("Delete and Comp: " + result);
}).catch(e => console.log(e))