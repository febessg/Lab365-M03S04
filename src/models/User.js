const { INTEGER, STRING } = require('sequelize');
const { connection } = require('../database/connection');
const { Cart } = require('./Cart');

const User = connection.define('user', {
    userId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: false
    },
    password: {
        type: STRING,
        allowNull: false
    }
}, {underscored: true, paranoid: true});

Cart.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Cart, {foreignKey: 'userId'});

module.exports = { User };