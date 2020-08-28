import express = require('express')
const path = require('path')
const { LocalStorage } = require("node-localstorage")
global.localStorage = new LocalStorage('./__tmp/localStorage');

const app: express.Application = express()

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: 'src/public'})
})
app.listen(3000, require("./listener").listener)

