 
const express = require('express');
const { 
  createPost, 
  getPosts,
  getPost
} = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/post').post(protect, createPost);
router.route('/posts').get(getPosts);
router.route('/posts/:id').get(getPost);

module.exports = router;