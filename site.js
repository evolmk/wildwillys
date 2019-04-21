// Navbar - hamburger click

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


// Scroll

$(function () {
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

});


// Scroll to section

$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'easeOutQuad'
  )
});

// Bulma Accordion

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
            var activeItem = accordion.querySelector('.accordion.is-active');
            if (activeItem) {
              activeItem.classList.remove('active');
            }
            item.classList.add('active');
          }
          else {
            item.classList.remove('active');
          }
        });
      });
    });
  });
});

