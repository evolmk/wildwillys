
///////////////////////////////////
// jQuery Scripts
///////////////////////////////////

$(function () {

  var body = $("body");
  var scrollOffset = 0;
  var formload = 0;
  var formFocus = 0;
  //console.log('scroll pos: ', $(window).scrollTop());

  // Back to Top Button
  var scrollShowBackToTop = 400;
  var scrollTriggerNavbar = 3;

  // Onload, check scroll position
  if($(window).scrollTop() > scrollTriggerNavbar) {
    body.addClass('is-scrolled');
  }

  // Onload - check if should scroll to section
  if(window.location.hash) {
    //console.log('has hash:', window.location.hash);//get header
    var $navbarHeader = $('.navbar-header');
    $('html, body').animate({ scrollTop: $(window.location.hash).offset().top - ($navbarHeader.height() + scrollOffset) + 'px' }, 400, 'easeOutQuad');
  }

  // OnScroll, show returnToTop, show navbar class with white background
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //back to top - show/hide
    if (scroll >= scrollShowBackToTop) {
      $('#backtotop').addClass('visible');
    } else {
      $('#backtotop').removeClass('visible');
    }

    //when scrolling, give navbar css class for white background
    if (scroll >= scrollTriggerNavbar ) {
      body.addClass('is-scrolled');
    } else {
      body.removeClass('is-scrolled');
    }
  });
  //back to top - click
  $('#backtotop').click(function () {
    $('html, body').animate({scrollTop: 0}, 500);
  });
  //click - modal close
  $('.modal-close').click(function () {
    $('.modal').removeClass('is-active');
  });

  // Scroll to section
  if (useScrollTo === true) {
    $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      //get section id
      var scrollToId = $(this).attr('data-scrollid');
      //close nav
      $('.navbar-menu').removeClass('is-active');
      $('.navbar-burger').removeClass('is-active');
      //get header
      var $navbarHeader = $('.navbar-header');
      //console.log($navbarHeader.height());
      //scroll to section + offset header height
      $('html, body').animate({ scrollTop: $('#' + scrollToId).offset().top - ($navbarHeader.height() + scrollOffset) + 'px' }, 400, 'easeOutQuad');
    });
  }


  // Form Redirect Handler
  window.addEventListener('blur',function(){
    window.setTimeout(function () {
      if (document.activeElement instanceof HTMLIFrameElement) {
        //Click in Iframe.
        formFocus = 1;
      }
    }, 0);
  });

  $('#contactform').on('load', function() {
    formload = formload + 1;
    //console.log('form loaded ' + formload + ' times');
    if (formload > 1 && formFocus === 1) {
      //form completed
      $(location).attr('href', 'thank-you.html');
      //window.location.href="thank-you.html";
    }
  });



});

///////////////////////////////////
// Vanilla JS Scripts
///////////////////////////////////

// AOS - Animate On Scroll

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease-out-quad', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


// Instgram Photos using instafeed

if (useGallery === true) {
  var feed = new Instafeed({
    get: 'user',
    userId: 13347351254, // Ex: 13347351254
    accessToken: '13347351254.f75a925.0c083669d29e44db94db895a67dc9a5c',
    resolution: 'standard_resolution',
    target: 'instafeed',
    template: '<a class="gallery-img" href="{{link}}" target="_blank" data-tooltip="View In instagram"><img src="{{image}}" /></a>',
    success: function () {
      $('.instafeed-loading').hide();
    },
  });
  feed.run();
}


// Hamburger - Navbar

document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// Accordion

var MOUSE_EVENTS = ['click', 'touchstart'];
document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accordion-container');
  [].forEach.call(accordions, function (accordion) {
    var items = accordion.querySelectorAll('.accordion');
    [].forEach.call(items, function (item) {
      MOUSE_EVENTS.forEach(function (event) {
        item.querySelector('.toggle, [data-action="toggle"], .item-stable').addEventListener(event, function (e) {
          e.preventDefault();
          if (!item.classList.contains('active')) {
            var activeItem = accordion.querySelector('.accordion.active');
            if (activeItem) {
              activeItem.classList.remove('active');
            }
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      });
    });
  });
});