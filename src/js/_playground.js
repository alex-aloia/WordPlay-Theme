
$(function() {


    var triLoader = function(){
        var pieces = ['M 114.69,1 L 101.03,24.66 58.56,98.29 16.08,171.9 3.34,194.75 40,195 86.06,114.17 90.65,106.23 115.69,63.58 114.69,1 Z M 114.69,1',
                'M 114.5,1 L 128.16,24.66 170.63,98.29 213.11,171.9 226.85,195.75 171.84,163.96 143.13,114.17 138.54,106.23 114.5,64.58 114.5,1 Z M 114.5,1',
                'M 2.3,195.62 L 29.61,195.62 114.55,195.63 199.49,195.63 227,195.62 173.2,163.82 114.55,163.85 105.38,163.84 20.59,163.82 2.3,195.62 Z M 2.3,195.62'
        ];

        var triLoader = d3.select('body')
            .append('svg')
            .attr('id', 'triLoader')
            //.attr('viewBox', '0 0 430 400')
            .attr('preserveAspectRatio', 'xMidYMin meet')
            .attr('width', 430)
            .attr('height', 400);

        var defs = triLoader
            .append('def')
            .append('mask')
            .attr('id', 'triLoaderMask')
            .style('fill','#fff')
            .selectAll('path')
            .data(pieces)
            .enter()
            .append('path')
        .attr('d', function(d){
            return d;
        })

        var pieces = triLoader
            .append('g')
            .attr('id', 'triLoaderPieces')
            .style('mask', 'url(#triLoaderMask')
            .selectAll('path')
            .data(pieces)
            .enter()
            .append('path')
            .style('fill', 'red');

        var pathAttr = pieces
            .attr('d', function(d){
                return d;
            })

        var tri = d3.select('#triLoaderPieces')
            .attr("transform", 'translate(100, 80)');

  //      var mask = tri.node().cloneNode(true);
  //      defs.node().appendChild(mask);

//        var bb = triLoader[0][0].getBBox();
        var bb = pieces.node().getBBox();
//        console.log('loader width= '+ p1.width);

        var loaderTL = new TimelineMax({repeat:-1, repeatDelay: 1});
        loaderTL
            .from(pieces[0][0], 1, {opacity:0, x:'-'+bb.width, y:bb.height, ease:Power2.easeOut})
            .from(pieces[0][1], 1, {opacity:0, x:'-'+bb.width, y:'-'+bb.height, ease:Power2.easeOut}, 0.45)
            .set(pieces, {mask: ''})
            .from(pieces[0][2], 1, {opacity:0, x:bb.width, ease:Power2.easeOut}, 1)
            .to(triLoader, 1, {rotation:360,transformOrigin:"50% 50%", ease:Power2.easeOut}, 'stage2')
            .to(pieces[0][0], 1, {opacity:0, x:'-'+bb.width, y:bb.height, ease:Power2.easeOut}, 'stage2')
            .to(pieces[0][1], 1, {opacity:0, x:'-'+bb.width, y:'-'+bb.height, ease:Power2.easeOut}, 'stage2')
            .to(pieces[0][2], 1, {opacity:0, x:bb.width, ease:Power2.easeOut}, 'stage2')


//clone(triLoader)
  //      d3.select('body').append(triLoader);
//
//    var p = d3.select('#triLoader');
//    var p1 = d3.select('#triLoaderParts .p1'),
//        p2 = d3.select('#triLoaderParts .p2'),
//        p3 = d3.select('#triLoaderParts .p3');
//
//    var p1_bb = d3.select('#triLoaderParts .p1').node().getBBox();
//    console.log('w = ' + p1_bb.x);
//    console.log('h = ' + p1_bb.width);
//
////    loaderTL.set(p1, {x:'-'+p1_bb.width, y:p1_bb.height});
////    loaderTL.from(p, 1, {rotation:360, transformOrigin:"50% 50%", ease:Power2.easeOut});
//
//    loaderTL.from(p1, 1, {opacity:0, x:'-'+p1_bb.width, y:p1_bb.height, ease:Power2.easeOut})
//        .from(p2, 1, {opacity:0, x:'-=200px', y:'-=400px', ease:Power2.easeOut}, 0.45)
//        .from(p3, 1, {opacity:0, x:'+=400px', ease:Power2.easeOut}, 1);
//
    }



    triLoader();

});


