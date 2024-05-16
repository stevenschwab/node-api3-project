const Users = require('../users/users-model');
const Posts = require('../posts/posts-model');

function logger(req, res, next) {
  const date = new Date();
  console.log(`
    REQUEST METHOD: ${req.method}
    REQUEST URL: ${req.originalUrl}
    TIMESTAMP: ${date.toLocaleString()}
  `);
  next();
}

async function validateUserId(req, res, next) {
  try {
    const user = await Users.getById(req.params.id);
    console.log('user', user)
    if (user) {
      req.user = user;
      next();
    } else {
      next({ status: 404, message: "user not found" });
    }
  } catch (err) {
    next(err)
  }
}

function validateUser(req, res, next) {
  const { name } = req.body;
  if (
    name !== undefined &&
    typeof name === 'string' &&
    name.length &&
    name.trim().length
  ) {
    next()
  } else {
    next({ status: 400, message: 'missing required name field' });
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  next()
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};