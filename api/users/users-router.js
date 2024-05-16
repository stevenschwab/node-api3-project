const express = require('express');

const { validateUserId, validateUser, validatePost } = require('../middleware/middleware');
const Users = require('./users-model');
const Posts = require('../posts/posts-model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Users.get()
    .then(users => {
      res.json(users)
    })
    .catch(next)
});

router.get('/:id', validateUserId, (req, res) => {
  res.json(req.user);
});

router.post('/', validateUser, (req, res, next) => {
  Users.insert(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(next)
});

router.put('/:id', validateUserId, validateUser, (req, res, next) => {
  Users.update(req.params.id, req.body)
    .then(updatedUser => {
      res.json(updatedUser);
    })
    .catch(next)
});

router.delete('/:id', validateUserId, (req, res, next) => {
  Users.remove(req.params.id)
    .then(() => {
      res.json(req.user);
    })
    .catch(next)
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.use((error, req, res, next) => { // eslint-disable-line
  res.status(error.status || 500).json({
    message: error.message,
    customMessage: 'Something bad happened inside the hubs router',
  });
});

module.exports = router;