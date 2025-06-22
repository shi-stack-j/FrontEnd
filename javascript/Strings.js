//Here we are going to see about the strings in js

var st="Hello This is string Hello";
//To find the leght of the string in js
console.log(st.length);

//printing the string 
console.log(st);
// for(let i=0;i<st.length;i++){
//     console.log(st[i]);
// }

//Built in methods of string
console.log(st.toLowerCase());//Conver string to lowerCase and return new string
console.log(st.toUpperCase());//Convert String to uppercase and return new String
console.log(st.slice(0));//This will return the  string from index 0 to last
console.log(st.slice(0,6));//This will return the string from index 0 to 6-1
console.log(st.charAt(4));//This will return the character at index 4
console.log(st.concat(" I am concanated"));//Used to merege to strings
console.log(st.replace('H','K'));//This will replace the First H with K
console.log(st.replaceAll('H','K'));//This will replace every H with K
console.log(st.indexOf('H'));//This will return first index of H
console.log(st.includes("TH"));//This will return true if string includes TH
console.log(st.trim());//This will trim all the spaces from left and right of the string

