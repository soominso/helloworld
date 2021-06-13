const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기!
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간ms단위)

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
// function으로 fadeEl 각각들을 (직관적인 이름 지정한 것. hello 이런것도 가능) index 매개변수와 함께 로직 작동
fadeEls.forEach(function (fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션(순차적인 객체 데이터 적용));
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,      //0.7, 1.4, 2.1, 2.8 순서대로 등장...
    opacity: 1
  });
  // index는 제로베이스드 넘버에서 작성된 순서대로 애니메이션 읽음
});


// new Swiper(선택자,옵션);
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,            //자동재생여부
  loop: true                //4개의 슬라이드 끝나면 다음1번으로 반복재생 여부
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 값은 기본으로 적용되어있음
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  autoplay: {
    delay:5000  //milisecond 단위. 5000 = 5초
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //초기값 : 숨겨져 있지 않음= false, 어느 순간 true로 변환되도록 할당할 것
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion           //느낌표 뒤에 붙은 값을 반대로 만드는 것 = true로 변환
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
  } else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 애니메이션 옵션);
  gsap.to(    
    selector,       //선택자
    random(1.5, 2.5),   // 애니메이션 동작시간
    {  //옵션
      y: size,
      repeat: -1,           //자바스크립트에서 제공하는 무한반복 기능
      yoyo: true,            //한번 재생된 애니메이션을 다시 재생하게 하는 기능
      ease: Power1.easeInOut,    //gsap easing 함수값 확인가능한 페이지에서 ease in-out 복붙
      delay: random(0,delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



// FIND A STORE : scrollMagin CDN활용
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8         // 뷰포트 height 상 위치하는 지점의 수치 (0.8 = 80% 지점)
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

