const express = require('express')
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')
const config = require('../config')
const jwt= require('jsonwebtoken')

const router = express.Router()

//register users

router.post('/register', (request, response) => {
  const { firstName, lastName, email, password, phone } = request.body
  const statement = `insert into user ( firstName, lastName, email, password, phoneNumber) values (?,?,?,?,?)`
  const encryptedPassword = String(crypto.SHA256(password))
  db.pool.execute(statement, [firstName, lastName, email, encryptedPassword, phone], (error, result) => {
    response.send(utils.createResult(error,result))
  })
})

//login users

router.post('/login', (request, response)=> {
  const { email, password } = request.body
  const statement=`select id , firstName,lastName,phoneNumber,isDeleted from user where email = ? and password = ?`
  const encryptedPassword = String(crypto.SHA256(password))
  db.pool.query(statement, [email, encryptedPassword], (error, users) => {
    if (error) {
      request.send(utils.createErrorResult(error))
    } else {
      if (users.length == 0) {
        request.send(utils.createErrorResult('user does not exist'))
      } else {
        const user = users[0]
        if (user.isDeleted) {
          response.send(utils.createErrorResult('your account is closed'))
        } else {
          //create payload
          const payload = { id: user.id }
          const token = jwt.sign(payload, config.secret)
          const userData = {
            token,
            name:`${user['firstName']} ${user['lastName']}`,
            
          }
        
        response.send(utils.createSuccessResult(userData))
      }
    }
  }   
  })
})

module.exports=router

