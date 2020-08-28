
import express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Design Patterns: IIFE, Revealing Moudle Pattern, Functional Programming
module.exports = (function server() {

  const app: express.Application = express()
  
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(cors())
  
  /*======== Setup the Routes =========*/
  
  // serve the static page
  app.get('/', function(req, res) {
    res.sendFile('index.html', {root: 'public'})
  })
  
  app.post("/api/v1/parse", function(req, res) {
    let data:any = req.body.data || {}
   
    // extract first name, check for 4 consecutive zeros then get last index
    let start = 0
    let firstName = ''
    for (let i = 0; i < data.length; i++) {
      if(data.substr(i,4) === '0000') {
        console.log('firstname found' )
        firstName = data.substr(start, i+4)
        break
      }
    }
  
    res.json({
      statusCode: 200,
      data: {
        firstName,
        lastName: "",
        clientId: ""
      }
    })
  })
  
  app.get("/api/v2/parse", function(req, res) {
    res.send({
      statusCode: "200",
      data: {
        firstname: "",
        lastname: ""
      }
    })
  })
  
  var isBrowser:boolean = true
  app.listen(3000, require("./utils/listener").listener)

  return {

  }
})()




