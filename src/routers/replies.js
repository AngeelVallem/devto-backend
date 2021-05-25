const express = require('express')
const router = express.Router()
const replies = require('../usecases/replies')

router.get('/' ,  async (request,response) => {
	try{
		const allReplies = await replies.getAll()
		response.json({
			success : true,
			message : 'All replies',
			data : {
				posts :  allReplies
			}
		})
	}
	catch(err){
			response.status(400)
		response.json({
			success : false,
			message : 'Cant get all replies',
			error : err.message
		})
	}
})

router.post('/', async (request, response) =>{
    try{
        const reply = request.body
        await replies.postReply(reply)
        response.json({
            success: true,
            message: 'Reply created :D'
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
        
    }
})

module.exports = router
