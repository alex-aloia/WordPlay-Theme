// ajaxLoop.js
jQuery(function ($) {
    var createSVGimgs = function (jsonObj) {
        var container = d3.select("#portfolio")
            .append("ul")
            .attr("width", '100%')
            .attr("height", '100%'),
        li = container.selectAll("li")
            .data(jsonObj)
            .enter()
            .append("li")
            .attr('class', function (d) {
                return 'col-'+d.thumb_col;

            }),
        svg = li.append('svg'),
        filter = svg.append("defs")
            .append("filter")
            .attr("id", function (d, i){
                return 'filter_' + i;
            })
            .append("feColorMatrix")
            .attr('type', 'saturate')
            .attr('values', 0),
        img = li.append("img"),
        imgAttributes = img
            .attr("src", function (d) {
                return d.img;
            })
            .attr("width", function (d) {
                return d.img_w;
            })
            .style('filter', function(d, i){
                return 'url(#filter_' + i + ')';
            })
            .style('-webkit-filter', function(d, i){
                return 'url(#filter_' + i + ')';
            });

        li.on("mouseover", function(d,i){
            TweenLite.to( filter[0][i], 0.3, {attr:{"values":1}, ease:Linear.easeNone});
        });
        li.on("mouseout", function(d,i){
            TweenLite.to( filter[0][i], 0.3, {attr:{"values":0}, ease:Linear.easeNone});
        });

        var portTL = new TimelineLite({paused:true}),
            t3iLogo = d3.select('.main.tripl3infLogo');
        portTL.to(t3iLogo, 1, {autoAlpha:0});
        portTL.staggerTo( li[0], 0.8, {autoAlpha:1}, 0.15, 'stage1');
        portTL.staggerFrom(li[0], 0.8, {y:'+=300px'}, 0.15, 'stage1');
        portTL.play();
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