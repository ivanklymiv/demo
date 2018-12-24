$(document).ready(function(){
  $('.slider').slick({
   "slidesToShow": 1, "slidesToScroll": 1,
   infinite: true,
   dots: true,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 4000,
   slide: 'img'
  });

  $("nav div ul li a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 1000);
  });
});

function initMap() {
  // The location of Uluru
  var uluru = {lat: 59.326242, lng: 17.8419703};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
//# sourceMappingURL=../sourcemaps/main.js.map

//# sourceMappingURL=../sourcemaps/main.js.map
