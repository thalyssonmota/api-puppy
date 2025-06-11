const sequelize = require('sequelize');
const Users = require('./user');
const Dogs = require('./dog');

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso!');
  }).catch((error) => console.error('Erro ao sincronizar tabelas:', error));

module.exports = {
  Users,
  Dogs,
};

