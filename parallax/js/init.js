(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".gnb > li > a").click(function(){
      var content = $(this).text();
      console.log(content);
      ga('send', 'event', 'category', 'clicked', content );
    });

    $('.collapsible-header').click(function(){
      var header = $(this).text();
      console.log(header);
      ga('send', 'event', 'description', 'clicked', header);
    })

    $('#download-button')

    // var options = [
    //   {selector: '.classFri', offset: 200, callback: 'Materialize.toast("기초/이론반", 1500, 'rounded' )' },
    //   {selector: '.classTue', offset: 200, callback: 'Materialize.toast("실습반", 1500, 'rounded' )' },
    // ];
    // Materialize.scrollFire(options);


  }); // end of document ready
})(jQuery); // end of jQuery name space
