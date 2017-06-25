


  $(document).ready(function() {
    $("a.ancLinks").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });
  });

jQuery(function(f){
    var element = f('#portfolio');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](1000);           
    });
});


$(window).scroll(function() {
var st = $(this).scrollTop();

$(".company").css({
  "transform" : "translate(0%, " + st /28 + "%"
});
$(".").css({
  "transform" : "translate(0%, " + st /50 + "%"
});

  });




