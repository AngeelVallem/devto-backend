const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect() 
	.then(() =>{
		console.log('DB Connected');
		server.listen(8080, (req, res) => {
			console.log('server is listening')
		})

	})
	.catch(error =>{
		console.error('DB Connection Error');
	})






