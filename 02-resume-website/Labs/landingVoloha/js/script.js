/*$(function() {
    let header = $('.header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header');
      } else {
       header.removeClass('header');
      }
    });
   });*/

const burger = document.querySelector(".burger");
const sideMenu = document.querySelector(".side-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    sideMenu.classList.toggle("active");
});

sideMenu.querySelector(".navigation").addEventListener("click", (e) => {
    console.log(e);
    if (e.target.nodeName === "A") {
        burger.classList.remove("active");
        sideMenu.classList.remove("active");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1150) {
        burger.classList.remove("active");
        sideMenu.classList.remove("active");
    }
});
