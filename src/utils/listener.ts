/* =====================================
Developer: Jaizon Fernando Lubaton
email: jahskee@yahoo.com
Date: August 28, 2020
License: MIT
========================================= */

module.exports = (function createModule() {

  function listener() {
    console.log("WebServer: http://localhost:3000");
    /*
    const open = require('open');
    (async function() {
      await open('http://localhost:3000/static', { app: ['google chrome', '--incognito'] });
    })();
    */
  }

  return { listener }
})()