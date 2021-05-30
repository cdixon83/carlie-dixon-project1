const menu = document.querySelector(".menu");
const ham = document.querySelector(".ham");
const hamNav = document.querySelector(".ham-nav")
const hamClose = document.querySelector(".ham-close")


const toggleMenu = function () {

    if (menu.classList.contains("menu-hide")) {
        menu.classList.remove("menu-hide");
        menu.classList.add("menu-show");
        hamNav.classList.remove("show");
        hamNav.classList.add("hide");
        hamClose.classList.remove("close-hidden");
        hamClose.classList.add("close-show");
    } else {
        menu.classList.add("menu-hide");
        menu.classList.remove("menu-show");
        hamNav.classList.remove("hide");
        hamNav.classList.add("show");
        hamClose.classList.remove("close-show");
        hamClose.classList.add("close-hidden");
    }
}

ham.addEventListener("click", toggleMenu);