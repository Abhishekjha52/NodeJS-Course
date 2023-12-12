//Child process is a node module used to create sub process within a script
//You can perform different tasks with your script by just using some methods


// Example

const cp = require('child_process')

//It helps in executing commands which we generally use in cmd like openc calculator
cp.execSync('calc')

// If we want to open any browser, it also helps in executing it
cp.execSync('start chrome')

// I we want to get into specific website then
cp.execSync('start chrome www.youtube.com')

// we can also run another file through this file
console.log("Output: " + cp.execSync('node test.js'))