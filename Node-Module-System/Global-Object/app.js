console.log(global)


// This won't work as this name is scoped to this file name itself but not to use it as globally
// Hence, shows undefined

//Which means NodeJs works in modules and maintains modularity
let name = 'Abhishek'

console.log(global.name)

