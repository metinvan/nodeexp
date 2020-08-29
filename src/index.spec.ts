/* =====================================
Developer: Jaizon Fernando Lubaton
email: jahskee@yahoo.com
Date: August 28, 2020
License: MIT
========================================= */

const axios = require('axios')

describe('Run API Call Test', () => {

  const respoonse_v1 = { statusCode: 200, data: { firstName: "JOHN0000", lastName: "MICHAEL000", clientId: "9994567" } }
  const respoonse_v2 = { statusCode: 200, data: { firstName: "JOHN", lastName: "MICHAEL", clientId: "999-4567" } }

  it('make api call on version 1', async () => {
    const URL1 = 'http://localhost:3000/api/v1/parse'

    try {
      const resp = await axios({
        url: URL1,
        method: 'post',
        data: { "data": "JOHN0000MICHAEL0009994567" }
      })

      expect(resp.data).toEqual(respoonse_v1);
    } catch (error) {
      console.error('Server not running, try "npm start",', error.message)
    }
  })

  it('make api call on version 2', async () => {
    const URL2 = 'http://localhost:3000/api/v2/parse'

    try {
      const resp = await axios({
        url: URL2,
        method: 'post',
        data: { "data": "JOHN0000MICHAEL0009994567" }
      })

      expect(resp.data).toEqual(respoonse_v2);
    } catch (error) {
      console.error('Server not running, try "npm start",', error.message)
    }
  })

}) 