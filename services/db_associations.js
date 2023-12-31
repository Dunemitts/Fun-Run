const runs = require('models/runs')
const users = require('models/users')
const registrations = require('models/registrations')

const setAssociations = () => {
    //Define a many:many relationship through the CountryLanguage model
    runs.belongsToMany(users, {
        through: registrations,
        foreignKey: 'user_id', //table field that relates to the user table
        otherKey: 'race_id', //table field that relates to the race table
    }),
    users.belongsToMany(runs, {
        through: registrations,
        foreignKey: 'user_id', //table field that relates to the user table
        otherKey: 'race_id', //table field that relates to the race table
    })

    //Language.belongsToMany(Country, {}) maybe we don't need this for now
}

module.exports = setAssociations