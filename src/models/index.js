const sequelize = require('../config/database');
const Users = require('./users');
const Dogs = require('./dogs');

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso!');
  }).catch((error) => console.error('Erro ao sincronizar tabelas:', error));

module.exports = {
  Users,
  Dogs,
};

