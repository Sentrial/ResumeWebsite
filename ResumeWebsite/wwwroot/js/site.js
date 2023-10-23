// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {

    console.log("called");

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