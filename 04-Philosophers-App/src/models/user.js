const mongoose = require('mongoose')
const validateor = require('validator')

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
    //search for mongoose validators
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

module.exports = User;

