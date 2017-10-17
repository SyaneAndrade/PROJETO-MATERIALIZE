/* 
Criador: Jessiane Andrade e Joel Andrade
Ano : 2017 
*/

$(document).ready(function () {
    //Barra de navegação mobile
    $(".button-collapse").sideNav({
        closeOnClick: true
    });

    //SCROLSPY
    $('.scrollspy').scrollSpy({
        scrollOffset:25
    });

    //SLIDER
    $('.slider').slider({
        indicators:false,
        height:657
    });
});
//scrol


$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('navbar-bg');
  } else {
    $('nav').removeClass('navbar-bg');
  }
});


jQuery(document).ready(function($) {

  //Count nr. of square classes
  var countSquare = $('.square').length;

  //For each Square found add BG image
  for (i = 0; i < countSquare; i++) {
    var firstImage = $('.square').eq([i]);
    var secondImage = $('.square2').eq([i]);

    var getImage = firstImage.attr('data-image');
    var getImage2 = secondImage.attr('data-image');

    firstImage.css('background-image', 'url(' + getImage + ')');
    secondImage.css('background-image', 'url(' + getImage2 + ')');
  }

});