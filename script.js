// Navbar

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle("change");
})

// Section 2

const video = document.querySelector(".video");
const btn = document.querySelector(".buttons i");
const bar = document.querySelector(".video-bar");

const playPause = () => {

    if (video.paused) {
        video.play();
        btn.className = "far fa-pause-circle";
        video.style.opacity = ".7"
    } else {
        video.pause();
        btn.className = "far fa-play-circle";
        video.style.opacity = ".3"
    }
}

btn.addEventListener("click", () => {
    playPause();
})

video.addEventListener("timeupdate", () => {

    const barWidth = video.currentTime / video.duration;
    bar.style.width = `${barWidth * 100}%`

    if (video.ended) {
        btn.className = "far fa-play-circle";
        video.style.opacity = ".3"
    }
})

// Section 3

const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});