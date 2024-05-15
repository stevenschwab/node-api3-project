const express = require('express');

const { validateUserId, validateUser, validatePost } = require('../middleware/middleware');
const Users = require('./users-model');
const Posts = require('../posts/posts-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await Users.get();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
});

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.use((error, req, res, next) => { // eslint-disable-line
  res.status(error.status || 500).json({
    message: error.message,
    customMessage: 'Something bad happened inside the users router',
  });
});

module.exports = router;