const {INTEGER} = require('sequelize');
const {connection} = require('../database/connection');

const ProductCart = connection.define('product_cart', {
    productId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'product'
            }
        }
    },
    cartId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'cart'
            }
        }
    }
}, {underscored: true, paranoid: true});

module.exports = { ProductCart }