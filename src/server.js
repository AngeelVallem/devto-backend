const express = require('express')
const cors = require('cors')
const app = express()

//se importan los routers
const usersRouter = require('./routers/users')
const postsRouter = require('./routers/posts')

//aqui se montan los middlewares
app.use(express.json())
app.use(cors())
app.use('/posts' , postsRouter)
app.use('/users', usersRouter )

module.exports = app
