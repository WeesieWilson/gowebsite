$(document).ready(function() {


  var  mn = $(".navFooter");
      mns = "nav-footer-scrolled";
      hdr = $('.hero').height();

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });





    $( '#my-slider' ).sliderPro({

      width: 960,
    height: 400,
    orientation: 'horizontal',
    thumbnailPosition: 'right',
    arrows: true,
  }
    );





 });
