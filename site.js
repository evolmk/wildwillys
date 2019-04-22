
///////////////////////////////////
// jQuery Scripts
///////////////////////////////////

$(function () {

  // Back to Top Button
  var scrollShowBackToTop = 400;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //back to top - show/hide
    if (scroll >= scrollShowBackToTop) {
      $('#backtotop').addClass('visible');
    } else {
      $('#backtotop').removeClass('visible');
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
  $('a[href*="#"]').on('click', function (e) {
    var scrollToId = $(this).attr('data-scrollid');
    console.log('scroll to data-scrollid: ', scrollToId);
    e.preventDefault();
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500, 'easeOutQuad')
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