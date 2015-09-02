(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

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
