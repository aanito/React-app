const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
  date: Date,
  isFeatured: Boolean,
//   author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Referencing User
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;
