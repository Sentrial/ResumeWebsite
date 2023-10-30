
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


const track = document.querySelector(".slider__track");
const slides = Array.from(track.children);

const nextArrow = document.querySelector(".slider__button--right");
const prevArrow = document.querySelector(".slider__button--left");

const sliderNav = document.querySelector(".slider__nav");
const navButtons = Array.from(sliderNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const backgroundImage = document.querySelector(".bg-image");
const backgroundImageBlur = document.querySelector(".bg-blur-image")

// Arrange slides
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const setBackgroundImageWidth = () => {
    backgroundImage.style.width = slides.length * 100 + "%";
    backgroundImageBlur.style.width = slides.length * 100 + "%";
}
setBackgroundImageWidth();

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide")
};

const updateNavButtons = (currentButton, targetButton) => {
    currentButton.classList.remove("current-slide");
    targetButton.classList.add("current-slide");
};

const moveBackground = (slideIndex) => {
    backgroundImage.style.transform = "translateX(-" + (slideIndex / slides.length) * 100 + "%)"
    backgroundImageBlur.style.transform = "translateX(-" + (slideIndex / slides.length) * 100 + "%)"
    backgroundImageBlur.style.opacity = "1";
    setTimeout(() => {
        backgroundImageBlur.style.opacity = "0";
    }, 500);
};

const updateSliderArrows = (targetIndex) => {
    if (targetIndex === 0) {
        prevArrow.classList.add("is-hidden");
        nextArrow.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
        prevArrow.classList.remove("is-hidden");
        nextArrow.classList.add("is-hidden");
    } else {
        prevArrow.classList.remove("is-hidden");
        nextArrow.classList.remove("is-hidden");
    }
}

// Left button clicked - move slides left
prevArrow.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentButton = sliderNav.querySelector(".current-slide");
    const prevButton = currentButton.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateNavButtons(currentButton, prevButton);
    updateSliderArrows(prevIndex);
    moveBackground(prevIndex);
});


// Right button clicked - move slides right
nextArrow.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentButton = sliderNav.querySelector(".current-slide");
    const nextButton = currentButton.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateNavButtons(currentButton, nextButton);
    updateSliderArrows(nextIndex);
    moveBackground(nextIndex);
});


sliderNav.addEventListener("click", e => {
    const targetButton = e.target.closest("button");

    if (!targetButton)
        return;

    const currentSlide = track.querySelector(".current-slide");
    const currentButton = sliderNav.querySelector(".current-slide");
    const targetIndex = navButtons.findIndex(button => button === targetButton)
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateNavButtons(currentButton, targetButton);
    updateSliderArrows(targetIndex);
    moveBackground(targetIndex);
});