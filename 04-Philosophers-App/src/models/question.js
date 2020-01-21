const mongoose = require('mongoose')
const validateor = require('validator')

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
});

module.exports = Question;