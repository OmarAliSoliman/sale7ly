$(document).ready(function () {
  "use strict";

  if ($(".screen-app").length) {
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 20,
        depth: 150,
        modifier: 1.5,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }


  
  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".myNavbra").addClass("fixed-navbar");
      $("#floating").css("opacity", "0.8");
    } else {
      $(".myNavbra").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".services-slider").length) {
    $(".services-slider").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if($('.teste-slider').length){
    $('.teste-slider').slick({
      dots: true,
      rtl: currentDir == "rtl" ? true : false,
      arrows: false,
    })
  }

  $('.counter').counterUp({
    time: 1000
  });



  $('.myNavbra nav li').each((index, item)=>{
    $(item).click(function(e){
      // console.log("hi");
      $(item).addClass('active').siblings().removeClass('active');
    })
  })

  $('.sidenav li').each((index, item)=>{
    $(item).click(function(e){
      // console.log("hi");
      $(item).addClass('active').siblings().removeClass('active');
    })
  })

});


function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-400px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}
