window.onload = function()
{filter("all")
}
function storeval(ele){
  c=ele.value;

}
    function toggleNav() {
    document.body.classList.toggle("nav-open");
  
  }
function SaveVariable(k){
  localStorage.setItem("url", k.value);
}

function otvori()
{
  window.open("../Loading/loading.html");
}
function otvoriPopup(){
  document.getElementById("popup1").classList.toggle("active");
}
function prikazi(){
  if(document.getElementById("ljeto").checked && document.getElementById("plaza").checked)
  {
    filter("summerp");
    toggleNav();
    otvoriPopup();
   

  }
  if(document.getElementById("ljeto").checked && document.getElementById("neplaza").checked)
  {
    filter("summern");
    toggleNav();
    otvoriPopup();
   

  }
  if(document.getElementById("zima").checked && document.getElementById("plaza").checked)
  {
    filter("winterp");
    toggleNav();
    otvoriPopup();
   

  }if(document.getElementById("zima").checked && document.getElementById("neplaza").checked)
  {
    filter("wintern");
    toggleNav();
    otvoriPopup();
   

  }
}
  



function filter(c) {
  
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    SakrijElemente(x[i], "show");
    if (x[i].className.indexOf(c) > -1) PokaziElemente(x[i], "show");
  }
}


function PokaziElemente(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


function SakrijElemente(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
function ponuda(){
  window.open("../Main/ponuda.html");
}