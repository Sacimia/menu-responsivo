const mobileMenu = document.querySelector(".mobile-menu");
mobileMenu.addEventListener("click", click)
const navList = document.querySelector(".nav-list" )
const active = "active"
console.log(navList.classList.contains("nav-list"))
function click(){            
    navList.classList.toggle(active)
}