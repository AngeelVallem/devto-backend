const Replies = require('../models/replies')



function getAll(){
  return Replies.find()
}


module.exports = {
  getAll
}
