// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {

    const currentScrollPos = window.pageYOffset;

    if (window.pageYOffset == 0) {
       document.getElementById("navbar").classList.remove("scroll-up")
    }
    else if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").classList.remove("scroll-down");
        document.getElementById("navbar").classList.add("scroll-up");
    }
    else {
        document.getElementById("navbar").classList.remove("scroll-up");
        document.getElementById("navbar").classList.add("scroll-down");
    }

    prevScrollPos = currentScrollPos;
})


let projectsSliderContainer = document.querySelector(".projects-slider-container");
let distressedButton = document.getElementById("distressed-button");
let distressed2Button = document.getElementById("distressed2-button");
let fafButton = document.getElementById("floor-after-floor-button");

distressedButton.addEventListener("click", (e) => {
    window.scrollTo(0, prevScrollPos);

    projectsSliderContainer.classList.add("distressed-selected");
    projectsSliderContainer.classList.remove("distressed2-selected");
    projectsSliderContainer.classList.remove("floor-after-floor-selected");

    distressedButton.classList.add("selected");
    distressed2Button.classList.remove("selected");
    fafButton.classList.remove("selected");
})

distressed2Button.addEventListener("click", (e) => {
    window.scrollTo(0, prevScrollPos);
    
    projectsSliderContainer.classList.add("distressed2-selected");
    projectsSliderContainer.classList.remove("distressed-selected");
    projectsSliderContainer.classList.remove("floor-after-floor-selected");

    distressed2Button.classList.add("selected");
    distressedButton.classList.remove("selected");
    fafButton.classList.remove("selected");

})

fafButton.addEventListener("click", (e) => {
    window.scrollTo(0, prevScrollPos);

    projectsSliderContainer.classList.add("floor-after-floor-selected");
    projectsSliderContainer.classList.remove("distressed-selected");
    projectsSliderContainer.classList.remove("distressed2-selected");

    fafButton.classList.add("selected");
    distressedButton.classList.remove("selected");
    distressed2Button.classList.remove("selected");
})