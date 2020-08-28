module.exports = (function createModule() {

  function extractName(data: string) {
    const res1 = findFirstName(data)
    const res2 = findLastName(data, res1.end)
    const res3 = findClientId(data, res2.end)

    return {
      firstName:res1.firstName,
      lastName:res2.lastName,
      clientId: res3.clientId
    }
  }

  function findFirstName(data:string, start = 0) {
     // extract first name, check for 4 consecutive zeros then get last index
     let end = 0
     let firstName = ''
     for (let i = 0; i < data.length; i++) {
       if(data.substr(i,4) === '0000') {
         console.log('firstname found' )
         end = i+4
         firstName = data.substr(start,end)
         break
       }
     }
     return  { start, end, firstName }
  }

  function findLastName(data:string, start = 0) {
    // get the starting index with 4 zeroess
    let end = 0
    let lastName = ''
    for (let i = start; i < data.length; i++) {
      if(data.substr(i,3) === '000') {
        end = i+3
        lastName = data.substr(start, end - start)
        break
      }
    }
    return  { start, end, lastName }
  }

  function findClientId(data: string, start = 0) {
    const clientId = data.substr(start, data.length - start)
    return  { clientId }
  }

  const pub = {
    extractName
  }

  const priv = {
    findFirstName,
    findLastName,
    findClientId
  }

  return {
    ...pub,
    priv
  }

})()
