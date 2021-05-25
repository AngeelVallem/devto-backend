
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
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
        maxLength: 500,
        required: true
    },
    coverUrl: {
        type: String,
        minLength: 1,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    imagesUrl: {
        type: String,
    },
    likes: {
        type: Number,
        required: true
    },
    postTags: {
        type: String,
        minLength: 1,
        required: true
    },
    postTitle: {
        type: String,
        minLength: 1,
        maxLength: 50,
        required: true
    }
})

const model = mongoose.model('posts', postSchema)
module.exports = model