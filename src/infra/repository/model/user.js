const Sequelize = require('sequelize');
const database = require('../database');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: { type: Sequelize.STRING }
})

module.exports = User;