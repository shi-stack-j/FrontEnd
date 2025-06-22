//Here we are going to see the truthy and falsy values
//Truethy Values -> These are the values which are considered as true
//Falsy Values -> These are the values which are considered as false


//Falsy Values -> 0 , False Condition , false , NaN , undefined , null
//Truthy Values -> All values except falsy values

//The Below all the will give falsy value output because they all are falsy values
//The values other then these will give output true 
//0->Falsy value
if(0) console.log("Truethy");
else console.log("Falsey");
//NaN->Falsy Value
if(NaN) console.log("Truethy");
else console.log("Falsey");
//undefined -> Falsy Value
if(undefined) console.log("Truethy");
else console.log("Falsey");
//null-> Falsy Value
if(null) console.log("Truethy");
else console.log("Falsey");
//False Condition -> Falsy Value
if(5<3) console.log("Truethy");
else console.log("Falsey");
//False -> Falsy Value
if(false) console.log("Truethy");
else console.log("Falsey");