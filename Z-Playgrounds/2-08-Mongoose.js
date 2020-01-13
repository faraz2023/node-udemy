const mongoose = require('mongoose')
const validateor = require('validator')

const connectionURL = 'mongodb://127.0.0.1:27017/philosophers-app';



mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// creating a collection
const User = mongoose.model('User', {
    name: {
        type: String,
        trim: true
    },
    age: {
        type: Number,
        //custome validation
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive')
            }
        },
        default: 18
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true,
        validate(value) {
            if (!validateor.isEmail(value)) {
                throw new Error('email must be valid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('"password" should not be a part of password')
            }
        }
    }

})

const Question = mongoose.model('Question', {
    desc: {
        type: String,
        required: true,
        trim: true
    },
    solved: {
        default: false,
        type: Boolean
    },
    topic: {
        type: String,
        default: 'general'
    }
})

/*
const sari = new User({
    name: "faraz",
    email: 'faraz@mail.com',
    password: 'faraz123'
})

sari.save().then(result => {
    console.log(result)
}).catch((error) => {
    console.log("Error :", error.message)
})
*/
module.exports.User = User;
module.exports.Question = Question;