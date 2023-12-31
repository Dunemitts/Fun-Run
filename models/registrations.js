const { Model, DataTypes } = require('sequelize')
const sequelize = require('services/database')

class registrations extends Model {}

//Initalizer
registrations.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    race_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    registration_date: {
        type: DataTypes.DATE
    },
}, {
    sequelize,
    tableName: 'registrations', //This is the table name in the database
    modelName: 'registrations',
    timestamps: false //CreatedAt and UpdatedAt don't exist in our database
})

module.exports = registrations;