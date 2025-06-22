//Here we will see the setTimeout function
//setTimeout(function,time_in_ms);

//WAP to print the number from 1-10 with delay of 1s after after each number gets print
function print(a){
    setTimeout(function(){
        console.log(a);
    },1*1000);
}
for(let i=1;i<=10;i++){
    print(i);
}