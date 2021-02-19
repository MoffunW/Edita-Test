$(document).ready(function(){
  $('.promo__slider').slick({
      speed: 1200,
      infinite: true,
      
      // centerMode: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  dots: false,
                  arrows: true
              }
          }
      ]
  });

  $('.slider').slick({
    // 
    infinite: true,
    speed: 300,
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
      prevArrow: '<button type="button" class="slick-back"></button>',
      nextArrow: '<button type="button" class="slick-forward"></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
  });




  // When the user scrolls the page, execute stickyItems
window.onscroll = function() {stickyItems()};

// *** Sticky Items on scroll***

let header = document.getElementById("subheader");
let logo = document.getElementById("headerLogo");
let sidepannel = document.getElementById("sidepannel");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

    function stickyItems() {
    if (window.pageYOffset > sticky) { 
        header.classList.add("sticky");
        logo.classList.add('hidden');
        sidepannel.classList.remove('hidden');
    } else {
        header.classList.remove("sticky");
        logo.classList.remove('hidden');
        sidepannel.classList.add('hidden');
    };
    }

    // /* navToggle */
    // let nav = $("#nav");
    // let navToggle = $("#navToggle");

    // navToggle.on("click", function(event) {
    //     event.preventDefault();

    //     nav.toggleClass("show");


    // });
});






//     function validateForms(form){
//         $(form).validate({
//             rules: {
//                 name: {
//                     required: true,
//                     minlength: 2
//                 },
//                 phone: "required",
//                 email: {
//                     required: true,
//                     email: true
//                 }
//             },
//             messages: {
//                 name: {
//                     required: "Пожалуйста, введите свое имя",
//                     minlength: jQuery.validator.format("Введите {0} символа!")
//                   },
//                 phone: "Пожалуйста, введите свой номер телефона",
//                 email: {
//                   required: "Пожалуйста, введите свою почту",
//                   email: "Неправильно введен адрес почты"
//                 }
//             }
//         });
//     };

//     validateForms('#consultation-form');
//     validateForms('#consultation form');
//     validateForms('#order form');

//     $('input[name=phone]').mask("+7 (999) 999-99-99");
// });

