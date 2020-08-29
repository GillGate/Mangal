$(function(){
  $('.headerSlider').slick({
  	fade: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
    draggable: false,
  	prevArrow: '.headerSlider__button--prev',
  	nextArrow: '.headerSlider__button--next'
  });

  let lazy = new LazyLoad({
    elements_selector: ".lazy img"
  });

  $('.gallerySlider').slick({
    slidesToShow: 3,
    dots: true,
    appendDots: '.gallerySlider__nav',
    dotsClass: 'gallerySlider__dots',
    prevArrow: '.gallerySlider__button--prev',
    nextArrow: '.gallerySlider__button--next',
    centerMode: true,
    draggable: false,
    lazyLoad: 'progressive',
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 1046,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          fade: true,      
        }
      }
    ]
    // autoplay: true
  });

let clWidth = document.documentElement.clientWidth;

if(clWidth < 751) {
  $('.food__list--main .foodMenu').slick({
    prevArrow: '.food__controls--main .food__button--prev',
    nextArrow: '.food__controls--main .food__button--next',
    slidesToShow: 4,
    slidesToScroll: 4,
    vertical: true,
    infinite: false,
    draggable: false,
    dots: true,
    appendDots: '.food__controls--main .food__sliderNav',
    dotsClass: 'food__dots',
  });

  $('.food__list--salads .foodMenu').slick({
    prevArrow: '.food__controls--salads .food__button--prev',
    nextArrow: '.food__controls--salads .food__button--next',
    slidesToShow: 4,
    slidesToScroll: 4,
    vertical: true,
    infinite: false,
    draggable: false,
    dots: true,
    appendDots: '.food__controls--salads .food__sliderNav',
    dotsClass: 'food__dots',
  });

  $('.drinks__list--spirits .drinksMenu').slick({
    prevArrow: '.drinks__button--prev',
    nextArrow: '.drinks__button--next',
    slidesToShow: 4,
    slidesToScroll: 4,
    vertical: true,
    infinite: true,
    draggable: false,
    dots: true,
    appendDots: '.drinks__sliderNav',
    dotsClass: 'drinks__dots',
  });
}

function initFoodSlider() {
  clWidth = document.documentElement.clientWidth;

  if(clWidth < 751) {
    if($('.food__list--main').hasClass('food__list--active')) {
      $('.food__controls--main').show();
      $('.food__controls--salads').hide();
    } else if($('.food__list--salads').hasClass('food__list--active')) {
      $('.food__controls--salads').show();
      $('.food__controls--main').hide();
    } else {
       $('.food__controls').hide();
    }

  } else {
   if($('.food__list .foodMenu').hasClass('slick-slider')) {
      $('.food__list .foodMenu').slick('unslick');
    }
  }
}

function initDrinkSlider() {
    clWidth = document.documentElement.clientWidth;

    if(clWidth < 751) {
        if($('.drinks__list--spirits').hasClass('drinks__list--active')) {
            $('.drinks__controls').show();
        }  else {
            $('.drinks__controls').hide();
        }
    } else {
        if($('.drinks__list--spirits .foodMenu').hasClass('slick-slider')) {
            $('.drinks__list--spirits .foodMenu').slick('unslick');
            $('.drinks__controls').hide();
        }
    }
}

initFoodSlider();
initDrinkSlider();

  $(window).on('resize', function() {
      initFoodSlider();
      initDrinkSlider();
  });

  $('.scrollbar-inner').scrollbar();

  let sliderLength = $('.headerSlider__dot').length;
  let firstSlide = $('.headerSlider__dot').first();
  let currentSlide = $('.headerSlider__dot--current');
  let nextSlide = currentSlide.next();
  let nextSlide_1 = nextSlide.next();
  let nextSlide_2 = nextSlide_1.next();
  let endOfSliderPrev = false;
  let endOfSliderNext = false;


  function sliderInit() {
    nextSlide = currentSlide.next();
    nextSlide_1 = nextSlide.next();
    nextSlide_2 = nextSlide_1.next();

    if (sliderLength - currentSlide.index() == 3) {
      nextSlide_2 = firstSlide;
    }

    if (sliderLength - currentSlide.index() == 2) {
      nextSlide_2 = firstSlide.next();
      nextSlide_1 = firstSlide;
    }

    if (sliderLength - currentSlide.index() == 1) {
      nextSlide_2 = firstSlide.next().next();
      nextSlide_1 = firstSlide.next();
      nextSlide = firstSlide;
    }

    currentSlide.addClass('headerSlider__dot--current');
    nextSlide.addClass('headerSlider__dot--second');
    nextSlide_1.addClass('headerSlider__dot--third');
    nextSlide_2.addClass('headerSlider__dot--fourth');
  }

  function sliderInitNext() {
    
    if (endOfSliderNext) {
      currentSlide = $('.headerSlider__dot').first();
      nextSlide = currentSlide.next();
      nextSlide_1 = nextSlide.next();
      nextSlide_2 = nextSlide_1.next();
    }

    sliderInit();
  }

  function sliderInitPrev() {

    if (endOfSliderPrev) {
      currentSlide = $('.headerSlider__dot').last();
    }

    sliderInit();
  }

  sliderInitNext();

  $('.headerSlider__button').on('click', function() {
      let _this = this;

      nextSlide.removeClass('headerSlider__dot--second');
      nextSlide_1.removeClass('headerSlider__dot--third');
      nextSlide_2.removeClass('headerSlider__dot--fourth');
      currentSlide.removeClass('headerSlider__dot--current');

      setTimeout(function() {
        _this.disabled = false;
      }, 500);

      _this.disabled = true;

  });

  $('.headerSlider__button--next').on('click', function() {

    if (currentSlide.next().length == 0) {
        endOfSliderNext = true;
      } else {
        currentSlide = currentSlide.next();
        endOfSliderNext = false;
      }

    sliderInitNext();
  });

  $('.headerSlider__button--prev').on('click', function() {
    let _this = this;

   if (currentSlide.prev().length == 0) {
      endOfSliderPrev = true;
    } else {
      currentSlide = currentSlide.prev();
      endOfSliderPrev = false;
    }

    sliderInitPrev();
  });

  let nav = $('.nav__wrapper');
  $('.nav__burger').on('click', function() {
    $(this).toggleClass('nav__burger--open');
    
    nav.toggle(300);
  });


  let foodBtnWrapper = $('.food__nav');

  foodBtnWrapper.on('click', '.food__button', function() {
    $('.food__list').removeClass('food__list--active');
    $('.food__button').removeClass('button--active');

    let listName = this.getAttribute('data-list');
    let listItem = $(`.food__list--${listName}`);

    listItem.addClass('food__list--active');

    let listHeight = parseInt(listItem.css('height'));

    if (listHeight < 768) {
      listItem.css('overflow-y', 'hidden');
    }

    $(this).addClass('button--active');

    initFoodSlider();
  })

  let drinksBtnWrapper = $('.drinks__nav');

  drinksBtnWrapper.on('click', '.drinks__button', function() {
    $('.drinks__list').removeClass('drinks__list--active');
    $('.drinks__button').removeClass('button--active');


    let listName = this.getAttribute('data-list');
    $(`.drinks__list--${listName}`).addClass('drinks__list--active');
    $(this).addClass('button--active');

    initDrinkSlider();
  });

  let $links = $('.nav__link, .header__scroll, .footer__nav a');

  $links.on('click', function(e) {
    e.preventDefault();

    let target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top - 86
    }, 1000);
  });

  let offset = window.pageYOffset;

  function checkOffset() {
    offset = window.pageYOffset;
    let header = $('.header__head');


    if (offset > 650) {
      $('.header').css('marginTop', '86px');
      header.addClass('header__head--fixed');
    } else {
      $('.header').css('marginTop', '0px');
      header.removeClass('header__head--fixed');
    }
  }

  checkOffset();

  // $('.welcome__food').parallax({
  //   imageSrc: '../img/welcome-food.jpg'
  // });


  // let windowTop = $(window).scrollTop();
  // let navCoords = [];
  // let navCoordsItem = 0;
  // let navLinks = document.querySelectorAll('.nav__link');

  // $('.nav__link').each(function() {
  //   let selector = $(this).attr('href');
  //   let section = $(selector);

  //  navCoords[navCoordsItem] = section.offset().top;

  //  navCoordsItem++;
  // });

  $(window).on('scroll', function() {
    checkOffset();

    // for(let i = 0; i < navLinks.length; i++) {
    //   let navLink = navLinks[i].getAttribute('href');

    //   if (windowsTop > navCoords[i]) {
        
    //   }

    // }
  });
});