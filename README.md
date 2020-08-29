# Project: Node-Rest API

### Introduction

  This Node.js based back-end application includes two versions of the API 
  that parses the http post data in the form of a JSON object. The back-end will 
  extract the firstName, lastName and the clientId. Afterwards, a JSON object response 
  will be sent back to the APi client, with a well formatted field values.

### WebPack & TypeScript

   WebPack is the main build tool to concatenate, compress or minify the source code 
   for faster loading / execution time when the application will be deployed to production.

### Paradigm & Design Patterns

  The Application was mostly implemented using the modern Functional Programming paradigm. Which makes code easier to reason and very intuitive.
  It also improves handling of asynchronous code, callbacks, parallel processing and threading for future requirements. The most significant design patterns 
  are the IIFE and Revealing Module Pattern.

### Important Commands

  ```
  npm start
  npm test
  ```

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

  1. The first API version, after the parsing or extraction, the zero strings are not 
      removed or no formatting of data will be made. Please notice the trailing zeroes remains in the field values.

  ```
  Response Data = { statusCode: 200, data: { firstName: "JOHN0000", lastName: "MICHAEL000", clientId: "9994567" }}
  ``` 

  2. The second API version, after the parssing or extraction, it will take extra steps by removing the trailing zeroes  
      and formatting the client-id by inserting a hypen character after the third character. Please notice the trailing zeroes were trimmed to produce more intuitive values.

  ```
  Response Data =  { statusCode: 200, data: { firstName: "JOHN", lastName: "MICHAEL", clientId: "999-4567" } }
  ``` 

### GitFlow and CI/CD Pipeline

    GitFlow pattern will used in the code repository hosted in GitHub. There are develop, feature & hotfix branch that creates new pull request to merge to the master branch. Upon checkin to develop branch, it will be deployed to the development Server. Then, it will run the CI/CD pipeline that includes the Jest, API, Integration or UI testings. Finally, with the master branch, upon merge from staging branch it will be deployed to the Production environment.

### Jest For Testing 
   
   Jest unit testing was added to verify core or significant features. Most important are the functions used to parse and format the input data. Likewise, it also includes two actual API call to tests each version of the API endpoints.
  
### Docker & Kubernetes Ready

  This application is docker ready, it is build on top of a minimum Linux disk image with Node 12 and npm package
  readily installed. The image can be checked in to a docker registry such as DockerHub.

### Serverless Node.js Back-End
   
  Future improvements for this application, is to deploy the back-end code to Serveless platform such as GCP Cloud Function, AWS Lambda or Azure Function. This will reduce maintenance cost and the back-end can auto-scale to handle
  larger loads.

### Summary

  Node.js is a pleasure to work with, it is implemented with a very fast core V8 engine that are installed on many browsers, devices and platforms. From web, back-end, mobile and desktop app, it gives the developer the ability to do fullstack development. Likewie, Asyncronous, real-time streaming and Functional Programming are built-in to the Node.js core features. Other unique offerings are the even-loop, thread-pool, non-blocking UI thread, callbacks and promises makes it very appealing to integrate into the modern IT systems. The future of Node.js is bright and it is now being used in many other domains.



### Thank you,

Jaizon Lubaton

Software Engineer
