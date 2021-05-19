// 'youtube iframe api' 구글 검색해서 사용가능한 api 가져온 것.

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>, id 속성 값이었기때문에 .player 앞의 내용 적지 않아도, 속성을 바로 찾을 수 있음.
  new YT.Player('player', {          //YT 유튜브 객체에 Player라는 메소드 실행
    videoId: '_FGUkxn5kZQ',          //최초 재생할 유튜브 영상 ID, 어떤 id값 가진 동영상인지
    playerVars: {                    //Vars = 'Variables'변수들.
      autoplay: true,          // 자동재생 유무
      loop: true,              // 반복재생 유무     
      playlist: '_FGUkxn5kZQ'  // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function(event) {       //준비가 되면 function()함수 실행, 이 함수 실행하는 인수로 동영상이 재생되는 상황 자체=event를 넘김
        event.target.mute()  //target= 실행되고 있는 영상을 의미. 즉 실행중인 영상을 음소거 하겠다는 뜻.
      }
    }
    });
}