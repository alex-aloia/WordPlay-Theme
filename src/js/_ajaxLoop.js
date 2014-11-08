// ajaxLoop.js
jQuery(function($){


    $(".menu-work").click(function(e) {
        e.preventDefault();
        // We'll pass this variable to the PHP function example_ajax_request
        //var postID = $(this).attr("id");

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
                $('#wrap_portfolio').append(loader);
//                return loader;
            },

            success: function (response) {
                if ( response.success === true ) {
                    var test2 = response.html ;
                    //loader = $('#loading');
                    //$('#ajax-response').remove(loader).append(response);
                    //$('#ajax-response').remove(loader);
                        //.append(test);
                  //  response = $(response);
    //                response.hide();
                    $('#wrap_porfolio').empty();
                    //var img = "<img src='" + response.url + "' />";
                    //$('#ajax-response').append(img);
                    $('#wrap_porfolio').append(test2);
    //                response.show();
                    //console.log('response =' + response);
                }
            },

            error: function (errorThrown) {
                console.log('error =' + errorThrown);
            }
        });

    });








});