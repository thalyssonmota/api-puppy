const { Users } = require('../models');
const bcrypt = require('bcrypt')

async function getUsers(req, res) {
  try {
    const users = await Users.findAll();
    return res.status(200).send(users);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: error.message
    });
  }
}

async function postUsers(req, res) {
  const {password} = req.body
  
  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).send({
          error: 'Erro ao criptografar a senha'
        });
      }
      req.body.password = hash;
    });
    await Users.create(req.body);
    return res.status(201).send('Usuário criado com sucesso');
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: error.message
    });
  }
}

async function deleteUsers(req, res) {
  try {
    const { id } = req.params;
    await Users.destroy(
      {
        where:
          { id: id }
      }
    );
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: error.message
    });
  }
}

async function putUsers(req, res) {
  try {
    const { id } = req.params;
    const [updated] = await Users.update(req.body, {
      where: { id }
    });
    if (updated) {
      const updatedUsers = await Users.findOne({ where: { id } });
      return res.status(200).send(updatedUsers);
    }
    throw new Error('User not found');
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: error.message
    });
  }
}

module.exports = {
  getUsers,
  postUsers,
  deleteUsers,
  putUsers
};
