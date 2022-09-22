const h1 = document.getElementById("header");
h1.style.color = "blue"

const myInput = document.getElementById("input");
const button = document.getElementById("btn");
button.style.color = "white";
button.style.border = "none";
button.style.fontSize = "1.rem";
myInput.style.borderRadius = "10px";
// document.get elementler bir tagName
const list = document.getElementsByTagName("li");
console.log(list);
list[2].style.color = "red";
list.item(3).style.color = "blue"; //item ile index seçiliyor ama normal parantez ile
list.item(4).style.color = "black";
list.item(0).textContent = "react"; // yazıyı  sil istediğini  text.Content yaz
list.item(1).textContent = "react-vue-anguler";
list[4].innerText = "Django-Flask"; 


