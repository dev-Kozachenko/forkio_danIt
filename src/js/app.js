const burgerIcon = document.querySelector(".burger-icon");
const bugerIconLines= document.querySelectorAll(".burger-icon__line");
const menu = document.querySelector(".header-navbar__list");

burgerIcon.addEventListener("click", (event) =>{
    bugerIconLines.forEach((element) => {
        element.classList.toggle("burger-icon__line--active");

    })
menu.classList.toggle("header-navbar__list--active");
})

