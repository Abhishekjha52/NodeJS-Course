function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink==="Coffee"){
            resolve("Order for Coffee is received")
        }else{
            reject("Other orders rejected")
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log("Order is being processed")
        resolve(`${order} and is Served`)
    })
}

// placeOrder("Coffee").then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processedOrder){
//     console.log(processedOrder)
// }).catch(function(err){
//     console.log(err)
// })


// Async function - Keyword
/*
What is Async Function ?
Async simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread.

Async functions will always return a value. 
It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.


Example 1: In this example, we will see the basic use of async in JavaScript.

const getData = async () => {
    let data = "Hello World";
    return data;
}
 
getData().then(data => console.log(data));
Output
Hello World

*/

// Await function - keyword
/*
Await function is used to wait for the promise. 
It could be used within the async block only.

It makes the code wait until the promise returns a result.

Example 2: This example shows the basic use of the await keyword in JavaScript.

const getData = async () => {
    let y = await "Hello World";
    console.log(y);
}
 
console.log(1);
getData();
console.log(2);
Output
1
2
Hello World
Notice that the console prints 2 before the “Hello World”. This is due to the usage of the await keyword. 
*/


async function serveOrder(){
    try{
        let orderPlaced = await placeOrder("Coffee")
        console.log(orderPlaced)
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)
    }
    catch(err){
        console.log(err)

    }
}

serveOrder()




