const hamburguesa = document.getElementById("hamburger")
const menu = document.getElementById("nav-menu")
const nav = document.querySelector(".nav")

hamburguesa.addEventListener("click", ()=>{
    menu.classList.toggle('active')
    nav.classList.toggle('menu-open')
})