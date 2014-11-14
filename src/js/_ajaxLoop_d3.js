// ajaxLoop.js
jQuery(function ($) {

    var createSVGimgs = function (jsonObj) {
        var container = d3.select("#portfolio")
            .append("ul")
            .attr("width", '100%')
            .attr("height", '100%');

        var li = container.selectAll("li")
            .data(jsonObj)
            .enter()
            .append("li");

        var img = li.append("img");

        var imgAttributes = img
            .attr("src", function (d) {
                return d.img;
            })
            .attr("width", function (d) {
                return d.img_w;
            });
    }

    $(".menu-work").click(function (e) {
        e.preventDefault();
        ajaxInProg = false;
       if ( ajaxInProg === true ){
           return;
       }
        else {
           // This does the ajax request
           var ajax_request = $.ajax({
               type: "POST",
               dataType: "json",
               url: ajax_handler.ajaxurl,
               data: {
                   action: 'portfolio_page_request',
                   //postID : 63,
                   postCommentNonce: ajax_handler.postCommentNonce
               },

               beforeSend: function () {
                   loader = "<h1 id='loading'>LOADING</h1>";
                   $('#portfolio').append(loader);
               },

               success: function (response) {
                   if (response.success) {
                       $('#portfolio').empty();
                       ajaxInProg = true;

//                  console.log(response.data[0]);
                       createSVGimgs(response.data);
                   }
               },

               complete: function () {
                   ajaxInProg = false;
               },

               error: function (response) {
                   console.log('error =' + response.error);
               }
           });
       }

    });


});