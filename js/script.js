$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.tabs__btn1').click(function (event) { 
    $('.tabs__btn1').addClass('active-btn');
    $('.feature1__content1').addClass('active-tab');
    $('.tabs__btn2,.tabs__btn3').removeClass('active-btn');
    $('.feature1__content2,.feature1__content3').removeClass('active-tab');
  });

  $('.tabs__btn2').click(function (event) { 
    $('.tabs__btn2').addClass('active-btn');
    $('.feature1__content2').addClass('active-tab');
    $('.tabs__btn1,.tabs__btn3').removeClass('active-btn');
    $('.feature1__content1,.feature1__content3').removeClass('active-tab');
  });

  $('.tabs__btn3').click(function (event) { 
    $('.tabs__btn3').addClass('active-btn');
    $('.feature1__content3').addClass('active-tab');
    $('.tabs__btn1,.tabs__btn2').removeClass('active-btn');
    $('.feature1__content1,.feature1__content2').removeClass('active-tab');
  });
});