const menuBtn = document.querySelector(".menu__btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    
    if(nav.classList.contains("open")) {
        menuBtn.setAttribute("src","./images/icon-hamburger.svg");
    }else {
        menuBtn.setAttribute("src","./images/icon-close.svg");

    }

    nav.classList.toggle("open");
});
