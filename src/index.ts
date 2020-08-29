/* =====================================
Developer: Jaizon Fernando Lubaton
email: jahskee@yahoo.com
Date: August 28, 2020
License: MIT
-----------------------------------
  Functional Programming
  Design Patterns: IIFE, Revealing Module Pattern, 
========================================= */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const utils = require('./utils/utils')

export default (function Server() {

  const app: any = express()

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(cors())

  /*======== Setup the Routes =========*/

  // serve the static page
  app.get('/', function (req: any, res: any) {
    res.sendFile('index.html', { root: 'src/public' })
  })

  // api call version 1
  app.post("/api/v1/parse", function (req: any, res: any) {
    let data: any = req.body.data || {}
    const userInfo = utils.extractName(data, "v1")
    res.json({
      statusCode: 200,
      data: userInfo
    })
  })

  // api call version 2
  app.post("/api/v2/parse", function (req: any, res: any) {
    let data: any = req.body.data || {}
    const userInfo = utils.extractName(data, "v2")
    res.json({
      statusCode: 200,
      data: userInfo
    })
  })

  // listen for request
  app.listen(3000, require("./utils/listener").listener)

})()