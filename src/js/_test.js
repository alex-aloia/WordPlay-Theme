$(document).ready(function () {



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


    TweenLite.to( filter, 5, {attr:{"stdDeviation":0}, ease:Linear.easeNone});



     var draw = SVG('canvas').size(500, 500);
     image = draw.image('/content/themes/custom/assets/img/volcomposter_lrg.jpg');

     var hueRotate;
     image.filter(function(add) {
     hueRotate = add.colorMatrix('saturate', 0)
     })

     // hueRotate.animate(3000).attr('values', 1);
     TweenLite.to( hueRotate.node, 5, {attr:{'values':1}, ease:Linear.easeNone});
     console.log(hueRotate);
  */


    //image.filter(function(add) {
    //    filter = add.colorMatrix('saturate', 0);
    //    TweenLite.to( filter, 2, {'colorMatrix[1]':1});
    //})

//    hueRotate.animate(3000).attr('colo', 360)






//    $('#test-list').scrollingCarousel();

    //var $wrap    = $(".scroll-container"),
    //    $container    = $(".scroll-container > ul"),
    //    wrapW    = $wrap.outerWidth(),
    //    wrapSW   = $wrap[0].scrollWidth,
    //    wDiff  = (wrapSW/wrapW)-1,  // widths difference ratio
    //    mPadd  = 10,  // Mousemove Padding
    //    damp   = 50,  // Mousemove response softness
    //    mousePosX     = 0,   // Real mouse position
    //    mousePosX_mod    = 0,   // Modified mouse position
    //    posX   = 0,
    //    mmAA   = wrapW-(mPadd*2), // The mousemove available area
    //    mmAAr  = (wrapW/mmAA);    // get available mousemove fidderence ratio
    //
    //$wrap.mousemove(function(e) {
    //    mousePosX = e.pageX - this.offsetLeft;
    //    mousePosX_mod = Math.min( Math.max(0, mousePosX-mPadd), mmAA ) * mmAAr;
    //});
    //
    //setInterval(function(){
    //    posX += (mousePosX_mod - posX) / damp; // zeno's paradox equation "catching delay"
    //    $container.css({marginLeft: -posX*wDiff });
    //}, 10);


});

