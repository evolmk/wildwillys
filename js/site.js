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


// Scroll - shrink navbar

$(function () {
  var scrollShowBackToTop = 400;

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //back to top - show/hide
    if (scroll >= scrollShowBackToTop) {
      $('#backToTop').addClass('visible');
    } else {
      $('#backToTop').removeClass('visible');
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


// Bulma Accordion

var MOUSE_EVENTS = ['click', 'touchstart'];
document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accordions');
  [].forEach.call(accordions, function (accordion) {
    var items = accordion.querySelectorAll('.accordion');
    [].forEach.call(items, function (item) {
      MOUSE_EVENTS.forEach(function (event) {
        item.querySelector('.toggle, [data-action="toggle"]').addEventListener(event, function (e) {
          e.preventDefault();
          if (!item.classList.contains('is-active')) {
            var activeItem = accordion.querySelector('.accordion.is-active');
            if (activeItem) {
              activeItem.classList.remove('is-active');
            }
            item.classList.add('is-active');
          }
          else {
            item.classList.remove('is-active');
          }
        });
      });
    });
  });
});

// HTML

function strip_tags(str){
  return str
  .replace(/(<(br[^>]*)>)/ig, '\n')
  .replace(/(<([^>]+)>)/ig,'');
}


// Currency

function formatCurrency (val) {
  //if (typeof val !== number) val = 0;
  return numeral(val).format('0.00');
}

// Dates

function parseDate(v, s) {
// turns string into date object
  var date = {
    month: '',
    year: '',
    yearInt: '',
    numLength: ''
  };
  date.month = v.substring(0, 2);
  if (s === 'dir') {
    date.year = v.substring(3, 5);
  } else {
    date.year = v.substring(2, 4);
  }
  date.yearInt = parseInt(date.year, 10);

  return date;
}

function getMonths() {
  var monthArray = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  return monthArray;
}

// Credit Card Utils

function getCreditCardType(creditCardNumber) {
  // start without knowing the credit card type
  var result = "unknown";

  // first check for MasterCard
  if (/^5[1-5]/.test(creditCardNumber)) {
    result = "mastercard";
  }
  // then check for Visa
  else if (/^4/.test(creditCardNumber)) {
    result = "visa";
  }
  // then check for AmEx
  else if (/^3[47]/.test(creditCardNumber)) {
    result = "amex";
  }
  // then check for Diners
  else if (/3(?:0[0-5]|[68][0-9])[0-9]{11}/.test(creditCardNumber)) {
    result = "diners"
  }
  // then check for Discover
  else if (/6(?:011|5[0-9]{2})[0-9]{12}/.test(creditCardNumber)) {
    result = "discover";
  }

  return result;
}

function getMaskType(cardType){
  var masks = {
    'mastercard': '9999 9999 9999 9999',
    'visa': '9999 9999 9999 9999',
    'amex': '9999 999999 99999',
    'diners': '9999 9999 9999 99',
    'discover': '9999 9999 9999 9999',
    'unknown': '9999 9999 9999 9999'
  };
  return masks[cardType];
}