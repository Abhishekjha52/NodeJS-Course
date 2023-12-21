const express = require('express')//returns a function which has lot of methods

const app = express() //to access all the methods, we need to call the express


function middlewareOne(req, res, next){
    console.log("I am custom middleware")
    next() //It helps to call another middlewares
}

module.exports = middlewareOne