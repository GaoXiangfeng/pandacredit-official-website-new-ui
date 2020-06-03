'use strict'

module.exports = process.env.NODE_ENV === 'production' ? require('./production.config') : require('./env.config')