const mysql = require('mysql')


const dbConnection = mysql.createConnection({
    host: process.env.HOST_DATABASE || 'localhost',
    user: process.env.USER_DATABASE || 'root',
    password: process.env.PASSWORD_DATABASE || '',
    database: process.env.DATABASE || 'pit'
})


dbConnection.connect((err) => {
    if(err) throw err;
    console.log('Database connected')
})


module.exports = dbConnection