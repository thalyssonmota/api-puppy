const {DataTy,DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Dogs = sequelize.define('Dogs', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  namedog:{
    type: DataTypes.STRING,
    allowNull: false
  },
  agepet:{
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0 
    }
  },
  pedigree:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  genero:{
  type: DataTypes.ENUM('Macho', 'Fêmea'),
    allowNull: false
  },
  raca:{
    type: DataTypes.STRING,
    allowNull: false
  },
  chip:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});
