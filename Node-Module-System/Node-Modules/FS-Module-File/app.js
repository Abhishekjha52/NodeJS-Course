const fs = require('fs')

//Reading a file

let fileContent = fs.readFileSync('file1.txt')
console.log('Output: ' + fileContent)

//Writing a file  --> It overrides with new data

fs.writeFileSync('file2.txt', 'This is file2')

// //Update a file

fs.appendFileSync('file2.txt', 'This is appended data')
console.log("File 2 has been updated")

//Delete a file

fs.unlinkSync('file2.txt')
console.log("File 2 has been deleted")