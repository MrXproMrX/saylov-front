$(document).ready(function(){  
    $('.slader__list').slick({
      dots: false,
      arrows:true,
      autoplaySpeed:3000,
      infinite: true,
      speed: 1500,
      autoplay:true,
      fade: true,
    });

    $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      data:true,
      autoplaySpeed:1000,
      autoplay:true,
      nav:false,
      responsive:{
          0:{
            items:1
          },
  
          650:{
            items:1,
            margin:0,
          },
  
          700:{
            items:2
          },

          900:{
            items:2
          },
    
          950:{
            items:3
          },
    
          1220:{
            items:3
          }
      }
    });

    $('.fotogalereya_in__list1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      fade: true,
      asNavFor: '.fotogalereya_in__list2'
    });

    $('.fotogalereya_in__list2').slick({
                  arrows: false,
                  asNavFor:'.fotogalereya_in__list1',
                  dots: false,
                  infinite: true,
                  speed: 300,
                  slidesToShow: 7,
                  slidesToScroll: 1,
                  focusOnSelect: true,
                   responsive: [
                 {
                breakpoint: 1630,
                settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
              },
               {
                breakpoint: 1440,
                settings: {
                slidesToShow: 5,
               slidesToScroll: 1
                }
               },

               {
                breakpoint: 1180,
                settings: {
                slidesToShow: 4,
               slidesToScroll: 1
                }
               },

               {
                breakpoint: 900,
                settings: {
                slidesToShow: 3,
               slidesToScroll: 1
                }
               },

               {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
               slidesToScroll: 1
                }
               },
             ]
    });
});  