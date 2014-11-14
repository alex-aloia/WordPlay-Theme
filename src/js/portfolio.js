$(function() {

/*    $.ajaxSetup({cache:false});
    $(".layer").click(function(){
        var post_link = $(this).attr("href");

        $("#single-post-container").html("content loading");
        $("#single-post-container").load(post_link);
    return false;
    });*/

    function modal_overlay(){
        overlay = $('#bgOverlay');
        var bg_TL = new TimelineLite({paused:true});
        bg_TL.set( overlay, {'display':'block'});
        bg_TL.to( overlay, 0.5, {'opacity':'0.6'});

        bgOverlay = function(){
            bg_TL.play();
        }

        overlay.click( function(){
            bg_TL.reverse();
        });
    }

    modal_overlay();

    $('h1').click( function(){
        bgOverlay();
    });

});
