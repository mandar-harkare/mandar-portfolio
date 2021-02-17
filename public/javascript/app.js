import "./bootstrap.js";
import contactForm from "./contactForm";

contactForm();

// Display elements with delay

const hoveredElement = document.querySelectorAll(".project-thumbnail");

hoveredElement.forEach(function(element) {
  element.addEventListener("mouseenter", function() {
    setTimeout(() => {
      this.querySelector(".project-title").style.opacity = "1";

      setTimeout(() => {
        this.querySelector(".project-description").style.opacity = "1";
      }, 400);
    }, 300);
  });
});

hoveredElement.forEach(function(element) {
  element.addEventListener("mouseleave", function() {
    setTimeout(() => {
      this.querySelector(".project-title").style.opacity = "0";

      setTimeout(() => {
        this.querySelector(".project-description").style.opacity = "0";
      }, 10);
    }, 10);
  });
});

// Progress Bars Animation

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on("resize scroll", function() {
  $(".progress").each(function() {
    if ($(this).isInViewport()) {
      var bar = $(this).find(".progress-bar");
      bar.addClass("progress-animate");
      bar.css("width", bar.attr("aria-valuenow") + "%");
    }
  });
});

// Smooth scroll

// Get the height of the navbar
const navbarHeight = $(".navbar").outerHeight();

// Navbar change on scroll
if (!$("body").hasClass("profile")) {
  window.addEventListener("scroll", function() {
    if (window.scrollY > window.innerHeight / 1.1) {
      $("body").addClass("scrolled");
      $(".navbar").addClass("scrolledNav");
    } else {
      $("body").removeClass("scrolled");
      $(".navbar").removeClass("scrolledNav");
    }
  });
}

// Smooth Scrolling for links
const $root = $("html, body");

$('a[href^="#"]').click(function(e) {
  e.preventDefault();

  let href = $.attr(this, "href");
  const newPosition = $(href).offset().top - navbarHeight + 5;
  console.log(newPosition);

  if (history.pushState) {
    history.pushState(null, null, href);
  }

  $root.animate(
    {
      scrollTop: newPosition
    },
    1000,
    function() {
      if (!history.pushState) {
        location.hash = `/${href}`;
      }
    }
  );

  return false;
});

// Scroll spy
const scrollspy = document.querySelector("#nav-main");

if (scrollspy) {
  $("body").scrollspy({
    target: "#nav-main",
    offset: navbarHeight + 11
  });

  $('[data-spy="scroll"]').on("activate.bs.scrollspy", function() {
    $("nav-link").addClass("active");
  });
}
// var onScrollHandler = function() {
//   var newImageUrl = yourImageElement.src;
//   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   if (scrollTop > 100) {
//      newImageUrl = "img1.jpg"
//   }
//   if (scrollTop > 200) {
//      newImageUrl = "img2.jpg"
//   }
//   if (scrollTop > 300) {
//      newImageUrl = "img3.jpg"
//   }
//   yourImageElement.src = newImageUrl;
// };
// object.addEventListener ("scroll", onScrollHandler);

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  // $('.myImage').css({'transform' : 'rotate(360deg)'});
  // $('.myImage').animate(
  //   { deg: 0 }
  // );
}, false);
// $('body.*').on('click', function(){
//   $('.myImage').animate(
//     { deg: 360 },
//     {
//       duration: 1200,
//       step: function(now) {
//         $(this).css({ transform: 'rotate(' + now + 'deg)' });
//       }
//     }
//   );
// });
// $('.myImage').animate({
//   transform: 'rotate(360deg)',
//   left: '+=200px'
// })
// $('.myImage').animate({
//   transform: 'rotate(0deg)',
//   left: '-=200px'
// })


$(window).on("scroll touchmove", function() 
{
  var me = Math.floor(Math.random() * 12);
  me = me == 0 ? 1 : me;
  // console.log($(document).scrollTop());
  // console.log('mod=== ', Math.trunc($(document).scrollTop() % 100));
	// if (Math.trunc($(document).scrollTop() % 100) == 0) {
  //   $(".myImage").attr("src","images/me"+me+".png").stop(true,true).hide().fadeIn();
  // }
	if ($(document).scrollTop() >= $("#home").position().top && $(document).scrollTop() < $("#about").position().top  ) {
    $(".myImage").attr("src","images/me"+me+".png").stop(true,true).hide().fadeIn();
  };
	if ($(document).scrollTop() >= $("#about").position().top && $(document).scrollTop() < $("#skills").position().top) {
    $(".myImage").attr("src","images/me"+me+".png").stop(true,true).hide().fadeIn();
  };
  if ($(document).scrollTop() >= $("#skills").position().top && $(document).scrollTop() < $("#projects").position().top ) {
    $(".myImage").attr("src","images/me"+me+".png").stop(true,true).hide().fadeIn();
  };
  if ($(document).scrollTop() >= $("#contact").position().top) {
    $(".myImage").attr("src","images/me"+me+".png").stop(true,true).hide().fadeIn();
  };
  
});