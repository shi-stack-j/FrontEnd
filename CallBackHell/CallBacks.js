//Here we are going to see the callback hell problem in javascript

//Concept of callback 
//When we pass function inside function then it is called callback function

//This function is to print the sum of two numbers
function sum(a,b){
    console.log(a+b);
}

//This function will take three argument
//One the argument will we the sum function which we pass
function calculator(a,b,c){
    a(b,c);
}
//Here we are passing the function sum inside the function calculator
//This is called callback function
// calculator(sum,1,2);

//Now we will see what is callback hell

function getData(a,getNextData){
    setTimeout(()=>{
        console.log("Getting data :- "+a);
        // console.log(typeof(getNextData));
        //Here we are checking for the getNextData if it is truthy value then it will call next function 
        //Otherwise it will not call next function;
        if(getNextData){
            getNextData();
        }else{
            console.log("All data fetched successfully.....");
        }
        
    },2000);
}
//This is callback hell 
getData(1,()=>{
    //Calling getData with values 2
    getData(2,()=>{
        //Calling getData with values 3
        getData(3,()=>{
            //Calling getData with value 4
            //Now here no calling will we happend
            getData(4);
        });
    });
});
