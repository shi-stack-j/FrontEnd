//Here we sre going to see about the promises in java script
//Promise-> They are introduced to solve the callback hell problem
//Promise has three states -> Pending,Fullfiled,Rejected
//Promise -> new Promise((resolve,reject)=>{});
//Resove and Reject are two callback functions ;

//Here we are creating the simple method that will return the resolved promise
function promise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Success");
            resolve("Success");
        },5000);
    });
};

//This is the promise which will return the failed result
function promise2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Failed");
            reject("failed");
        },6000);
    })
}
// promise();
// promise2();

//Now here we will see promise chaining 
//.then()->When promise resolved
//.catch()->When promise is rejected

//Here we have created the getData() method that will return promise
function getData(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a){
                console.log("Fetching data :- "+a);
                resolve("Data Fetched successfully.....");
            }else{
                console.log("Failed To fetch data...")
                reject("Failed...");
            }        
        },2*1000);
    });
}

//Here we have called the getData() for different values
//Here we can you both then and catch if funtion return reject then catch will execute otherwise then
//getData().then((res)=>console.log(res)).catch((res)=>console.log(res));
getData(1).then(()=>{
    getData(2).then(()=>{
        getData(3).then(()=>{
            getData(4).then(()=>{
                getData().then((res)=>console.log(res)).catch(res=>console.log(res));
            });
        });
    });
});
