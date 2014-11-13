// ajaxLoop.js
jQuery(function($){

/*
    $.fn.hoverEffect = function(event) {
	    return this.filter('#portfolio ul li').each(function() {
            var $element = $(this).find('img'),
                hoverTL = new TimelineLite({paused:true});
                hoverTL.to( $element, 1, {y:'+=100px'});
            $element.mouseover(function(){
                console.info('over');
                hoverTL.play();
            });
            $element.mouseleave(function(){
                hoverTL.reverse();
                console.info('out');
            });
        })
    };
*/


    $(".menu-work").click(function(e) {
        e.preventDefault();

        var animate_open = function(e, portfolio){
            var $portfolio = $('#portfolio ul'),
                $children = $portfolio.children('li'),
                $items_totalWidth = $portfolio.contentWidth() + 200,
                port_TL = new TimelineLite({onComplete:handleMouse});

            $portfolio.css({width: $items_totalWidth});
            port_TL.staggerTo($children, 0.3, {autoAlpha:1},0.2);


            var winW = $(this).width();
            console.log('window width = ' + winW );
            console.log('items total width = ' + $items_totalWidth );

            $('#portfolio ul li').hoverEffect();

             function handleMouse(){
            $('body').mousemove( function(event){
                var xPos = event.pageX,
                    widthDiff = ($items_totalWidth / winW) - 1,
                    movement = -xPos*widthDiff;
                $portfolio.css({marginLeft: movement });

              //  console.info('mouse posX = ' + xPos );
              //  console.info('width diff ratio = ' + widthDiff );
            });
            }



        }

        // This does the ajax request
        var ajax_request = $.ajax({
            type: "POST",
            dataType : "json",
            url: ajax_handler.ajaxurl,
            data: {
                action: 'portfolio_page_request',
                //postID : 63,
                postCommentNonce : ajax_handler.postCommentNonce
            },

            beforeSend: function(){
                loader = "<h1 id='loading'>LOADING</h1>";
                $('#portfolio').append(loader);
            },

            success: function (response) {
                if ( response.success ) {
                   //var $portfolio_wrap = $('#portfolio'),
                   //     $portfolio = $(response.html),
                   //     $port_item = $portfolio.children('li');

                    //$portfolio_wrap.empty();
                    //$portfolio_wrap.append($portfolio);
                    //animate_open($portfolio);
                    //var obj = $.parseJSON(response.data );
                    console.info('response = ' + response.data[0].img );
                    /*
                    var returnedObjects = eval(response);
                    var i = 0;
                    for (i = 0; i < returnedObjects.length; i++){
                        console.log('Time: ' + returnedObjects[i]);
                    }
                    */
                }
            },

            error: function (response) {
                console.log('error =' + response.error);
            }
        });

    });





});