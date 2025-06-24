//Performing operation on box1
//Selecting box1
let box1=document.getElementById('box1');
//Adding eventlistener in box1
//This will change the box on mouseenter
box1.addEventListener("mouseenter",function(){
    rn=Math.floor(Math.random()*100);
    box1.innerHTML=`<h1>${rn}</h1>`;
    // box1.style.backgroundColor="aqua"
});
//This will change the box properties on mouseleave
box1.addEventListener("mouseleave",function(){
    box1.innerHTML=`<h1>Box 1</h1>`
    // box1.style.backgroundColor="black";
})
//Performing operation on box2
//This will change the box on mouseenter
let box2=document.getElementById('box2');
let toggle=0;
box2.addEventListener("mouseenter",function(){
    if(toggle==0){
        box2.style.backgroundColor="red";
        toggle=1;
    }else{
        box2.style.backgroundColor="green";
        toggle=0;
    }
})
//This will change the box properties on mouseleave
box2.addEventListener("mouseleave",function(){
    box2.style.backgroundColor="dimgray";
})
//Performing operation on box3
//This will change the box on mouseenter
let box3=document.getElementById("box3");
box3.addEventListener("mouseenter",function(){
    let ran1=Math.floor(Math.random()*256);
    let ran2=Math.floor(Math.random()*256);
    let ran3=Math.floor(Math.random()*256);
    box3.style.backgroundColor=`rgb(${ran1},${ran2},${ran3})`;
})
//This will change the box properties on mouseleave
box3.addEventListener("mouseleave",function(){
    box3.style.backgroundColor="dimgray";
})
//Performing operation on box4
//This will change the box on mouseenter
let box4=document.getElementById("box4");
box4.addEventListener("click",function(){
    let ran1=Math.floor(Math.random()*256);
    let ran2=Math.floor(Math.random()*256);
    let ran3=Math.floor(Math.random()*256);
    box1.style.backgroundColor=`rgb(${ran1},${ran3},${ran2})`;
    box2.style.backgroundColor=`rgb(${ran2},${ran1},${ran3})`;
    box3.style.backgroundColor=`rgb(${ran3},${ran2},${ran1})`;
})
//This will change the box properties on mouseleave
box4.addEventListener("mouseleave",function(){
    box1.style.backgroundColor="dimgray";
    box2.style.backgroundColor="dimgray";
    box3.style.backgroundColor="dimgray";
})

