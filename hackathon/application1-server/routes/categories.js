const express = require('express')
const db = require('../db')
const utils = require('../utils')



const router = express.Router()

// add category
router.post('/add', (request, response) => {
  const { title, description } = request.body
  const statement = `insert into categories ( title, description) values (?,?)`
   db.pool.execute(statement, [title, description], (error, addcategory) => {
    response.send(utils.createResult(error,addcategory))
  })
})

// show category

router.get('/showcategories', (request, response) => {
    const statement = `select id, title, description from categories;`
    db.pool.query(statement, (error, categories) => {
      response.send(utils.createResult(error, categories))
    })
  })



module.exports = router



