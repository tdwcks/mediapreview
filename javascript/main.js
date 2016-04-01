// =================================================================
// 	Mediapreview
// 	Global Javascript
// =================================================================

$( ".menu-trigger" ).on( "click", function() {
 	$('nav').toggleClass('active');
});

$(document).ready(function(){
    var player = $("#player_7256322");
        froogaloop = $f(player[0].id);
    
    player.mouseover(function(){
        froogaloop.api('play');
    }).mouseout(function(){
        froogaloop.api('pause');
    });
});

