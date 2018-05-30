   $(document).ready(function(){
      $('.carousel').slick({
      	slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
      });

      var userScroll = 0;
      $(window).scroll(function() {
      	var amountOfScroll = $(this).scrollTop();
      if (amountOfScroll - userScroll > 50) {
      	var navbarheight = $('.navbar').css('height');
        $('.navbar').animate({top: '-' + navbarheight}, 150);
        userScroll = amountOfScroll;
      } else if (userScroll - amountOfScroll > 50) {
  	    $('.navbar').animate({top: '0px'}, 150);
  	    userScroll = amountOfScroll;
      }


  });


      

    });