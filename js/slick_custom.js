$(function () {
  $(".lazy").slick({
    lazyLoad: "ondemand", // ondemand progressive anticipated
    infinite: true,
    arrow: true,
    dots: true,
    prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow: "<button type='button' class='slick-next'>Next</button>",
    autoplaySpeed: 4000,
    autoplay:true,
    draggable: true, //드래그 가능 여부
  });
});

// 슬라이드는 기본적으로 autoplay:false 상태로.
// offset이 .slide_container 영역으로 오면 autoplay:true로.
