const db = require('./db.json')

const NDFL = 1 - config.get('app').get('NDFL') / 100
const regional = 1 + config.get('app').get('regional') / 100

export const get = name => {}
