/*************************************************************
                          Functions
*************************************************************/

/* adds color to circle graph 3 */
function circleThree()  {
  $('.circ-3').delay(2000).fadeIn(1000, function() {
  $('.circ-3').addClass('circ-3a')
  })
}

/* adds color to circle graph 2 */
function circleTwo()  {
  $('.circ-2').delay(2000).fadeIn(1000, function() {
  $('.circ-2').addClass('circ-2a')
  })
}

/* adds color to circle graph 1 */
function circleOne()  {
  $('.circ-1').delay(2000).fadeIn(1000, function() {
  $('.circ-1').addClass('circ-1a')
  })
}

/* Opens/close slide navigation */
function slideNavOpenClose() {
  $('.slide-nav').toggleClass('side-nav-open');
  $('.main-site').toggleClass('slide');
  // $('.profile-pic').trigger('play');
}

/* switches slide menu button to close arrow */
function sliderIcon() {
  $('.menu-slider-button').toggleClass('menu-slider-graphic');
  $('.admin-sec-1').toggleClass('ad-menu');
  $('.menu-slider-button').toggleClass('menu-slider-arrow');
  $('.admin-sec-1').toggleClass('ad-arrow');
}

/* number count up animation */
function numberCounter()  {
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  })
}

/* circle graph number count up animation */
function circleCounter()  {
$('.circle-counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  })
}

/* bar graph number count up animation */
function barCounter()  {
$('.bar-counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  })
}

function circleOneUpDate()  {
  $('.circ-1').removeClass('circ-1a');
  $('.circ-1').delay(2000).fadeIn(2000, function() {
  $('.circ-1').addClass('circ-1a')
  })
}

function circleTwoUpDate()  {
  $('.circ-2').removeClass('circ-2a');
  $('.circ-2').delay(2000).fadeIn(2000, function() {
  $('.circ-2').addClass('circ-2a')
  })
}

function circleThreeUpDate()  {
  $('.circ-3').removeClass('circ-3a');
  $('.circ-3').delay(2000).fadeIn(2000, function() {
  $('.circ-3').addClass('circ-3a')
  })
}

function bc1()  {
  $('.bbc1').removeClass('bc1');
  $('.bbc1').delay(100).fadeIn(100, function() {
  $('.bbc1').addClass('bc1')
  })
}

function bc2()  {
  $('.bbc2').removeClass('bc2');
  $('.bbc2').delay(100).fadeIn(100, function() {
  $('.bbc2').addClass('bc2')
  })
}

function bc3()  {
  $('.bbc3').removeClass('bc3');
  $('.bbc3').delay(100).fadeIn(100, function() {
  $('.bbc3').addClass('bc3')
  })
}

function bc4()  {
  $('.bbc4').removeClass('bc4');
  $('.bbc4').delay(100).fadeIn(100, function() {
  $('.bbc4').addClass('bc4')
  })
}

function bc5()  {
  $('.bbc5').removeClass('bc5');
  $('.bbc5').delay(100).fadeIn(100, function() {
  $('.bbc5').addClass('bc5')
  })
}

function bc6()  {
  $('.bbc6').removeClass('bc6');
  $('.bbc6').delay(100).fadeIn(100, function() {
  $('.bbc6').addClass('bc6')
  })
}

function bc7()  {
  $('.bbc7').removeClass('bc7');
  $('.bbc7').delay(100).fadeIn(100, function() {
  $('.bbc7').addClass('bc7')
  })
}

function bc8()  {
  $('.bbc8').removeClass('bc8');
  $('.bbc8').delay(100).fadeIn(100, function() {
  $('.bbc8').addClass('bc8')
  })
}

function bc9()  {
  $('.bbc9').removeClass('bc9');
  $('.bbc9').delay(100).fadeIn(100, function() {
  $('.bbc9').addClass('bc9')
  })
}

function bc10()  {
  $('.bbc10').removeClass('bc10');
  $('.bbc10').delay(100).fadeIn(100, function() {
  $('.bbc10').addClass('bc10')
  })
}

function bc11()  {
  $('.bbc11').removeClass('bc11');
  $('.bbc11').delay(100).fadeIn(100, function() {
  $('.bbc11').addClass('bc11')
  })
}

function bc12()  {
  $('.bbc12').removeClass('bc12');
  $('.bbc12').delay(100).fadeIn(100, function() {
  $('.bbc12').addClass('bc12')
  })
}

function bc13()  {
  $('.bbc13').removeClass('bc13');
  $('.bbc13').delay(100).fadeIn(100, function() {
  $('.bbc13').addClass('bc13')
  })
}

function bc14()  {
  $('.bbc14').removeClass('bc14');
  $('.bbc14').delay(100).fadeIn(100, function() {
  $('.bbc14').addClass('bc14')
  })
}


/*************************************************************
                    EVENT LISTENER
*************************************************************/

$(document).ready(function()  {
  numberCounter();
  circleThree();
  circleTwo();
  circleOne();
})

$('main').on('click', '.menu-slider-button', function() {
  slideNavOpenClose();
  sliderIcon();
});

$('main').on('click', '.views-button', function() {
  circleCounter();
  circleOneUpDate();
  circleTwoUpDate();
  circleThreeUpDate();
})

$('main').on('click', '.applicants-button', function() {
  barCounter();
  bc1();
  bc2();
  bc3();
  bc4();
  bc5();
  bc6();
  bc7();
  bc8();
  bc9();
  bc10();
  bc11();
  bc12();
  bc13();
  bc14();
})
