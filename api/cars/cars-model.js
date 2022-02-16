const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where({id: id})
}

const create = (body) => {
  return db('cars').insert({...body})
  .then(car => getById(car))
}

module.exports = {
  getAll,
  getById,
  create
}