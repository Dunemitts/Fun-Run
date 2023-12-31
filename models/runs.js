const { Model, DataTypes } = require('sequelize')
const sequelize = require('services/database')

class runs extends Model {}

//Initalizer
runs.init({
    date: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    run_type: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    tableName: 'runs', //This is the table name in the database
    modelName: 'runs',
    timestamps: false //CreatedAt and UpdatedAt don't exist in our database
})

module.exports = runs;