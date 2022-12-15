window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

const menu = document.querySelector(".nav_menu");
const menuBtn =  document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex"
    closebtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})

const closeNav = () =>{
    menu.style.display = "none"
    closebtn.style.display = "none"
    menuBtn.style.display = "inline-block"
}

closebtn.addEventListener('click', closeNav)