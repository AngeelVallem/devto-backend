
const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
        
        email:{
            type: String,
            match: /.+@.+\..+/,
            maxLenght: 100,
            trim: true

        },
        password:{
            type: String,
            minLength: 1
        },
        name:{
            type: String,
            minLength: 2,
            maxLength: 50,
            trim: true,

        },
        avatar:{
            type: String,
            minLength: 2,
            maxLength: 50,
            trim: true,
        }
})

const model = mongoose.model('users', usersSchema)

module.exports = model