// How to produce a promise

let myPromise = new Promise(function(resolve, reject){
    const a = 4;
    const b = 4;

    setTimeout(()=>{
        if(a===b){
            resolve("Equal")
        }else{
            reject("Not Equal")
        }
    }, 2000)
})

// Pending state
console.log(myPromise)

// Fulfilled state
myPromise.then(function(data){
    console.log(data);
})

// Rejected state
myPromise.catch(function(err){
    console.log(err)
})
