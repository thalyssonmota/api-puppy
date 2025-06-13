const express = require('express');
const router = express.Router();  
const usersController = require('../controllers/users');

router.get('/users',
  usersController.getUsers
);

router.post('/users',
  usersController.postUsers
);

router.delete('/users/:id',
  usersController.deleteUsers
);

router.put('/users/:id',
  usersController.putUsers
);

module.exports = router;