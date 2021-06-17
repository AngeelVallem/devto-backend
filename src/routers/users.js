
const express = require('express')
const router = express.Router()
const authMiddlewares = require('../middlewares/auth')

const usersUseCases = require('../usecases/users')


//funcion para loggear clientes
router.post('/login', async (request, response) => {
    try{
        
        const {email, password} = request.body
        const token = await usersUseCases.login(email, password)

        response.json({
            success: true,
            message: 'client logged in ',
            data: {
                token
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'cant log in',
            error: error.message
        })

    }
})

//funcion para crear nuevos clientes
router.post('/registration',  async (request, response) => {
    try{
        const newClient = await usersUseCases.signUp(request.body)
        response.json({
            success: true,
            message: 'client created successfully',
            data: {
                newClient
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'error at creating new client',
            error: error.message
        })

    }
})

//funciones que utilizan middlewares auth 

router.get('/:id' ,async (request, response) => {
    try{
        const { id } = request.params

        const specificClient = await usersUseCases.getClientsDataById(id)
        response.json({
            success: true,
            message: 'specific client found',
            data: {
                id,
                specificClient
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'error at getting specific client',
            error: error.message
        })

    }
})

router.get('/',async (request, response) => {
    try{

        const specificClient = await usersUseCases.getClientsData()
        response.json({
            success: true,
            message: 'All Clients',
            data: {
                specificClient
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'error at getting specific client',
            error: error.message
        })

    }
})





module.exports = router