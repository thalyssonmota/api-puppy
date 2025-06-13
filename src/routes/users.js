const express = require('express');
const router = express.Router();  
const usersController = require('../controllers/users');
const usersMiddleware = require('../middlewares/users');
const authMiddleware = require('../middlewares/auth');


router.get('/users',
  authMiddleware.validateToken,
  usersController.getUsers
);

router.post('/users',
  usersMiddleware.validateCreateUser,
  usersController.postUsers
);

router.delete('/users/:id',
  authMiddleware.validateToken,
  usersController.deleteUsers
);

router.put('/users/:id',
  authMiddleware.validateToken,
  usersController.putUsers
);

module.exports = router;