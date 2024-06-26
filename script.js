// Swiper 1
var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Swiper 2
var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

// Tabs Input
let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        let id = input.getAttribute('aria-valuemax');
        let thisSwiper = document.getElementById('swiper' + id).swiper;
        thisSwiper.update();
    });
});
