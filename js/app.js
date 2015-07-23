
var winScr;
var winScr2;

$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1;

	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	  
	}
	else{
		$window.on('scroll', revealOnScroll);
	}

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
      }
    });
  }
	//revealOnScroll();
});

var l = $(".ico-text").length;
var lt = $(".ico-text");
for (var i=0;i<l; i++) {
	lt.eq(i).css({"animation-delay": i*200 + "ms"});
}

function ColorBox1(){
	$(".group1").colorbox({rel:'group1', transition:"fade", height: "100%"});
}

function ColorBox2(){
	$(".group2").colorbox({rel:'group2', transition:"fade", height: "100%"});
}

$(".ss1").on("click", function(){
	if($(this).hasClass("swiper-slide-active")){
		ColorBox1();
	}
	else
	{
		$(".group1").colorbox.remove();
	}
});

$(".ss2").on("click", function(){
	if($(this).hasClass("swiper-slide-active")){
		ColorBox2();
	}
	else
	{
		$(".group2").colorbox.remove();
	}
});

function parallaxFunction(){
	var h = $(window).height();
	if(winScr < $("#home").outerHeight()){
		$(".parallax-bg").css({top : (winScr/1)});
		$(".parallax-overlay").css({top : (h/3+h/9)+(winScr/2.5)});
		$(".parallax-bg-overlay").css({top: (h/4)+(winScr/1.2)});
		$(".video-phone-holder").css({top : (h/2)-120});
		$(".header-text").css({top : (h/2)-140});
	}				
};

function parallaxAll(){
	var p = $('.parallax-all').length;
	var pa = $('.parallax-all');
	for (var i=0;i<p; i++) {
		var h = $(window).height();
		var topOff = pa.eq(i).offset().top;
		winScr2 = $(window).scrollTop()-pa.eq(i).offset().top;
		pa.eq(i).find(".img-1").css({top : 100+(winScr2/1.6)});
		pa.eq(i).find(".img-2").css({top: 200+(winScr2/2.5)});	
	}		
}

function menuRework(){
	if(winScr > 100)
	{
		$(".navbar-default").css({
			"background":"#fff",
			"box-shadow": "0px 1px 8px 0px rgba(150,150,150,0.5)"
		});

		$(".navbar-default .navbar-nav>li>a").css({
			"color":"#808080"
		});

		$(".navbar-brand").css({
			"color":"#808080"
		});

		$(".menu-container").css({
			"border-bottom":"none"
		});
		$(".sign-up").css({
			"margin-top":"0px",
			"height":"60px",
			"line-height":"58px",
			"border-radius":"0"
		});
		$(".navbar-nav").css({
			"margin-top":"5px"
		});
		$(".navbar-header").css({
			"margin-top":"5px",
			"margin-bottom":"5px"
		});

		$(".dropdown-menu").css("top", "55px");
	}
	else
	{
		$(".navbar-default").css({
			"background-color":"transparent",
			"box-shadow": "none"
		});

		$(".navbar-default .navbar-nav>li>a").css({
			"color":"#fff"
		});

		$(".navbar-brand").css({
			"color":"#fff"
		});

		$(".menu-container").css({
			"border-bottom":"2px solid rgba(255,255,255,0.3)"
		});
		$(".sign-up").css({
			"margin-top":"25px",			
			"height":"50px",
			"line-height":"50px",
			"border-radius":"5px"
		});
		$(".navbar-nav").css({
			"margin-top":"25px"
		});
		$(".navbar-header").css({
			"margin-top":"25px",
			"margin-bottom":"25px"
		});

		$(".dropdown-menu").css("top", "75px");
	}

};

function accordionMy(){
	$(".collapse").on('show.bs.collapse', function() {
		var printt = $(this).parent().index();
		$(".acc-slide img").removeClass("active");
		$(".acc-slide img").eq(printt).addClass("active");
		$(".panel").find(".panel-heading h4").css("color", "#222");
		$(".panel").eq(printt).find(".panel-heading h4").css("color", "#3b97d3");
		$(".panel").find(".panel-title-arrow").css("left", "0px");
		$(".panel").eq(printt).find(".panel-title-arrow").css("left", "-12px");
		//console.log(printt);
	});
}

$(document).ready(function(){
	winScr = $(window).scrollTop();
	accordionMy();
	parallaxFunction();
	parallaxAll();
	menuRework();
});

// 1. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var player1;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
  height: '390',
  width: '640',
  videoId: '3yuSRmUHIhY',
  playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist':'3yuSRmUHIhY', 'showinfo': 0 },
  events: {
    'onReady': onPlayerReady
  }
});
player1 = new YT.Player('video-iframe', {
  height: '390',
  width: '640',
  videoId: '3yuSRmUHIhY',
  playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist':'3yuSRmUHIhY', 'showinfo': 0 },
  events: {
    'onReady': onPlayerReady1
  }
});
}

// 3. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
player.mute();
}

function onPlayerReady1(event) {
event.target.playVideo();
player1.mute();
}

function stopVideo() {
player.stopVideo();
player1.stopVideo();
}

$(window).load(function () {
	winScr = $(window).scrollTop();

	if($(".acc-slide").height() < $(".panel-group#accordion").height()){
		$(".acc-slide").height($(".panel-group#accordion").height());
	}
	
	$("header .container .col-xs-5").height($(".header-text").height());	

	var testimonialSwiper = new Swiper('.testimonials-cont', {
		pagination: '.test-pag',
	    slidesPerView: 1,
	    centeredSlides: true,
	    paginationClickable: true,
	    spaceBetween: 0,
	});	

	var mediaSizer = 992;

	if($(window).width() < mediaSizer)
	{
		$(".phone").width("50%");
		$(".phone").css("left", "25%");
		$(".text-and-pagination").css({"position":"relative", "width":"100%"});
		$(".swiper-slide img").width("72%");
		$(".pagination").css("display", "none");
		var swiper = new Swiper('.swiper-container', {
			pagination: '.pagination1-1',
		    slidesPerView: 2,
		    centeredSlides: true,
		    paginationClickable: true,
		    spaceBetween: 0
		});

		var swiperr = new Swiper('.header-slider-swiper', {
			pagination: '.pagination1-1',
		    slidesPerView: 2,
		    preventClicks: false,
		    autoplay: 1,
		    preventClicksPropagation: false,
		    slideToClickedSlide: true,
		    centeredSlides: true,
		    paginationClickable: true,
		    spaceBetween: 0,
		    autoplay: 3000
		});	

		$(".header-slider-swiper .ss1").on("click", function(event){
			event.preventDefault();
			$(".header-slider-swiper .ss1").removeClass("swiper-slide-active");
			$(this).addClass("swiper-slide-active");
			swiperr.swipeTo($(".ss1.swiper-slide-active").index()-1);
		});

		$(".ss1").on("click", function(event){
			event.preventDefault();
			$(".ss1").removeClass("swiper-slide-active");
			$(this).addClass("swiper-slide-active");
			swiper.swipeTo($(".ss1.swiper-slide-active").index()-1);
		});

		$(".ss2").on("click", function(event){
			event.preventDefault();
			$(".ss2").removeClass("swiper-slide-active");
			$(this).addClass("swiper-slide-active");
			swiper2.swipeTo($(".ss2.swiper-slide-active").index()-1);
		});

		//swiper.swipeTo(1);	

		var swiper2 = new Swiper('.swiper-container2', {
			pagination: '.pagination2',
		    slidesPerView: 2,
		    centeredSlides: true,
		    paginationClickable: true,
		    spaceBetween: 0
		});	

		swiper2.swipeTo(1);	

		$(".left-over2-2").css("left", "-15px");
		$(".left-over2-2").width("33%");

		$(".right-over2-2").css("right", "-15px");
		$(".right-over2-2").width("33%");

		$('body').on("click", function(evt){    
		       if(evt.target.id == "bs-example-navbar-collapse-1")
		          return;

		       if( $(evt.target).closest("#bs-example-navbar-collapse-1").length > 0 ) {
			        return false;
			    }            
			    else{
			    	$(".navbar-collapse.collapse.in").removeClass("in");
			    }
		});
	}
	else
	{
		var swiper = new Swiper('.swiper-container', {
			pagination: '.pagination',
		    slidesPerView: 8,
		    preventClicks: false,
		    preventClicksPropagation: false,
		    slideToClickedSlide: true,
		    centeredSlides: true,
		    paginationClickable: true,
		    spaceBetween: 0,
		    autoplay: 3000,
		    onSlideChangeEnd: function (swiper) {
		    	setTimeout(function(){
			    	var count = $(".ss1").length;
			    	if($(".ss1.swiper-slide-active").index() == count){
						swiper.swipeTo(0);
					}
				}, 2000);
		    }
		});	

		var swiperr = new Swiper('.header-slider-swiper', {
			pagination: '.pagination',
		    slidesPerView: 6,
		    preventClicks: false,
		    preventClicksPropagation: false,
		    slideToClickedSlide: true,
		    centeredSlides: true,
		    paginationClickable: true,
		    spaceBetween: 0,
		    autoplay: 3000
		});	

		setTimeout(function(){$(".sw1").width($(".sw1").width()+1)}, 1000);

		$(".header-slider-swiper .ss1").on("click", function(event){
			event.preventDefault();
			$(".header-slider-swiper .ss1").removeClass("swiper-slide-active");
			$(this).addClass("swiper-slide-active");
			swiperr.swipeTo($(".ss1.swiper-slide-active").index()-1);
		});

		$(".ss1").on("click", function(event){
			event.preventDefault();
			$(".ss1").removeClass("swiper-slide-active");
			$(this).addClass("swiper-slide-active");
			swiper.swipeTo($(".ss1.swiper-slide-active").index()-1);
		});

		var swiper2 = new Swiper('.swiper-container2', {
			pagination: '.pagination2',
		    slidesPerView: 9,
		    centeredSlides: true,
		    paginationClickable: true,
		    spaceBetween: 0
		});	

		swiper2.swipeTo(2);
		setTimeout(function(){$(".sw2").width($(".sw2").width()+1)}, 1000);

		$(".ss2").on("click", function(event){
			event.preventDefault();
			$(".ss2").removeClass("swiper-slide-active");
			$(this).addClass("swiper-slide-active");
			swiper2.swipeTo($(".ss2.swiper-slide-active").index()-1);
		});
		
		var leftW = $(window).width() - $(".ss2").width() * 5;

		$(".left-over2").width(leftW/2 + 3);
		$(".right-over2").width(leftW/2 + 3);

		$(".left-over2-2").css("left", $(".left-over2").width() - 20);
		$(".left-over2-2").width($(".ss2").width() * 2);

		$(".right-over2-2").css("right", $(".right-over2").width() - 20);
		$(".right-over2-2").width($(".ss2").width() * 2);

		$(".right-over2-2.sss").css("right", $(".right-over2").width() - 20);
		$(".right-over2-2.sss").width($(".ss2").width() * 2 + 20);
	}

	var leftW = $(window).width() - $(".ss2").width() * 5;
	$(".left-over2").width(leftW/2 + 3);
	$(".right-over2").width(leftW/2 + 3);
	
	$(".text-and-pagination").css("margin-top", -($(".text-and-pagination").height() / 2));
	$(".tap3").css("margin-top", -($(".tap3").height() / 2));

	$(".header-slider-swiper").height($(".phone").height());
	$(".sc1").height($(".phone").height());
	$(".ss1").height($(".phone").height());
	$(".swiper-container2").height($(".phone2").height());
	$(".ss2").height($(".phone2").height());
	$(".para-image2").height($(".right-img-2").height());

	accordionMy();
	parallaxFunction();	
	parallaxAll();
	menuRework();

	if($(".text-and-pagination").height() > $(".sw-div").height())
	{
		$(".sw-div1").height($(".text-and-pagination").height());
		var marginTopSw = - ($(".sc1").height() / 2);
		$(".sc1").css({"position":"absolute", "top":"50%", "margin-top":marginTopSw });
		var marginTopPh = - ($(".phone1").height() / 2);
		$(".phone1").css({"top":"59%", "margin-top":marginTopSw});
	}

	$(".se-pre-con").fadeOut("slow");;
});

$(window).scroll(function(){
	winScr = $(window).scrollTop();
	parallaxFunction();
	parallaxAll();
	menuRework();
});

$(".nav li a").on("click", function(e){	
	if (!$(this).hasClass("dropdown-toggle")) {
		var href = $(this).attr("href");
		var offsetTop1 = $(href).offset().top - 50;
		$('html, body').stop().animate({
		    scrollTop: offsetTop1
		}, 1450);
		$(".navbar-collapse.collapse.in").removeClass("in");
		$(".navbar-toggle.collapsed").addClass("collapsed");
		e.preventDefault();
	}
});

$('ul.nav li.dropdown').on("mouseenter", function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
});

$('ul.nav li.dropdown').on("mouseleave", function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});