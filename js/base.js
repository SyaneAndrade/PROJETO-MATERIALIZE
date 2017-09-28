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