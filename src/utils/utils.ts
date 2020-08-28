module.exports = (function createModule() {

  function findFirstName(data:string) {
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
     return firstName
  }

  function findLastName(data:string) {

  }

  function findClientId(data: string) {

  }

  return {
    findFirstName,
    findLastName,
    findClientId
  }

})()
