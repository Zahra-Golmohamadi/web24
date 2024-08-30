
let instaswiper = new Swiper(".instaswiper",{
    slidesPerView: 2,
    loopedSlides: 1,
    autoplay: !0,
    watchSlidesVisibility: !0,
    speed: 1500,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    }
});













const swiper = new Swiper('.swiper-container', {
    effect: "coverflow",
    centeredSlides: !0,
    slidesPerView: 1,
    loop: !0,
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 0,
        modifier: 1,
        slideShadows: !0
    },
    breakpoints: {
        480: {
            slidesPerView: 3,
            spaceBetween: 0,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 50,
                modifier: 10,
                slideShadows: !0
            }
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
            coverflowEffect: {
                rotate: 0,
                stretch: 1,
                depth: 30,
                modifier: 10,
                slideShadows: !0
            }
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 0,
                stretch: 4,
                depth: 25,
                modifier: 10,
                slideShadows: !0
            }
        }
    }
});
