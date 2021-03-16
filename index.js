const express = require('express')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000

const { alumnos, usuarios } = require('./src/app/routes')


app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/auth', usuarios)
app.use('/alumnos',alumnos)



app.listen(port, () => {
    console.log('listening at port: '+ port)
})