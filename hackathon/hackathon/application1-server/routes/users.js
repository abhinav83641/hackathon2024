const express = require('express')
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')

const router = express.Router()

//register users

router.post('/register', (request, response) => {
  const { full_name, email, password, phone_no } = request.body
  const statement = `insert into users ( full_name, email, password, phone_no) values (?,?,?,?)`
  const encryptedPassword = String(crypto.SHA256(password))
  db.pool.execute(statement, [full_name, email, encryptedPassword, phone_no], (error, result) => {
    response.send(utils.createResult(error,result))
  })
})

//login users

router.post('/login', (request, response)=> {
  const { email, password } = request.body
  const statement=`select id ,full_name, phone_no from users where email = ? and password = ?`
  const encryptedPassword = String(crypto.SHA256(password))
  db.pool.query(statement, [email, encryptedPassword], (error, users) => {
    if (error) {
      request.send(utils.createErrorResult(error))
    } else {
      if (users.length == 0) {
        response.send(utils.createErrorResult('user does not exist'))
      } else { 
        response.send(utils.createSuccessResult(users))
      
    }
  }   
  })
})

module.exports=router

