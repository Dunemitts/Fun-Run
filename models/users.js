const { Model, DataTypes } = require('sequelize')
const sequelize = require('services/database')

class users extends Model {}

//Initalizer
    users.init({
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    tableName: 'users', //This is the table name in the database
    modelName: 'users',
    timestamps: false //CreatedAt and UpdatedAt don't exist in our database
})

module.exports = users;