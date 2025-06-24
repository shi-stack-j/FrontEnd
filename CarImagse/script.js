let x=document.querySelector(".main");
let s="";
x.addEventListener("mouseenter",setTimeout(function(){
    for(let i=0;i<60;i++){
        let ran=Math.floor(Math.random()*6);
        if(ran==0)ran=1;
        s+=`<div id="c1">
                <img src="p${ran}.jpeg">
            </div>`
    }
    x.innerHTML=s;
}),5*1000);
