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






/*document.getElementById("distressed-button").onclick = function () {
    console.log("distressed button clicked");

    document.getElementById("distressed-button").classList.add("selected");
    document.getElementById("distressed2-button").classList.remove("selected");
    document.getElementById("floor-after-floor-button").classList.remove("selected");

    document.getElementById("distressed-content").classList.remove("hide-project");
    document.getElementById("distressed-content").classList.remove("idle-project");
    document.getElementById("distressed2-content").classList.add("hide-project");
    document.getElementById("floor-after-floor-content").classList.add("hide-project");

    document.getElementById("distressed-content").classList.add("show-project");
    document.getElementById("distressed2-content").classList.remove("show-project");
    document.getElementById("floor-after-floor-content").classList.remove("show-project");

    setTimeout(setProjectContent, 500, "distressed2-content", "floor-after-floor-content");
}

document.getElementById("distressed2-button").onclick = function () {
    console.log("distressed2 button clicked");

    document.getElementById("distressed2-button").classList.add("selected");
    document.getElementById("distressed-button").classList.remove("selected");
    document.getElementById("floor-after-floor-button").classList.remove("selected");

    document.getElementById("distressed2-content").classList.remove("hide-project");
    document.getElementById("distressed2-content").classList.remove("idle-project");
    document.getElementById("distressed-content").classList.add("hide-project");
    document.getElementById("floor-after-floor-content").classList.add("hide-project");

    document.getElementById("distressed2-content").classList.add("show-project");
    document.getElementById("distressed-content").classList.remove("show-project");
    document.getElementById("floor-after-floor-content").classList.remove("show-project");

    setTimeout(setProjectContent, 500, "distressed-content", "floor-after-floor-content");
}

document.getElementById("floor-after-floor-button").onclick = function () {
    console.log("Floor After Floor button clicked");

    document.getElementById("floor-after-floor-button").classList.add("selected");
    document.getElementById("distressed-button").classList.remove("selected");
    document.getElementById("distressed2-button").classList.remove("selected");

    document.getElementById("floor-after-floor-content").classList.remove("hide-project");
    document.getElementById("floor-after-floor-content").classList.remove("idle-project");
    document.getElementById("distressed-content").classList.add("hide-project");
    document.getElementById("distressed2-content").classList.add("hide-project");

    document.getElementById("floor-after-floor-content").classList.add("show-project");
    document.getElementById("distressed-content").classList.remove("show-project");
    document.getElementById("distressed2-content").classList.remove("show-project");

    setTimeout(setProjectContent, 500, "distressed-content", "distressed2-content");
}

function setProjectContent(name1, name2) {
    document.getElementById(name1).classList.remove("hide-project");
    document.getElementById(name2).classList.remove("hide-project");

    document.getElementById(name1).classList.add("idle-project");
    document.getElementById(name2).classList.add("idle-project");
}*/