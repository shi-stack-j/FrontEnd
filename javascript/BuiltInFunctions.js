//Here we are going to see some buitin functions of js math

// This will return the maximum value among three
//It can accept multiple values
console.log(Math.max(1,2,4));
//To find minimum
console.log(Math.min(2,3,4));

//This will return the absolute value of the given number;
console.log(Math.abs(-1));
//This will return the Base interger of the decimal value;
//2.5->2 , 2.6->2,2.4->2
console.log(Math.floor(2.5));
//This will return the Top integer of the decimal value;
//2.4->3,2.6->3,2.1->3
console.log(Math.ceil(2.4));
//This will return the nearest integer 
console.log(Math.round(2.3));//->2
console.log(Math.round(2.5));//->3
console.log(Math.round(2.6));//->3
//This will generate the random number b/w 0-1 excluding 1
console.log(Math.random());

//Question WAF to generate the random b/w 0-10
console.log(Math.random()*11);
//Generate the integer b/w 0-10
console.log(Math.floor(Math.random()*11));
//WAC to generate the random number -10 to 10
console.log("Generating b/w 0-20");
function TenPToTenN(){
    let num=Math.floor(Math.random()*21);
    for( let i=0;i<21;i++){
        if(num==20){
            num=-10;
        }else if(num>10){
            num=num%10*-1;
        }
        console.log(num);
        num=Math.floor(Math.random()*21);
    }
}
TenPToTenN();
