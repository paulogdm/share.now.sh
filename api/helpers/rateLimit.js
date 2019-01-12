const config = require('../config')
const client = new faunadb.Client({ secret: config.fauna_secret })
