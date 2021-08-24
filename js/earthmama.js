$(document).ready(function(){
    // slider
    $('.slider .owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      responsiveClass: true,
      autoplay:true,
      autoplayTimeout:3000,
      lazyLoad: true,
      smartSpeed: 1500
    });
  
    // Popup Cart
    $('.modal').modal({
      dismissible: true,
      inDuration: 300,
      outDuration: 200,
      startingTop: '4%',
      endingTop: '10%',
    });
  
    // Brand
    $('.home-jcarousel').each(function (index, element) {
      var _self = $(element);
      // if ( ! _self.hasClass('giay-phep') ) {
        _self.find('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          responsiveClass: true,
          autoplay:true,
          // autoWidth: _self.hasClass('giay-phep'),
          autoplayTimeout:3000,
          lazyLoad: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            600: {
              items: 3,
              nav: false
            },
            1000: {
              items: _self.hasClass('giay-phep') ? 4 : 5,
              nav: true,
              loop: false,
              margin: 20
            }
          }
        });
      // }
    });
  
    $(".owl-prev").html("<");
    $(".owl-next").html(">");
  });