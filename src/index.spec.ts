const axios = require('axios')

describe('Run API Call Test', () => {

  const respoonse_v1 = { statusCode: 200, data: { firstName: "JOHN0000", lastName: "MICHAEL000", clientId: "9994567" } }
  const respoonse_v2 = { statusCode: 200, data: { firstName: "JOHN", lastName: "MICHAEL", clientId: "999-4567" } }

  it('make api call on version 1', async () => {

    try {
      const resp = await axios({
        url: 'http://localhost:3000/api/v1/parse',
        method: 'post',
        data: { "data": "JOHN0000MICHAEL0009994567" }
      })

      expect(resp.data).toEqual(respoonse_v1);
    } catch (error) {
      console.error('Server not running, try "npm start",', error.message)
    }
  })

  it('make api call on version 2', async () => {

    try {
      const resp = await axios({
        url: 'http://localhost:3000/api/v2/parse',
        method: 'post',
        data: { "data": "JOHN0000MICHAEL0009994567" }
      })

      expect(resp.data).toEqual(respoonse_v2);
    } catch (error) {
      console.error('Server not running, try "npm start",', error.message)
    }
  })

}) 