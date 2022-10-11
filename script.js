let menu = document.querySelector('menu-btn');
let navbar= document.querySelector('.header .navbar');

menu.onlick = () =>{
    menu.classlist.toggle('fa-times');
    navbar.classlist.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active');
};

var swiper = new swiper(".home-slider", {
     loop: true,
    navigation: {
        nextE1: ".swiper-button-next",
        PrevE1: ".swipe_button-prev",
    },
});

var swiper = new swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 20,
    autoHeight:true,
    grabcursor:true,
    640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});
