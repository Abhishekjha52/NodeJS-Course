const express = require('express')//returns a function which has lot of methods

const app = express() //to access all the methods, we need to call the express


function middlewareTwo(req, res, next){
    console.log("I am second custom middleware")
    next() //It helps to call another middlewares
}

module.exports = middlewareTwo