//Here we are going to see the objects in js
//Objects-> Similar to [Maps/dictionary]

//Object stroes key:value pairs

//This is creating the object
let obj={
    name:"Shivam",
    age:"18",
    city:"Rampur",
    email:"S@gmail.com"
}

//Printing the object
console.log(obj);
//Here in objects of not work so we have to use in
//Using loop
for (const ele in obj) {
    console.log(ele,obj[ele]);
}

//Acessing particular element
console.log(obj.age);
//console.log(obj[age]);//This will give error because we cannot access like this we have to pass as string
console.log(obj['age']);

//Updating the value of particular key
obj.age=29;
obj['city']="Bareilly";
console.log(obj);

//Deleting the key:value pair of obj
delete obj['age'];
console.log(obj.age);

//Adding the key value pair in object
obj['post']="Software";
console.log(obj);