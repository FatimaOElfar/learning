const x=document.getElementById("bar");
const y=document.getElementById("form");
x.onclick=function(){
    y.classlist().toggle("hide");
 }