// Fade-in images and sections on scroll
const fadeElements = document.querySelectorAll("img, section");

const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(el => {  
        const elTop = el.getBoundingClientRect().top;  

        if (elTop < triggerBottom) {  
            el.style.opacity = 1;  
            el.style.transform = "translateY(0)";  
            el.style.transition = "all 1s ease-out";  
        } else {  
            el.style.opacity = 0;  
            el.style.transform = "translateY(20px)";  
        }  
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

// Smooth hover effect for buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.transition = "all 0.3s ease";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

// =======================
// Carousel / Highlights
// =======================
const carouselTrack = document.querySelector(".carousel-track");
const carouselImages = document.querySelectorAll(".carousel-track img");
let currentIndex = 0;
const totalImages = carouselImages.length;

// Auto-slide
const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % totalImages;
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
};

setInterval(showNextSlide, 3000);

// Swipe support for mobile
let startX = 0;
carouselTrack.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

carouselTrack.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) {  
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    } else if (startX - endX > 50) {  
        currentIndex = (currentIndex + 1) % totalImages;
    }
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
});