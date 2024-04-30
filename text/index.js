var redbutton = document.getElementById('red');
var bluebutton = document.getElementById('blue');
var greenbutton = document.getElementById('green');
var alignleft = document.getElementById('alignleft');
var aligncenter = document.getElementById('aligncenter');
var alignright = document.getElementById('alignright');
var boldbutton = document.getElementById('bold');
var italicbutton = document.getElementById('italic');
var undrlinebutton = document.getElementById('underline');
var textArea = document.getElementById("textArea");
var maximize =document.getElementById('maximize');
var minimize = document.getElementById('minimize');
var textEditor_content = document.getElementById('textEditor_content');
maximize.addEventListener("click", maximumHeight);
function maximumHeight()
{
textEditor_content.style.cssText ='height:100vh; width:100%';
minimize.style.cssText = 'opacity:1; visibility:visible';
maximize.style.cssText = 'opacity:0; visibility:hidden';
}

minimize.addEventListener("click", minimumHeight);
function  minimumHeight()
{
textEditor_content.style.cssText ='height:550px; width:80%';
minimize.style.cssText = 'opacity:0; visibility:hidden';
maximize.style.cssText = 'opacity:1; visibility: visible';
}




redbutton.addEventListener("click",redcolor)
function redcolor()
{
   textArea.classList.toggle("red");
   textArea.classList.remove("blue");
   textArea.classList.remove("green");
  
}
bluebutton.addEventListener("click",bluecolor);
function bluecolor(){
    textArea.classList.toggle("blue");
    textArea.classList.remove("red");
    textArea.classList.remove("green");
}
greenbutton.addEventListener("click",greencolor);
function greencolor(){
    textArea.classList.toggle("green");
    textArea.classList.remove("red");
    textArea.classList.remove("blue");
}

alignleft.addEventListener("click",alignTextleft);
function alignTextleft(){
    textArea.style.cssText='text-align:left';
}

aligncenter.addEventListener("click",alignTextcenter);
function alignTextcenter(){
    textArea.style.cssText =' text-align: center';
    // console.log("hello")
}
alignright.addEventListener("click", alignTextright);
function alignTextright(){
    textArea.style.cssText = 'text-align:right';
}
boldbutton.addEventListener("click",boldText);
function boldText(){
    textArea.classList.toggle('bold');
    // textArea.classList.remove('italic');
    // textArea.classList.remove('underline');


}

italicbutton.addEventListener("click", italicText);
function italicText(){
    textArea.classList.toggle('italic');
    // textArea.classList.remove('bold');
    // textArea.classList.remove('underline');
}

undrlinebutton.addEventListener("click", underlineText);
function underlineText(){
    textArea.classList.toggle('underline');
    // textArea.classList.remove('italic');
    // textArea.classList.remove('bold');
}