var maininput = document.getElementById("maininput");
var addBut = document.getElementById("Add");
var DeletAllBut = document.getElementById("deletAll");
var TasksList = document.getElementById("tasksList");
var DeletBut = document.getElementById("Delet");
var EditBut = document.getElementById("Edit");
var textp = document.getElementById("text");
var inputcontent = [];
var mode = 'create';

var j;
addBut.addEventListener("click" , addfunction);
function addfunction(){
    content = {
        input : maininput.value
    }
    if(maininput.value == "")
    {
     textp.style.cssText = 'display:block';
        return false;
    }

  if(mode == 'create')
  {
    inputcontent.push(content);
  }
  else{
  inputcontent[j] = content;
  addBut.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  addBut.style.background = 'blue';
  DeletAllBut.style.cssText = 'display:block';
  mode = 'create';

  }
    
    console.log(inputcontent);
    maininput.focus();
    display();
    
    clear();
}


function display(){
    var ListBox = "";
    for(var i=0;i<inputcontent.length;i++)
    {
      ListBox+=`<li  class="main">${inputcontent[i].input} 
       <button id="Delet" onclick="DeletTask(${i})"><i class="fa-solid fa-trash"></i></button>
      <button  id="Edit" onclick = EditTask(${i})><i class="fa-solid fa-pen-to-square"></i></button> 
    </li>
      `
    }
    TasksList.innerHTML = ListBox;
}
function clear(){
    maininput.value = " ";
}
DeletAllBut.addEventListener("click" , DeletAll);
function DeletAll(){
  let DeletAlert = confirm("Are You Sure");
  if(DeletAlert == 1)
  {
    inputcontent.splice(0);
  }
  else {
      return false;
  }
    // inputcontent.splice(0);
    display();
}

function DeletTask(i)
{
    inputcontent.splice(i,1);
    display();
}
function EditTask(i)
{
    maininput.value = inputcontent[i].input;
    addBut.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    addBut.style.backgroundColor = 'green';
    DeletAllBut.style.cssText = 'display:none';
mode ='Edit';
j=i;

}
