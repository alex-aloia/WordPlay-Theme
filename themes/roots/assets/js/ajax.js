/*

jQuery(function($){

  $(".layer").click(function(e) {
    e.preventDefault();
    // We'll pass this variable to the PHP function example_ajax_request
    //var postID = $(this).attr("id");

    // This does the ajax request
    var ajax_request = $.ajax({
      type: "POST",
      dataType : "json",
      url: ajax_handler.ajaxurl,
      data: {
        action: 'portfolio_ajax_request',
        postID : $(this).attr("id"),
        postCommentNonce : ajax_handler.postCommentNonce
      },

      beforeSend: function(){
        loader = "<h1 id='loading'>LOADING</h1>";
        $('#ajax-response').append(loader);
//                return loader;
      },

      success: function (response) {
        var test2 = '' + response.copy + '</p>';
        //loader = $('#loading');
        //$('#ajax-response').remove(loader).append(response);
        //$('#ajax-response').remove(loader);
        //.append(test);
        //  response = $(response);
//                response.hide();
        $('#ajax-response').empty();
        var img = "<img src='" + response.url + "' />";
        $('#ajax-response').append(img);
        $('#ajax-response').append(test2);
//                response.show();
        //console.log('response =' + response);
      },

      error: function (errorThrown) {
        console.log('error =' + errorThrown);
      }
    });

  });



});



*/

