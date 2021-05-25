const express = require('express')
const postsRouter = require('./routers/posts')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/posts' , postsRouter)

module.exports = app
