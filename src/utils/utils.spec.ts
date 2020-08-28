const utils = require("./utils")

describe('', ()=>{

  const testData = "JOHN0000MICHAEL0009994567"
  let idx = 0

  it('test extract first name', ()=>{
    const result = utils.findFirstName(testData)
    idx = result.end
    expect(result).toEqual({start: 0, end: 8, firstName: "JOHN0000"})
  })

  it('test extract last name', ()=>{
    const result = utils.findLastName(testData, idx)
    expect(result).toEqual({start: idx, end: 18, lastName: "MICHAEL000"})
  })
  
})