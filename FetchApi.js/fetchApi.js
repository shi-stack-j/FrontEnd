
let promise=async ()=>{
    let data=await fetch("http://localhost:8080/Fetch/hello");
    let text=await data.json();
    console.log(text);
}
promise();