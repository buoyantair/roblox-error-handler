require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res, next) => {
    console.log(req.body)
    next()
})

app.listen(process.env.PORT || 3000, process.env.IP)