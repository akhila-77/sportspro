$("#heading").hover(
	function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	}
);

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

$(document).ready(function(){
  $(".hideme").click(function(){
    $(".aboutme1").slideToggle("slow");
  });
});

$(document).ready(function(){
  $(".hideme1").click(function(){
    $(".aboutme2").slideToggle("slow");
  });
});

function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',2);
      $active.fadeOut(1500,function(){
	  $active.css('z-index',1).show().removeClass('active');
          $next.css('z-index',3).addClass('active');
      });
    }

$(document).ready(function(){
// run every 7s
setInterval('cycleImages()', 2000);
})