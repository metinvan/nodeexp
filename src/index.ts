import express = require('express')
const path = require('path')
const { LocalStorage } = require("node-localstorage")
global.localStorage = new LocalStorage('./__tmp/localStorage');

const app: express.Application = express()

// jade web pages
app.set('views', path.join(__dirname, '../src/public'));
app.set('view engine', 'jade');

app.get('/', function(req, res, next) {
    res.render('index', { title: 'Hello World!' });
});

app.listen(3000, require("./listener").listener)

