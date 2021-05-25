const Replies = require('../models/replies')



function getAll(){
  return Replies.find()
}

function postReply(Reply){
  return Replies.create(Reply)
}

// function deleteReply(id){
//   return Replies.findByIdAndDelete(id)
// }

module.exports = {
  getAll,
  postReply
}
