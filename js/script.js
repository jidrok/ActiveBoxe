$(function(){
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  let menu = $(".menu");
  let burger = $(".burger");

  $(window).on("scroll resize", function(){
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, introH);
  });

  function checkScroll(scrollPos, introH){
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else{
      header.removeClass("fixed");
    }
  }

  $("[data-scroll]").on("click", function(event){
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    menu.removeClass("show");
    $("html, body").animate({
      scrollTop: elementOffset - 50
    }, 700);
  });

  // Menu-mobile


  $(function(){
    burger.click(function(){
      menu.toggleClass('show');
    });
  });

  // Slider:  https://kenwheeler.github.io/slick/

  let slider = $("#clientsSider");
 
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    dots: true
  });

});
