//Here we are going to see the functions of js here

//function -> is used to define function
function hello(){
    console.log("Hello world");
}

//This function will take var args
function sum(...num){
    let s=0;
    for (const element of num) {
        s+=element
    }
    return s;
}
//Here we are calling the function of see the output
console.log(sum(1,2,4,5,3));

function mul(a,b){
    return a*b;
}
console.log(mul(2,3));

function msg(a,b){
    if(a==0){
        return `This is not valid value :- ${a}`;
    }
    return `a +  b is :- ${a+b}`;
}
console.log(msg(0,2));
console.log(msg(1,2));
