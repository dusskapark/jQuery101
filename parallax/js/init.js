(function($){
  $(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init('a230e58b48b10ef26c3ab835c30cb138');

    var shareKakao = function () {
            // 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
            Kakao.Link.sendTalkLink({
              label: "[OneStore] 인앱SDK 및 검증 정책 업데이트 안내 인앱SDK로 Android 6.0에 완벽 대응하고 업데이트 검증으로 빠르게 출시하세요!",
              image: {
                src: "./img/kakao-touch-icon-150.png",
                width: "150px",
                height: "150px"
              },
              webButton: {
                text: "[OneStore] 업데이트 안내 보기",
                url: "http://skpla.net/UpgradeCenter" // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
              },
              fail: Materialize.toast('카카오톡 링크는 모바일 기기에서만 전송 가능합니다.', 4000, 'rounded')
              // webLink : {
              //   text: item.name,
              //   url: 'http://facebook.com/' + item.id
              // }
            });
            // Kakao.Link.cleanup();
            // 카카오 공유를 GA로 추적
            ga('send', 'event', "shareLink", "sendkakao", item.id );
          });
        }



    // Menu의 버튼을 눌렀는지 분석
    $(".gnb > li > a").click(function(){
      var content = $(this).text();
      console.log(content);
      ga('send', 'event', 'category', 'clicked', content );
    });

    // 상세 내용을 읽었는지 / 어떤 것을 읽었는지 분석
    $('.collapsible-header').click(function(){
      var header = $(this).text();
      console.log(header);
      ga('send', 'event', 'description', 'clicked', header);
    })

    // 신청하기 버튼을 어떤 것을 눌렀는지 분석
    $('.btn-large').click(function(){
      var id = $(this).parents('div[id]').attr('id');
      console.log(id);
      ga('send', 'event', 'enrollment', 'clicked', id);
    });

    // //스크롤 시 GA코드 보내기
    // function() {
    //   var options = [
    //     {selector: '.classFri', offset: 200, callback: 'Materialize.toast("기초/이론반", 1500, 'rounded' )' },
    //     {selector: '.classTue', offset: 200, callback: 'Materialize.toast("실습반", 1500, 'rounded' )' },
    //   ];
    //   Materialize.scrollFire(options);
    //
    // }

  }); // end of document ready
})(jQuery); // end of jQuery name space
