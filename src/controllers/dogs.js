const {Dogs} = require('../models');

async function getDogs(req, res) {
  try {
    const dogs = await Dogs.findAll();
    return res.status(200).send(dogs);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: error.message
    });
  }
}

async function postDogs(req, res) {
  try {
    const dogs = await Dogs.create(req.body);
    return res.status(201).send(dogs);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: error.message
    });
  }
}

async function deleteDogs(req, res) {
  try {
    const { id } = req.params;
    await Dogs.destroy({ where: { id } });
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: error.message
    });
  }
}

async function putDogs(req, res) {
  try {
    const { id } = req.params;
    const [updated] = await Dogs.update(req.body, {
      where: { id }
    });
    if (updated) {
      const updatedDogs = await Dogs.findOne({ where: { id } });
      return res.status(200).send(updatedDogs);
    }
    throw new Error('Dog not found');
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: error.message
    });
  }
}

module.exports = {
  getDogs,
  postDogs,
  deleteDogs,
  putDogs
};
