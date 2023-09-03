const { INTEGER, FLOAT, BOOLEAN } = require('sequelize');
const { connection } = require('../database/connection');

const Cart = connection.define('cart', {
    cartId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'user'
            }
        }
    },
    price: {
        type: FLOAT,
        allowNull: false
    },
    status: {
        type: BOOLEAN
    }
});

module.exports = { Cart };