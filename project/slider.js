$(".autoplay1").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipe:false,
    autoplaySpeed: 1600,
    pauseOnHover:false,
    responsive:[{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  });
  $(".autoplay2").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipe:false,
    autoplaySpeed: 1500,
    pauseOnHover:false,
    responsive:[{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  });
  $(".carousel").slick({
    dots: false,
    infinite: true,
    swipe:false,
    prevArrow:$(".review_nav_btn_bckw"),
    nextArrow:$(".review_nav_btn_frwd"),
    waitForAnimate:false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    cssEase:'linear',
    autoplay: false
  });
  function update_review_bckw()
  {
    var a =parseInt(document.getElementById("current_review_id").textContent);
    if(a==1){document.getElementById("current_review_id").textContent="8";}
    else{document.getElementById("current_review_id").textContent=(a-1).toString();}
    
  }
  function update_review_frwd()
  {
    var b = parseInt(document.getElementById("current_review_id").textContent);
    if(b==8){document.getElementById("current_review_id").textContent="1";}
    else{document.getElementById("current_review_id").textContent=(b+1).toString();}
  }
  