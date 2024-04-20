const express = require('express')
const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const config = require('./config')
// const utils= require('./utils')

const app = express()
app.use(cors())
app.use(express.json())






const userRouter = require('./routes/users')
const categoriesRouter = require('./routes/categories')
const blogsRouter= require('./routes/blogs')

app.use('/users', userRouter)
app.use('/categories', categoriesRouter)
app.use('/blogs',blogsRouter)

app.listen(4000, '0.0.0.0', () => {
  console.log(`server started on port no 4000`)
})






