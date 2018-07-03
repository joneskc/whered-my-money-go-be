const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const config = require('../knexfile')[env]
const knex = require('knex')(config)

module.exports = knex