var Namepro = document.getElementById("proName");
var pricepro = document.getElementById("proPrice");
var category_pro = document.getElementById("proCat");
var description_pro = document.getElementById("proDes");
var count_pro = document.getElementById("proCount");
var subBut = document.getElementById("Submit");
var DeletAllBut = document.getElementById("DeletAll");
var table = document.getElementById("TableOrder");
 var searchh = document.getElementById("search");
DeletAllBut.style.display = "none";
var array;07

if(localStorage.Product ==null )
{
    array=[];

}
else
{
    array = JSON.parse(localStorage.Product);
    displayOrder();
}
var mode = "create";
var vvv;

subBut.addEventListener("click", () => {
  console.log("bvbkj");
  if(Namepro.value == "")
  {
      alert("Please Enter Product Name");
      Namepro.focus();
      return false;
  }

  if(pricepro.value == "")
  {
      alert("Please Enter Product Price");
      pricepro.focus();
      return false;
  }
  
  content = {
    Name: Namepro.value,
    Price: pricepro.value,
    category: category_pro.value,
    description: description_pro.value,
    count: count_pro.value,
  };
  if(mode == "create")
  {
    array.push(content);
  }
  else{
      array[vvv]=content;
      mode= "create";
      subBut.innerHTML ="Submit";

  }
  

  // if(count_pro.value>1)
  // {
  //  for(var i=0;i<count_pro.value;i++)
  //  {

  //  }

  // }
  // mymap = new Map([
  // ["Name",Namepro.value],
  // ["Price" ,pricepro.value],
  // ["Category",category_pro.value],
  // ["Description" , description_pro.value],
  // ["Count" , count_pro.value]

  // ])

  localStorage.setItem("Product", JSON.stringify(array) )// key any name  and localstorage does not store array we 
  //should use stringify to store it 
  displayOrder();
  Namepro.focus();
  clear();
});

function displayOrder() {
  var order = "";
  for (var i = 0; i < array.length; i++) {
    order += `  
       <tr>
     <th  class= "w-14 h-10  text-black border-r-2 border-white  p-x-2 pt-4 md:w-14"> ${
       i + 1
     }</th>
       <th class = "w-36 h-10  text-black border-r-2  border-white  p-x-4 pt-4 md:w-20">${
         array[i].Name
       }</th>
       <th class = "w-36 h-10  text-black border-r-2  border-white  p-x-4 pt-4 md:w-20">${
         array[i].Price
       }</th>
       <th class = "w-40 h-10  text-black border-r-2  border-white p-x-4 pt-4 md:w-20">${
         array[i].category
       }</th>
       <th class = "w-20 h-10 text-black border-r-2  border-white p-x-4 pt-4 md:w-10">${
         array[i].description
       } </th>
       <th class = "w-20 h-10 text-black border-r-2  border-white p-x-4 pt-4 md:w-10">${
         array[i].count
       } </th>
       <th class = "w-20 h-10  text-black border-r-2  border-white p-x-4 pt-4 md:w-14" onclick ="EditProduct(${i})"  ><button class="w-20 h-10 bg-blue-500 text-white p-2 rounded-lg">Edit</button></th>
       <th class = "w-20 h-10  text-black border-r-2  border-white p-x-4 pt-4 md:w-14" onclick = "DeletProduct(${i})"> <button class="w-20 h-10 bg-red-500 text-white p-2 rounded-lg">Delete</button></th>
   </tr>
       
       `;
  }
  table.innerHTML = order;
  if (array.length == 0) {
    DeletAllBut.style.cssText = "display:none";
  } else {
    DeletAllBut.style.cssText = "display:inline";
  }
}

function clear() {
  Namepro.value = "";
  pricepro.value = "";
  category_pro.value = "";
  description_pro.value = "";
  count_pro.value = "";
}
DeletAllBut.addEventListener("click", DeletAll);
function DeletAll() {
  array.splice(0);
  localStorage.setItem("Product", JSON.stringify(array) )
  displayOrder();
}

function DeletProduct(i) {
  if (array[i].count > 1) {
    array[i].count--;
  } else {
    array.splice(i, 1);
  }
  
  localStorage.setItem("Product", JSON.stringify(array) )
  displayOrder();
}
function EditProduct(i) {
  Namepro.value = array[i].Name;
  pricepro.value = array[i].Price;
  category_pro.value = array[i].category;
  description_pro.value = array[i].description;
  count_pro.value = array[i].count;
  DeletAllBut.style.cssText = "display:none";
 mode = "edit";
  subBut.innerHTML = "Edit";
  vvv  = i;
}
//search method

// searchh.addEventListener('keyup',()=>{
//  const filter = searchh.value.toLowerCase();
//  const tableItem = document.getElementById('table_item');
//   tableItem.forEach(item => {
//     let text= item.textContent;
//     if(text.toLowerCase().includes(filter.toLowerCase())){
//       item.style.display= '';

//     }
//     else 
//     {
//       item.style.display ='none';
//     }
    
//   });

// });

//search method

function search(bb){
  var order1 = "";
  for (var i = 0; i < array.length; i++) {
    if(array[i].Name.toLowerCase().includes(bb.toLowerCase().trim())){//to chick for master or space
      order1 += `  
      <tr>
    <th  class= "w-14 h-10  text-black border-r-2 border-white  p-x-2 pt-4 md:w-14"> ${
      i + 1
    }</th>
      <th class = "w-36 h-10  text-black border-r-2  border-white  p-x-4 pt-4 md:w-20">${
        array[i].Name
      }</th>
      <th class = "w-36 h-10  text-black border-r-2  border-white  p-x-4 pt-4 md:w-20">${
        array[i].Price
      }</th>
      <th class = "w-40 h-10  text-black border-r-2  border-white p-x-4 pt-4 md:w-20">${
        array[i].category
      }</th>
      <th class = "w-20 h-10 text-black border-r-2  border-white p-x-4 pt-4 md:w-10">${
        array[i].description
      } </th>
      <th class = "w-20 h-10 text-black border-r-2  border-white p-x-4 pt-4 md:w-10">${
        array[i].count
      } </th>
      <th class = "w-20 h-10  text-black border-r-2  border-white p-x-4 pt-4 md:w-14" onclick ="EditProduct(${i})"  ><button class="w-20 h-10 bg-blue-500 text-white p-2 rounded-lg">Edit</button></th>
      <th class = "w-20 h-10  text-black border-r-2  border-white p-x-4 pt-4 md:w-14" onclick = "DeletProduct(${i})"> <button class="w-20 h-10 bg-red-500 text-white p-2 rounded-lg">Delete</button></th>
  </tr>
      
      `;
    }
   
  }

  table.innerHTML = order1;
}

