const mongoose = require('mongoose')

const replySchema = new mongoose.Schema({
    author: {
        type: String,
        minLength: 1,
        maxLength: 20,
        required: true
    },
    avatar: {
        type: String,
        minLength: 1,
        required: true
    },
    content: {
        type: String,
        minLength: 1,
        maxLength: 200,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    idPost: {
        type : ObjectId,
        required : true
    }
})

const model = mongoose.model('replies', replySchema)
module.exports = model 



