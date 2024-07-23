const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  imagePublicId: String, // Store the public ID of the image from Cloudinary
  imageUrl: String, // Store the URL of the image from Cloudinary
  date: { type: Date, default: Date.now },
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;


// const mongoose = require('mongoose');

// const blogPostSchema = new mongoose.Schema({
//   title: String,
//   content: String,
//   imageUrl: String,
//   date: Date,
// //   author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Referencing User
// });

// const BlogPost = mongoose.model('BlogPost', blogPostSchema);
// module.exports = BlogPost;
