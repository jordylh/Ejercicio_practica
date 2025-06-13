var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

var swiper2 = new Swiper(".mySwiper2",{
    slidesPerView: "auto",
    centeredSlides:true,
    spaceBetween:400,  
    loop:true,
    pagination: {
        el: ".swiper-pagination",
    },
});
