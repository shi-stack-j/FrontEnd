//Here we are going to seee about the async await 
//These are also introduced to solve the callback hell problem 
//These are more efficient then promises

//Here we have made simple function that will return the data after some time
function getData(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Getting data ;- ",a);
            resolve("Success");
        },2*1000);
    });
}

//Noew in placee of callbacks or promises we will use asyn

//async :- It is the keyword that make the function asynconus 
//means the next line of the function will only execute when first one completes its execution
//the timming of excution doesnt matter

async function data() {
    console.log("Fetching data 1......");
    await getData(1);
    console.log("Fetching data 2......");
    await getData(2);
    console.log("Fetching data 3......");
    await getData(3);
    console.log("Fetching data 4......");
    await getData(4);
    console.log("Fetching data 5......");
    await getData(5);
    
}
//We can create the async function with different method like
//This will automatically call the function we don not want to call it manually
(async function(){
    console.log("Fetching data 1......");
    await getData(1);
    console.log("Fetching data 2......");
    await getData(2);
    console.log("Fetching data 3......");
    await getData(3);
    console.log("Fetching data 4......");
    await getData(4);
    console.log("Fetching data 5......");
    await getData(5); 
})();