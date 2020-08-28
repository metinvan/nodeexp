# Project: Node-Rest API

### Introduction

  This Node.js based back-end application includes two versions of the API 
  that parses the http post data in the form of JSON object. The back-end will 
  extract the firstName, lastName and the clientID. Afterwards, a JSON object response 
  will be sent back to the the APi caller, with a very well formatted field values.

### The API urls:

  ```
  http://localhost:3000/api/v1/parse
  http://localhost:3000/api/v2/parse
  ```

### The Input Data
  ```
  POST Data = { "data": "JOHN0000MICHAEL0009994567" }
  ```

### The Response Data

  1. The first version, after the parssing or extraction, the zero strings are not 
      removed or no formatting of data will be made. Please notice the trailing zeroes are as is.
  ```
  Response Data = { statusCode: 200, data: { firstName: "JOHN0000", lastName: "MICHAEL000", clientId: "9994567" }}
  ``` 

  2. The second version, after the parssing or extraction, takes extra steps by removing the trailing zeroes and 
      formating the client-id by inserting a hypen character after the third character. Please notice the trailing zeroes were removed.

  ```
  Response Data =  { statusCode: 200, data: { firstName: "JOHN", lastName: "MICHAEL", clientId: "999-4567" } }
  ``` 

### Unit Testing
   
   Jest unit testing was added to verify core or significant features. Most important are the functions used to parse and format the input data. Likewise, it also includes two API call tests, one for each version of the API endpoints
  



### Thank you,

Jaizon Lubaton

Software Engineer