var menu=document.getElementById("menu")
var action=document.getElementById("action")
menu.addEventListener("click",handel)
function handel(){
menu.classList.toggle("is-active")
action.classList.toggle("is-active")
}