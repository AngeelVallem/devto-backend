const Posts = require("../models/posts");

function getAll() {
  return Posts.find();
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

module.exports = {
  getAll,
  create
};
