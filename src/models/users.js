const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^\d{11}$/ // Validates Brazilian CPF format (11 digits)
    }
  },
  nascimento: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}) 

module.exports = Users