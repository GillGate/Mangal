$('.headerSlider').slick({
	fade: true,
	slidesToShow: 1,
  	slidesToScroll: 1,
    draggable: false,
  	prevArrow: '.headerSlider__button--prev',
  	nextArrow: '.headerSlider__button--next'
});

let sliderLength = $('.headerSlider__dot').length;
let firstSlide = $('.headerSlider__dot').first();
let currentSlide = $('.headerSlider__dot--current');
let nextSlide = currentSlide.next();
let nextSlide_1 = nextSlide.next();
let nextSlide_2 = nextSlide_1.next();
let endOfSlider = false;

// console.log(nextSlide.index());

function sliderInit() {
  nextSlide = currentSlide.next();
  nextSlide_1 = nextSlide.next();
  nextSlide_2 = nextSlide_1.next();

  // if(nextSlide_2.length == 0) {
  //   nextSlide_2 = $('.headerSlider__dot').first();
  //   console.log(nextSlide_2);
  // } else {
  //   nextSlide_2 = nextSlide_1.next();
  // }

  if (sliderLength - currentSlide.index() == 3) {
    nextSlide_2 = $('.headerSlider__dot').first();
  }

  if (sliderLength - currentSlide.index() == 2) {
    nextSlide_2 = $('.headerSlider__dot').first().next();
    nextSlide_1 = $('.headerSlider__dot').first();
  }

  if (sliderLength - currentSlide.index() == 1) {
    nextSlide_2 = $('.headerSlider__dot').first().next().next();
    nextSlide_1 = $('.headerSlider__dot').first().next();
    nextSlide = $('.headerSlider__dot').first();
  }

  if (sliderLength - currentSlide.index() == 0) {
    // $('.headerSlider__dot').first().addClass('headerSlider__dot--current');
    console.log('current is out');
  }
  // if (sliderLength - currentSlide.index() == 3) {
  //   nextSlide_2 = $('.headerSlider__dot').first();
  // }

  if (endOfSlider) {
    currentSlide = $('.headerSlider__dot').first();
    nextSlide = currentSlide.next();
    nextSlide_1 = nextSlide.next();
    nextSlide_2 = nextSlide_1.next();
  }

  currentSlide.addClass('headerSlider__dot--current');
  nextSlide.addClass('headerSlider__dot--second');
  nextSlide_1.addClass('headerSlider__dot--third');
  nextSlide_2.addClass('headerSlider__dot--fourth');
}

sliderInit();

$('.headerSlider__button').on('click', function() {

  nextSlide.removeClass('headerSlider__dot--second');
  nextSlide_1.removeClass('headerSlider__dot--third');
  nextSlide_2.removeClass('headerSlider__dot--fourth');
  currentSlide.removeClass('headerSlider__dot--current');

  if (currentSlide.next().length == 0) {
    endOfSlider = true;
  } else {
    currentSlide = currentSlide.next();
    endOfSlider = false;
  }
  
  sliderInit();

});

$('.headerSlider__button--prev').on('click', function() {


});





























/*
$('.headerSlider__dots').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.headerSlider',
  dots: false,
  arrows: false,
  focusOnSelect: false,
  draggable: false,
  // infinite: true
  // vertical: true
});
*/
/*
function sliderInit() {
  let currentSlide = $('.headerSlider__nav .slick-current');
  let nextSlide = currentSlide.next();
  let nextSlide_1 = nextSlide.next();
  let nextSlide_2 = nextSlide_1.next();

  currentSlide.addClass('headerSlider__dot--first');
  nextSlide.addClass('headerSlider__dot--second');
  nextSlide_1.addClass('headerSlider__dot--third');
  nextSlide_2.addClass('headerSlider__dot--fourth');
}

sliderInit();

$('.headerSlider__button').on('click', function() {
  currentSlide.removeClass('headerSlider__dot--first');
  nextSlide.removeClass('headerSlider__dot--second');
  nextSlide_1.removeClass('headerSlider__dot--third');
  nextSlide_2.removeClass('headerSlider__dot--fourth');

  sliderInit();
});
*/