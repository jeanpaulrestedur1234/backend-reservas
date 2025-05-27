const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mi_basedatos', 'jean_test', 'Abcd1234', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = { sequelize };
