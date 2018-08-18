require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient


const DB_URL = process.env.DB_URL

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('Not allowed')
})

app.post('/', (req, res) => {
    console.log('received error log')
    console.log(req.body)
    app.locals.db.collection('logs').insertOne(req.body)

    res.send(true)
})

MongoClient.connect(DB_URL, { useNewUrlParser: true }).then((db) => {
  app.locals.db = db
  app.listen(process.env.PORT, () => {
    console.log('server is listening');
  })
})
