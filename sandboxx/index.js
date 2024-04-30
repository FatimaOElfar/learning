// const axios = require("axios");


// axios.get('https://google.com').then((res)=>console.log(res.data));
let Ball =document.getElementById('ball');
let Back = document.getElementById('back-ground');
// let Input = document.querySelector('input');
let Base = document.getElementById('base');
let Prem = document.getElementById('prem');
let Crop = document.getElementById('crop');
let Base_Text =document.getElementById('base-text');
let prem_Text =document.getElementById('prem-text');
let crop_Text =document.getElementById('crop-text');

Back.onclick=()=>{
    // Back.style.cssText='background:blue';
    Back.classList.toggle('blue');
    Ball.classList.toggle('Balll');
   
  if(Back.classList.contains('month')){
      Back.classList.remove('month');
      Back.classList.add('year');
      Base.innerHTML='99';
      Prem.innerHTML='199';
      Crop.innerHTML='499';
      Base_Text.innerHTML='Year';
      prem_Text.innerHTML='Year';
      crop_Text.innerHTML='Year';
  }
  else if(Back.classList.contains('year')){
      Back.classList.remove('year');
      Back.classList.add('month');
      Base.innerHTML='9';
      Prem.innerHTML='19';
      Crop.innerHTML='49';
      Base_Text.innerHTML='Month';
      prem_Text.innerHTML='Month';
      crop_Text.innerHTML='Month';

  }
}



