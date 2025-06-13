const express = require('express');
const router = express.Router();
const dogsController = require('../controllers/dogs');
const authMiddleware = require('../middlewares/auth');

router.get('/dogs',
  authMiddleware.validateToken,
  dogsController.getDogs
);

router.post('/dogs',
  authMiddleware.validateToken,
  dogsController.postDogs
);

router.delete('/dogs/:id',
  authMiddleware.validateToken,
  dogsController.deleteDogs
);

router.put('/dogs/:id',
  authMiddleware.validateToken,
  dogsController.putDogs
);

module.exports = router;
