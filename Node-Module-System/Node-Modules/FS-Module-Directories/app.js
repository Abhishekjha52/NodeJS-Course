const fs = require('fs')

//create a directory
fs.mkdirSync('myDirectory')

//check contents in directory
let folderPath = 'C:\\Users\\ABHISHEK JHA\\OneDrive\\Desktop\\Web-Development\\NodeJS\\Node-Module-System\\Node-Modules\\FS-Module-Directories\\myDirectory';

let folderContent = fs.readdirSync(folderPath)

console.log(folderContent)

// Check directory exists or not
console.log(fs.existsSync("myDirectory"))

//remove directory
fs.rmdirSync("testDirectory")
console.log("Deleted successfully")
