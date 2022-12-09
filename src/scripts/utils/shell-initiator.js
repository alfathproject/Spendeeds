// Spinner
(function spinner() {
  setTimeout(() => {
    if ($('#spinner').length > 0) {
      $('#spinner').removeClass('show');
    }
  }, 1);
}());

// Dropdown on mouse hover
const dropdown = $('.dropdown');
const dropdownToggle = $('.dropdown-toggle');
const dropdownMenu = $('.dropdown-menu');
const showClass = 'show';

$(window).on('load resize', () => {
  if (window.matchMedia('(min-width: 992px)').matches) {
    dropdown.hover(
      () => {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find(dropdownToggle).attr('aria-expanded', 'true');
        $this.find(dropdownMenu).addClass(showClass);
      },
      () => {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find(dropdownToggle).attr('aria-expanded', 'false');
        $this.find(dropdownMenu).removeClass(showClass);
      },
    );
  } else {
    dropdown.off('mouseenter mouseleave');
  }
});

// Sticky Navbar
$(window).on('scroll', () => {
  if ($(window).scrollTop() > 300) {
    $('.sticky-top').css('top', '0px');
    $('#favoriteButton').css('bottom', '110px');
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.sticky-top').css('top', '-100px');
    $('#favoriteButton').css('bottom', '45px');
    $('.back-to-top').fadeOut('slow');
  }
});

// Back to top button
$('.back-to-top').on('click', () => {
  $('html, body').animate({ scrollTop: 0 });
  return false;
});
