const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Space = sequelize.define('Space', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'spaces',
  timestamps: true,
});

module.exports = Space;
