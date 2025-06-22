//Here we are going to see the map , filter , reduce function

let arr=[1,2,3,4,5];
console.log("Original array :- ",arr);
//First Method to Use map
function square(ele){
    return ele**2;
}
let brr=arr.map(square);
console.log(brr);

//Second method
brr=arr.map(function(ele){
    return ele**3;
});
console.log(brr);

//Third Method
brr=arr.map((ele)=>{
    return ele**4;
})
console.log(brr);

//Fourth Method
brr=arr.map(ele=>ele**5);
console.log(brr);

//Now We are going to see the filter method
//This will add the elements to the list for which the function will give true
function even(ele){
    if(ele%2==0)return true;
    else return false;
}
//We can you above all four methods to pass function in filtet()
brr=arr.filter(even);
console.log(brr);

//Now we are going to see the reduce method
//reduce()->This accepets two number and reduce them 
//This will return the sum of all the elements of the arr
brr=arr.reduce((a,b)=>a+b);
console.log(brr);

//Now we will see the sort function of arr
//Sort in accending order
brr=arr.sort();//This performs the wrong sorting for negative numbers 
console.log(brr);
//This will sort in decending order
brr=arr.sort((a,b)=>b-a);
console.log(brr);
//This will corrrectly sor both negative and positive arrays
brr=arr.sort((a,b)=>a-b);
console.log(brr);

