const express = require('express')
const router = express.Router()
const posts = require('../usecases/posts')




router.get('/' ,  async (request,response) => {
	try{
				const allPosts = await posts.getAll()
		response.json({
			success : true,
			message : 'All posts',
			data : {
				posts : allPosts
			}
		})
	}
	catch(err){
			response.status(400)
		response.json({
			success : false,
			message : 'Cant get all posts',
			error : err.message
		})
	}
})

router.post('/', async (request,response) => {
	try{
			await posts.create(request.body)
response.json({
	success : true,
	message : 'Post created',
})
}
catch(err){
	response.status(400)
response.json({
	success : false,
	message : 'Cant create post',
	error : err.message
})
}
})



module.exports = router
