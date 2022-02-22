$(function () {
  "use strict";

  //===== Prealoder

  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  $("#search").on("click", function () {
    $(".search-box").fadeIn(600);
  });
  $(".closebtn").on("click", function () {
    $(".search-box").fadeOut(600);
  });
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".navigation").removeClass("sticky");
    } else {
      $(".navigation").addClass("sticky");
    }
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

  if (subMenu.length) {
    subMenu
      .parent("li")
      .children("a")
      .append(function () {
        return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
      });

    var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

    subMenuToggler.on("click", function () {
      $(this).parent().parent().children(".sub-menu").slideToggle();
      return false;
    });
  }
  function mainSlider() {
    var BasicSlider = $(".slider-active");

    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".carousel-slide:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });

    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.carousel-slide[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );

    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: false,
      dots: false,
      fade: true,
      arrows: true,
      prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  //====== Magnific Popup

  $(".video-embd").magnificPopup({
    type: "iframe",
  });

  $(".gallery-slied").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //===== Back to top
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });
});
// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//     { pageLanguage: "en" },
//     "google_translate_element"
//   );
// }
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "hi,en",
      autoDisplay: false,
    },
    "google_translate_element"
  );
}

// document.onkeypress = function(e){
//   e=e||window.event;
//   if(e.keyCode===13){
//     document.documentElement.classList.toggle('dark-mode');
//     document.querySelectorAll('.inverted').forEach((result)=>{
//       result.classList.toggle('invert');
//     })
//   }

// }
function darkFunction() {
  document.documentElement.classList.toggle("dark-mode");
  document.querySelectorAll(".inverted").forEach((result) => {
    result.classList.toggle("invert");
  });
}
$(function(){
  $('.inc').on('click',function(){
    var currentSize = $("p").css("font-size");
    var currentSizeNum = parseFloat(currentSize);
    var newSize = currentSizeNum*1.1;
    $("p").css("font-size",newSize);
  });
  $('.dec').on('click',function(){
    var currentSize = $("p").css("font-size");
    var currentSizeNum = parseFloat(currentSize);
    var newSize = currentSizeNum*0.9;
    $("p").css("font-size",newSize);
  });
  var currentSize = $("p").css("font-size");
  $('.reset').on("click",function(){
    $("p").css("font-size",currentSize);
  });
});

// document.documentElement.classList.toggle('dark-mode');
//     document.querySelectorAll('.inverted').forEach((result)=>{
//       result.classList.toggle('invert')
$(document).ready(function(){
  $('.gallerys').magnificPopup({
    type:'image',
    delegate: 'a',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled:true,
      navigateByImgClick: true,
      preload: [0,1],
    },
    image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Vibhanshu Garg & Prateek Upadhyay MNIT</small>';
			}
		}
  });
});

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});
$(function () {
  var messages = [],
      index = 0;

  messages.push('Malaviya National Institute Of Technology Jaipur');
  messages.push('मालवीय राष्ट्रीय प्रौद्योगिकी संस्थान जयपुर');
  

  function cycle() {
      $('#heading-id').html(messages[index]);
      index++;

      if (index === messages.length) {
          index = 0;
      }

      setTimeout(cycle, 2000);
  }

  cycle();
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    dots: true,
    margin: 10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
});

$('.counters').each(function () {
  var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
  $(this).prop('Counter', 0).animate({
     Counter: $(this).text()
  }, {
     duration: 5000,
     step: function (func) {
        $(this).text(parseFloat(func).toFixed(size));
     }
  });
});

