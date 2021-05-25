const server = require('./src/server')





server.listen(8080, (req, res) => {
	console.log('server is listening')
})
