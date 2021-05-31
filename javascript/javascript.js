// hamburger nav function
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


// to flip through the images in mobile view
let n = 1

const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");

const next = document.querySelector('.next')
const back = document.querySelector('.back')

const nextImage = function () {
    if (n === 1) {
        image1.classList.remove("showImage");
        image1.classList.add("hideImage");
        image2.classList.add("showImage");
        n += 1;
    } else if (n === 2) {
        image2.classList.remove("showImage");
        image2.classList.add("hideImage");
        image3.classList.add("showImage");
        n += 1;
    } else if (n === 3){
        image3.classList.remove("showImage");
        image3.classList.add("hideImage");
        image1.classList.add("showImage");
        n = 1;
    }
}

next.addEventListener("click", nextImage);

const backImage = function () {
    if (n === 3) {
        image3.classList.remove("showImage");
        image3.classList.add("hideImage");
        image2.classList.add("showImage");
        n -= 1;
    } else if (n === 2) {
        image2.classList.remove("showImage");
        image2.classList.add("hideImage");
        image1.classList.add("showImage");
        n -= 1;
    } else if (n === 1){
        image1.classList.remove("showImage");
        image1.classList.add("hideImage");
        image3.classList.add("showImage");
        n = 3;
    }
}

back.addEventListener("click", backImage);
