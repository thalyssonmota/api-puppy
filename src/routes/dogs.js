const express = require('express');
const router = express.Router();
const dogsController = require('../controllers/dogs');

router.get('/dogs',
  dogsController.getDogs
);

router.post('/dogs',
  dogsController.postDogs
);

router.delete('/dogs/:id',
  dogsController.deleteDogs
);

router.put('/dogs/:id',
  dogsController.putDogs
);

module.exports = router;
