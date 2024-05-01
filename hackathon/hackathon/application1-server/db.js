const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'd1_83641_abhinav',
  password: '8149715090',
  port: 3306,
  database: 'airbnb_db',
  connectionLimit: 10,
})

module.exports = {
  pool,
}
