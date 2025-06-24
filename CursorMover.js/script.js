let x=document.querySelector("html");
let curs=document.getElementById("coursor")
x.addEventListener("mousemove",function(pos){
    console.log(pos.x,pos.y);
    curs.style.left=pos.x+"px";
    curs.style.top=pos.y+"px";
})