require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('Not allowed')
})

app.post('/', (req, res) => {
    console.log(req.body)
})

app.listen(process.env.PORT)