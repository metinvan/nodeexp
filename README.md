# node-rest

## Introduction

  This Node.js based back-end application includes two versions of the API 
  that parses the http post data in the form of JSON object. The back-end will 
  extract the firstName, lastName and clientID. Then send back a response 
  JSON object.

## About the API

  1. The first version, includes the zero strings and no formatting of data is made.

  2. The second version, takes extra steps by removing the trailing zeroes and 
  formating the client-id with a hypen character.

## Unit Testing
   
   Jest unit testing was added to test core or significant features it also includes
   actual api call test to http://localhost:3000/api/v1/parse and http://localhost:3000/api/v2/parse

## Images

![Test Image 4](https://github.com/tograh/testrepository/3DTest.png 