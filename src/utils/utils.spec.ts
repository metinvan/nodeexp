/* =====================================
Developer: Jaizon Fernando Lubaton
email: jahskee@yahoo.com
Date: August 28, 2020
License: MIT
========================================= */

const utils = require("./utils")
describe('Run test suite', () => {
  const testData = "JOHN0000MICHAEL0009994567"

  describe('test public functions', () => {

    it('text extract name, version 1', () => {
      const result = utils.extractName(testData)
      expect(result).toEqual({
        firstName: "JOHN0000",
        lastName: "MICHAEL000",
        clientId: "9994567"
      })
    })

    it('text extract name, version 2', () => {
      const result = utils.extractName(testData, "v2")
      expect(result).toEqual({
        firstName: "JOHN",
        lastName: "MICHAEL",
        clientId: "999-4567"
      })
    })
  })

  describe('test private functions', () => {

    let idx = 0
    it('test extract first name', () => {
      const result = utils.priv.findFirstName(testData)
      idx = result.end
      expect(result).toEqual({ start: 0, end: 8, firstName: "JOHN0000" })
    })

    it('test extract last name', () => {
      const result = utils.priv.findLastName(testData, idx)
      expect(result).toEqual({ start: idx, end: 18, lastName: "MICHAEL000" })
      idx = result.end
    })

    it('test extract clientId', () => {
      const result = utils.priv.findClientId(testData, idx)
      expect(result).toEqual({ clientId: "9994567" })
    })
  })
})
