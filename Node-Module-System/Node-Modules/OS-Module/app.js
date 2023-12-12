//OS-Module is used to get the information about your current system you are working on

const os = require('os')

console.log(os.arch()) // tells architectue (x32 or x64)

console.log(os.platform()) // tells about platform

console.log(os.networkInterfaces()) //tells about network

console.log(os.cpus()) //tells about your cpu configuration

console.log(os.totalmem()) //tells you about the total memory available in your system

console.log(os.freemem()) //tells you about your free memeory