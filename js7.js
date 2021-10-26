$(document).ready(function(){
    $(".gal").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        
      });
  });
© 2021 GitHub, Inc.
