// Here we are going to see the concept of array in js
//Declaring the array in js
let arr=[];
// Adding elements to the array 
//push->Will element at the end of the array
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
//Arr.length->Is used to find the length of the arr
console.log("Size of the array is :- ",arr.length);
//Printing the array
console.log(arr);

//Removing the element from the back of the array
arr.pop();
console.log(arr);

//Adding the element to the starting of the array
arr.unshift(0);
console.log(arr);

//Delete the element from the starting of the array 
arr.unshift();
console.log(arr);

//getting the particular element from the array
console.log("Zeroth index of arr is :",arr[0]);//->Return the element on the zero index or array

//Updating the element of th particular index of array

arr[0]=10;
console.log("Updated array is :- ",arr);

let arr2=[];
//After making the array constant we can perform operations on array but we cannot re declare array
//let arr2=[];//->This will produce error 
arr2=["hello",2.6,5,'c']//->This is legal we can add elements with mutiple datatype in array
console.log(arr2);

//Printing arrays using different loops
arr2=["hello",2.6,5,'c'];
//Using simpel for loop
console.log("Printing using simple for loop........");
for(let i=0;i<arr2.length;i++){
    console.log(i,arr2[i]);
}
//Using forOf loop of js
console.log("Printing using forOf loop of js.....");
for (const ele of arr2) {
    console.log(ele);
}
//Using forEach loop of js
console.log("Printing using forEach loop of js......");
//Here (ele->Is the itrator will iterate over each element,i->Is the index of each element,ob->The original object)
arr2.forEach((ele,i,ob)=>{
    console.log(ele,i,ob);
})

