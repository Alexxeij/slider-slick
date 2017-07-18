$('.sl').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
          dots:true,
        slidesToShow: 1
      }
    }
  ]
});
 // autoplay:true,
  //  slidesToShow:3,
  //  slidesToScroll:3,
  //  dots:true,
  //  arrows:false,
    $('.wrap').slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
          dots:true,
        slidesToShow: 1
      }
    }
  ]
});