const utils = require("./utils")
describe('', ()=>{
  const testData = "JOHN0000MICHAEL0009994567"
  
  it('test find first name', ()=>{
    const result = utils.findFirstName(testData)
    expect(result).toBe("JOHN0000")
  })

})