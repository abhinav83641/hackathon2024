const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

//create blog

router.post('/create', (request, response) => {
    const { title, contents, user_id, category_id } = request.body
    const statement = 'insert into blogs (title, contents, user_id, category_id) values (?,?,?,?);'
    db.pool.execute(statement,
    [title, contents, user_id, category_id],
    (error,data)=>{
    response.send(utils.createResult(error,data))
    })
})

//edit blog
router.put('/edit',(request,response)=>{
    const{contents,id}=request.body
    const statement=`update blogs set contents = ? where id=?;`
    db.pool.execute(statement,[contents,id],(error,result)=>{
        response.send(utils.createResult(error,result))
    })
})

//search blog
router.post('/search', (request, response) => {
    const{title}=request.body
    const statement = `select blogs.id,blogs.title,categories.title as 'Category',users.created_time as 'Date',users.full_name as 'Author' from blogs,users,categories where blogs.user_id = users.id and blogs.category_id = categories.id and blogs.title like ? ; `
    db.pool.execute(statement,[title],(error,result)=>{
        response.send(utils.createResult(error,result))
    })
})





//delete blog
router.delete('/delete',(request,response)=>{
    const{id}=request.body
    const statement = `delete from blogs where id = ?;`
    db.pool.execute(statement,[id],(error,result)=>{
        response.send(utils.createResult(error,result))
    })
})

//view all blog

router.get('/viewall',(request,response)=>{
    const statement = `select blogs.id,blogs.title,categories.title as 'Category',users.created_time as 'Date',users.full_name as 'Author' from blogs,users,categories where blogs.user_id = users.id and blogs.category_id = categories.id; `
    db.pool.execute(statement,(error,result)=>{
        response.send(utils.createResult(error,result))
    })
})


//view my blog
router.get('/viewmyblog', (request, response) => {
    const{id}=request.body
    const statement = `select blogs.id,blogs.title,categories.title as 'Category',users.created_time as 'Date',users.full_name as 'Author' from blogs,users,categories where blogs.user_id = users.id and blogs.category_id = categories.id and users.id=?;`
    db.pool.execute(statement,[id],(error,result)=>{
        response.send(utils.createResult(error,result))
    })
})


module.exports=router