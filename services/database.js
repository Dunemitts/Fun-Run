const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('runs', '', '', {
    dialect: 'sqlite',
    host: './funrun.sqlite',
})

module.exports = sequelize