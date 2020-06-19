$(document).ready(function() {

//Progress bar A
var containerA = document.getElementById("circleA");

var circleA = new ProgressBar.Circle(containerA, {

    color: '#64DAF9',
    strokeWidth:8,
    duration:1400,
    from: {color:'#AAA' },
    to: {color:'##65DAF9'},

    step: function(state, circle) {

        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value()* 60 );

        circle.setText(value);

    }

});

//Progress bar B
var containerB = document.getElementById("circleB");

var circleB = new ProgressBar.Circle(containerB, {

    color: '#64DAF9',
    strokeWidth:8,
    duration:1600,
    from: {color:'#AAA' },
    to: {color:'##65DAF9'},

    step: function(state, circle) {

        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value()* 345 );

        circle.setText(value);

    }

});

//Progress bar C
var containerC = document.getElementById("circleC");

var circleC = new ProgressBar.Circle(containerC, {

    color: '#64DAF9',
    strokeWidth:8,
    duration:2000,
    from: {color:'#AAA' },
    to: {color:'##65DAF9'},

    step: function(state, circle) {

        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value()* 21 );

        circle.setText(value);

    }

});

//Progress bar D
var containerD = document.getElementById("circleD");

var circleD = new ProgressBar.Circle(containerD, {

    color: '#64DAF9',
    strokeWidth:8,
    duration:2200,
    from: {color:'#AAA' },
    to: {color:'##65DAF9'},

    step: function(state, circle) {

        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value()* 8000);

        circle.setText(value);

    }

});

// Iniciando o loader quando o usuário chega no elemento
var dataAreaOffset = $('#data-area').offset();
var stop = 0;

$(window).scroll(function(e) {

    var scroll = $(window).scrollTop();

    if(scroll > (dataAreaOffset.top - 500) && stop == 0 ) {

        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);

        stop = 1;
    }

});

//Parallax
setTimeout(function() {

$('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
$('#apply-area').parallax({imageSrc: 'img/pattern.png'});

} ,250);

// Filtro portfólio

$('.filter-btn').on('click', function() {

  let type = $(this).attr('id');
  let boxes = $('.project-box');

  $('.main-btn').removeClass('active');
  $(this).addClass('active');

  if(type == 'dsg-btn') {
    eachBoxes('dsg', boxes);
  } else if(type == 'dev-btn') {
    eachBoxes('dev', boxes);
  } else if(type == 'seo-btn') {
    eachBoxes('seo', boxes);
  } else {
    eachBoxes('all', boxes);
  }

});

function eachBoxes(type, boxes) {

  if(type == 'all') {
    $(boxes).fadeIn();
  } else {
    $(boxes).each(function() {
      if(!$(this).hasClass(type)) {
        $(this).fadeOut('slow');
      } else {
        $(this).fadeIn();
      }
    });
  }
}

//scroll para seções

var navBtn = $('.nav-item');

var bannerSection = $('#mainSlider');
var aboutSection = $('#about-area');
var servicesSection = $('#services-area');
var teamSection = $('#team-area');
var portfolioSection = $('#portfolio-area');
var contactSection = $('#contact-area');

var scrollTo = '';
$(navBtn).click(function() {
  
  var btnId = $(this).attr('id');
  
  if(btnId =='about-menu') {
    scrollTo = aboutSection;
  } else if (btnId == 'services-menu') {
    scrollTo = servicesSection;
  } else if (btnId == 'team-menu') {
    scrollTo = teamSection;
  } else if (btnId == 'portfolio-menu') {
    scrollTo = portfolioSection;
  } else if (btnId == 'contact-menu') {
    scrollTo = contactSection;
  } else {
    scrollTo = bannerSection;
  }
  
  $([document.documentElement,document.body]).animate({
    scrollTop: $(scrollTo).offset().top -70
  },1500);
  
    
});


});
