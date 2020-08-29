# Project: Node-Rest API

### Introduction

  This Node.js based back-end application includes two versions of the API that parses the HTTP post data in the form of a JSON object. The back-end will extract the firstName, lastName, and the clientId. Afterward, a JSON object response will be sent back to the API client, with well-formatted field values.

### Node, TypeScript, Jest & WebPack

  WebPack is the main build tool to concatenate, compress or minify the source code for faster loading/execution time when the application will be deployed to production.

  ![npm start](https://github.com/jahskee2/node-rest/blob/master/img/webpack-npm-start.png?raw=true)

### Functional Programming, Revealing Module Pattern & IIFE

  The Application was mostly implemented using the modern Functional Programming paradigm. This makes the code much easier to reason and it is very intuitive when everything is composed of functions. It also improves the handling of asynchronous code, callbacks, parallel processing, and threading for future requirements. The most significant design patterns used in this project is the Revealing Module Pattern and the IIFE.

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

  1. The first API version, after the parsing or extraction, the zero strings are not removed or no formatting of data will be made. Please notice the trailing zeroes remain in the field values.

  ```
  Response Data = { statusCode: 200, data: { firstName: "JOHN0000", lastName: "MICHAEL000", clientId: "9994567" }}
  ``` 

  ![api v1](https://github.com/jahskee2/node-rest/blob/master/img/postmant-run-v1.png?raw=true)

  2. The second API version, after the parsing or extraction, it will take extra steps by removing the trailing zeroes and formatting the client-id by inserting a hyphen character after the third character. Please notice the trailing zeroes were trimmed to produce more intuitive values.

  ```
  Response Data =  { statusCode: 200, data: { firstName: "JOHN", lastName: "MICHAEL", clientId: "999-4567" } }
  ``` 
  ![api v2](https://github.com/jahskee2/node-rest/blob/master/img/postmant-run-v2.png?raw=true)

### GitFlow and CI/CD Pipeline

  GitFlow pattern will be used in the code repository hosted in GitHub. There are develop, feature & hotfix branch that creates a new pull request to merge to the master branch. Upon check in to develop a branch, it will be deployed to the Development Server. Then, it will run the CI/CD pipeline that includes the Jest, API, Integration, or UI testings. Finally, with the master branch, upon merge from the staging branch, it will be deployed to the Production environment.

### Jest For Testing 
   
   Jest unit testing was added to verify core or significant features. Most important are the functions used to parse and format the input data. Likewise, it also includes two actual API call to test each version of the API endpoints.

  ![jest test](https://github.com/jahskee2/node-rest/blob/develop/img/npm-run-test.jpg?raw=true)
  
### Docker & Kubernetes Ready

  This application is docker ready, it is build on top of a minimum Linux disk image with Node 12 and npm package readily installed. The image can be checked in to a docker registry such as DockerHub.

### Serverless Node.js Back-End
   
  Future improvements for this application, is to deploy the back-end code to Serveless platform such as GCP Cloud Function, AWS Lambda or Azure Function. This will reduce maintenance cost and the back-end can auto-scale to handle
  larger loads.

### Summary

  Node.js is a pleasure to work with, its significance is noticeable in many data and I/O intensive applications. At its core is the fast V8 engine developed by Google, the concept of event-loop, libuv, thread-pool, non-blocking UI, callbacks and promises. Which makes it very appealing to integrate into the modern systems. Node.js are installed on many browsers, devices and platforms. From web to back-end, to mobile and desktop app, it gives developers the ability to work as a full-stack. Other breakthrough features includes its natural support for asyncronicity, parallel processing, real-time streaming and Functional Programming. The future of Node.js is bright, also it is now being used in many different domains.



### Thank you,

Jaizon Lubaton

Software Engineer
