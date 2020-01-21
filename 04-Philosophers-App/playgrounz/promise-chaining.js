//start running the db
require("../src/db/mongoose");

const User = require("../src/models/user");


//5e238490ad01b9315f762036

User.findByIdAndUpdate("5e238490ad01b9315f762036", { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
});