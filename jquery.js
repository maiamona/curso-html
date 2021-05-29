$(document).ready(function(){
    $('#opacite').click(function(){
        $('#div1').fadeTo('slow', 0.15);
        $('#div2').fadeTo('slow', 0.4);
        $('#div3').fadeTo('slow', 0.7);
    });
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
      });
      $("#anime").click(function(){
        $("#boneco").animate({bottom: '50px'});
        $("#boneco").animate({left: '250px', opacity: '0.5', height: '150px', width: '150px'});
      });
      $("#btn").click(function(){
        var div= $('#bt');
        div.animate({height: '300px', opacity: '0.4'}, 'slow');
        div.animate({width: '300px', opacity: '0.8'}, 'slow');
        div.animate({height: '100px', opacity: '0.4'}, 'slow');
        div.animate({width: '100px', opacity: '0.8'}, 'slow'); 
    });
    $("#stop").click(function(){
        var div= $('#bt');
        div.stop();
      });
      $("#ide").click(function(){
          var paragrafo=$("#p");
          paragrafo.hide("slow", function(){
          alert("The paragraph is now hidden");
        }); 
      });
      $('#td').click(function(){
        $("#pag").css("color", "red").slideUp(2000).slideDown(2000);
      });
      $('#ap').click(function(){
        $("#pag").empty();
      });
      $('#apa').click(function(){
        $('h1, h2, #n').addClass('blue');
        $('div').addClass('important');
      });
      $('#bc').click(function(){
$('#pc').css({'background-color':'yellow', 'font-size': '200%'});
      });
      $("li").not('.m').css({"color": "red", "border": "2px solid red"});
});