const express = require('express')
const postsRouter = require('./routers/posts')
const repliesRouter = require('./routers/replies')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/posts' , postsRouter)
app.use('/replies', repliesRouter)

module.exports = app
