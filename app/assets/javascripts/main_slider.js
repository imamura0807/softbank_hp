$(document).on('turbolinks:load', function(){
  
  $('.topics__middle__slider').slick({
    centerMode: true,
    centerPadding: '50px',
    // autoplay: true, 
    // autoplaySpeed: 2000, 
    slidesToShow: 3,
    arrows: true,
    accessibility: true,
    prevArrow: '<div class="prev"><</div>',
    nextArrow: '<div class="next">></div>',

  })
});