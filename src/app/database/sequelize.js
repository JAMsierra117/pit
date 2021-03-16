const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    database:  process.env.DATABASE || 'pit',
    username: process.env.USER_DATABASE || 'root',
    password: null,
    dialect: 'mysql'
  });

module.exports = sequelize