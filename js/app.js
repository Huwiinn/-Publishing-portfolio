// 헤더 맨 오른쪽 이미지 애니메이션에 :hover 했을 때, 전체 페이지 색상 변경 효과
$(function () {
  $("#snb .object_wrap").hover(
    function () {
      $("body").addClass("fadein");
    },
    function () {
      $("body").removeClass("fadein");
    });

  $("#snb .object_wrap").click(function () {
    $("#sec_introduce").addClass("active");
  });

  $('#sec_introduce .X_wrap').click(function(){
    $("#sec_introduce").removeClass("active");
  })

  // header 스크롤 시, 그림자 효과 적용 함수
  let header = $("#header").offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > header) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });

  // .QR에 hover하면 #QR_popup와 body에 .active가 붙으면서 팝업창 활성화.
  $(".QR").hover(
    function () {
      $("#QR_popup img").addClass("active");
    },
    function () {
      $("#QR_popup img").removeClass("active");
    });
  $(".QR").hover(
    function () {
      $("body #background_wrap").addClass("active");
    },
    function () {
      $("body #background_wrap").removeClass("active");
    });

    //#project .flex .card_wrap:first-child:hover되면, #sidmool에 .on 붙히기
    $('#project .flex .card_wrap:first-child').hover(
      function(){ $('#sidmool').addClass('on') },
      function(){ $('#sidmool').removeClass('on') }
      )

  //offset이 #sec_web에 들어오면, 키프레임 애니메이션 실행시키기

  // 스크롤 시, 특정 px 밑까지 오면 이미지 변경되게.
  let image = $("#sec_intro .inner span:first-child").offset().top;

  window.addEventListener("scroll", function () {
    let currentScrollValue = this.document.documentElement.scrollTop;
    console.log(currentScrollValue);
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > image) {
      $("#sec_intro .inner span:first-child").addClass("hide");
      $("#sec_intro .inner span:last-child").removeClass("hide");
    } else {
      $("#sec_intro .inner span:first-child").removeClass("hide");
      $("#sec_intro .inner span:last-child").addClass("hide");
    }
  });

  // <a> data-target 스무스한 위치 이동</a>
  const direct_anchor = document.querySelectorAll("#header .flex.gnb a");

  for (const direct_anchors of direct_anchor){
    direct_anchors.addEventListener("click", function (e) {
      // 선택된 a의 dataset.target명의 offsetTop을 구하는 변수를 선언
      const scrollPosition = document.querySelector(
        this.dataset.target
      ).offsetTop;
      // scroll을 offsetTop으로 이동시킨다.
      e.preventDefault();
      // 기본 a태그의 디폴트값을 죽여버림.
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    });
  }
});
