// ajaxLoop.js
jQuery(function ($) {

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


    var json_attributes = [{
        "img": "http://dev.t3inf.com/content/uploads/tm-mobile-screenshot.jpg",
        "img_w": "300"
    }, {
        "img": "http://dev.t3inf.com/content/uploads/solo_cup_lrg.jpg",
        "img_w": "300"
    }, {
        "img": "http://dev.t3inf.com/content/uploads/camelPromo1_lrg.jpg",
        "img_w": "600"
    }, {
        "img": "http://dev.t3inf.com/content/uploads/skyline_lrg.jpg",
        "img_w": "300"
    }, {
        "img": "http://dev.t3inf.com/content/uploads/volcomposter_lrg.jpg",
        "img_w": "200"
    }, {
        "img": "http://dev.t3inf.com/content/uploads/uoh_lrg.jpg",
        "img_w": "300"
    }, {
        "img": "http://dev.t3inf.com/content/uploads/calliftJoomla_lrg.jpg",
        "img_w": "500"
    }, {"img": "http://dev.t3inf.com/content/uploads/bulbsonly_lrg.jpg", "img_w": "400"}];


    $(".menu-work").click(function (e) {
        e.preventDefault();
        /*
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
         */

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
                    jsonString = JSON.stringify(response.data);


                    console.log(jsonString);



                    var createSVGimgs = function (json) {
                        //var json_attributes = json;
                        var container = d3.select("#test").append("div")
                            .attr("width", '100%')
                            .attr("height", '100%');

                        var imgs = container.selectAll("img")
                            .data(json)
                            .enter()
                            .append("img");

                        var imgAttributes = imgs
                            .attr("src", function (d) {
                                return d.img;
                            })
                            .attr("width", function (d) {
                                return d.img_w;
                            });
                        //var imgAttrs = imgs.attr('src', function (d) { return d.src; });

                    }


                    createSVGimgs(json_attributes);
                    /*
                     $.each(response.data, function (i, value) {
                     var img = [], // array
                     width = response.data[i].img_w,
                     src = response.data[i].img;
                     console.log(response.data[i].img_w);
                     //                        var img_src = response.data[i].img;
                     img.push(src,width);
                     imgs.push(img);

                     });
                     */


//console.table( 'obj - ' + imgs2.img2.src );
                    //console.table( response.data );
                    //console.info( response.data[0].title );


//                    var theData = [ 1, 2, 3 ];


                    /*
                     var svg = d3.select("body").append("svg")
                     .attr("width", 960)
                     .attr("height", 500);

                     var filter = svg.append("defs")
                     .append("filter")
                     .attr("id", "blur")
                     .append("feGaussianBlur")
                     .attr("stdDeviation", 5);

                     d3.select("body").append("input")
                     .attr("type", "range")
                     .attr("min", 0)
                     .attr("max", 100)
                     .attr("value", 25)
                     .on("change", blur);

                     var image = new Image;
                     image.src = "/content/uploads/solo_cup_lrg-350x452.jpg";
                     image.onload = load;

                     function load() {
                     svg.append("image")
                     .attr("xlink:href", this.src)
                     .attr("width", "100%")
                     .attr("height", "100%")
                     .attr("filter", "url(#blur)");
                     }

                     function blur() {
                     filter.attr("stdDeviation", this.value / 5);
                     }


                     */


                    //var $portfolio_wrap = $('#portfolio'),
                    //     $portfolio = $(response.html),
                    //     $port_item = $portfolio.children('li');

                    //$portfolio_wrap.empty();
                    //$portfolio_wrap.append($portfolio);
                    //animate_open($portfolio);
                    //console.info('response = ' + response.data[0].img);
                }
            },

            error: function (response) {
                console.log('error =' + response.error);
            }
        });

    });


});