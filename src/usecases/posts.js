const Posts = require("../models/posts");

function getAll() {
  return Posts.find();
}

function getById(id) {
  return Posts.findById(id)
}

function create({
  author,
  avatar,
  content,
  coverUrl,
  date,
  day,
  month,
  year,
  imagesUrl,
  likes,
  postTags,
  postTitle,
}) {
  return Posts.create({author,avatar,content,coverUrl,date,day,month,year,imagesUrl,
	likes,postTags,postTitle,
  });
}

function updateById (id, newLike){
  return Posts.findByIdAndUpdate(id, newLike)
}

module.exports = {
  getAll,
  getById,
  create,
  updateById
};
