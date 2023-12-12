const calculator = require('./calc')//This is how you import a module using require keyword

const sum = calculator.addition(2, 3);
const diff = calculator.subtraction(2, 3);
const mul = calculator.multiplication(2, 3);
const div = calculator.division(2, 3);
console.log(sum);
console.log(diff);
console.log(mul);
console.log(div);












//Suppose whe have two files which has same variable names with two different values then value of one file gets overridden by another
// Hence then need of modularity comes into picture

// let name = "Abhishek"

// console.log(global.name)



