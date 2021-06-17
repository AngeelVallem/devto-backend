
const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

//funcion para registrar usuarios
async function signUp ({ email, password, name, avatar}){

    const clientFound= await Users.findOne({email})
    if (clientFound){
        throw new Error('User already exists')
    }

    const encryptedPassword = await bcrypt.hash(password)

    return Users.create({ email, password: encryptedPassword, name, avatar})
}

//funcion para loggear clientes
async function login (email, password){

    const clientFound= await Users.findOne({email})
    if(!clientFound){
        throw new Error('invalid data')
    }

    const isValidPassword = await bcrypt.compare(password, clientFound.password)
    if(!isValidPassword){
        throw new Error('invalid data')
    }

    return jwt.sign({id:clientFound._id})
}

//funcion para traer la data de un cliente en especifico por su id
function getClientsDataById (id){
    return Users.findById(id)
}



//funcion para traer la data de todos los clientes
function getClientsData (){
    return Users.find()
}


//funcion para agregar datos de clientes en especifico por id
function updateClients(id, dataToUpdate){
    return Users.findByIdAndUpdate(id, dataToUpdate)
}

//funcion para borrar clientes
function deleteClient (id){
    return Users.findByIdAndRemove(id)
}


module.exports = {
    login,
    getClientsData,
    signUp,
    getClientsDataById,
    updateClients,
    deleteClient
}