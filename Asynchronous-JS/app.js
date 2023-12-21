const fs = require('fs')


// Synchronous code
console.log("First line")


// let data1 = fs.readFileSync('file1.txt')
// console.log("Output: " + data1)

// let data2 = fs.readFileSync('file2.txt')
// console.log("Output: " + data2)

fs.readFile('file1.txt', callBack1) //reads file in asynchronous way

function callBack1(err, data){
    if(err){
        console.log(err)
    }
    console.log("File 1 data: " + data)
    fs.readFile('file2.txt', callBack2) //It will get called only after callback1
}

// BUt what if file content is too large then it may take more time to print the last line console statement
// Hence, we adopt synchronous code

//fs.readFile('file2.txt', callBack2)

function callBack2(err, data){
    if(err){
        console.log(err)
    }
    console.log("File 2 data: " + data)
}


console.log("Last line")


// Here the order of callback function output is random, but we can serialize it by reading other files in first callback function
