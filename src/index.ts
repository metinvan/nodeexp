import express = require('express')
const path = require('path')
const { LocalStorage } = require("node-localstorage")
global.localStorage = new LocalStorage('./__tmp/localStorage');
var bodyParser = require('body-parser')

const app: express.Application = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: 'src/public'})
})

app.post("/api/v1/parse", function(req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', '*');

  let message:any = req.body.message || req.query.message || "empty"
  console.log(message)
  res.json({
    message: message,
    post: 'request'
  })
})

app.get("/api/v2/parse", function(req, res) {
  res.send({
    message: "hello"
  })
})

app.listen(3000, require("./utils/listener").listener)

