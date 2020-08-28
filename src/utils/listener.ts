function createModule() {

  function listener() {
    console.log('Example app: http://localhost:3000/')
    const open = require('open');
    (async () => {
      const isBrowserOpen = localStorage.getItem("browserOpen")
   //   if (isBrowserOpen === null && isBrowserOpen !== 'true') {
       // await open('http://localhost:3000/static', { app: ['google chrome', '--incognito'] });
        localStorage.setItem('browserOpen', "true")
  //    } else {
    //    console.log('browser already opened')
    //  }

    })();
  }

  return { listener }
}

module.exports = createModule()