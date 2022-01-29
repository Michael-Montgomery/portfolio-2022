var stickyOffset = $('.sticky').offset().top;

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) {
      sticky.addClass('fixed');
      $('header nav a').css('color', 'white');
      
  } else {
      sticky.removeClass('fixed');
      $('header nav a').css('color', 'black');
  }
});