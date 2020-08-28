
module.exports = (function createModule() {
  
  function listener() {
    console.log('WebServer: http://localhost:3000')
    const open = require('open');
    (async () => {
        // await open('http://localhost:3000/static', { app: ['google chrome', '--incognito'] });
    })();
  }

  return { listener }
})()