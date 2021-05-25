const Replies = require('../models/replies')



function getAll(){
  return Replies.find()
}

function postReply(Reply){  //{ Author, avatar, content, date, idPost }
  return Replies.create(Reply) //{ Author, avatar, content, date, idPost }
}

// function deleteReply(id){
//   return Replies.findByIdAndDelete(id)
// }

module.exports = {
  getAll,
  postReply
}
