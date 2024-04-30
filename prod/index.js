var ves = document.getElementById('identify');
var threemon = document.getElementById('three-month');
var sixmon = document.getElementById('six-month');
var twelvemon = document.getElementById('twelve-month');
var eightmon = document.getElementById('eighteen-month');
var cash = document.getElementById('cash');

threemon.addEventListener("click", threecontent);
function threecontent(){
    ves.innerHTML = `(+0)`;
}

sixmon.addEventListener("click", sixcontent);
function sixcontent(){
    ves.innerHTML = `(+0)`;
}

cash.addEventListener("click", cashcontent);
function cashcontent(){
    ves.innerHTML = `(+0)`;
}
var price = 120000;
twelvemon.addEventListener("click" , twelcontent);
function twelcontent(){
    ves.innerHTML = `(${price*(15/100)})`;
}

eightmon.addEventListener("click" ,eighcontent);
function eighcontent(){
    ves.innerHTML = `(${price*(20/100)})`;
}
