// ajaxLoop.js
jQuery(function ($) {

    var triLoader = function(){
        var pieces = ['M 114.69,1 L 101.03,24.66 58.56,98.29 16.08,171.9 3.34,194.75 40,195 86.06,114.17 90.65,106.23 115.69,63.58 114.69,1 Z M 114.69,1',
            'M 114.5,1 L 128.16,24.66 170.63,98.29 213.11,171.9 226.85,195.75 171.84,163.96 143.13,114.17 138.54,106.23 114.5,64.58 114.5,1 Z M 114.5,1',
            'M 2.3,195.62 L 29.61,195.62 114.55,195.63 199.49,195.63 227,195.62 173.2,163.82 114.55,163.85 105.38,163.84 20.59,163.82 2.3,195.62 Z M 2.3,195.62'
        ];

        var triLoader = d3.select('body')
            .append('svg')
            .attr('id', 'triLoader')
            .attr('viewBox', '0 0 860 800')
            .attr('preserveAspectRatio', 'xMidYMin meet')
            .attr('width', 430)
            .attr('height', 400)
            .attr("transform", 'translate(160, 140)');

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
        var bb = pieces.node().getBBox();

       loaderTL = new TimelineMax({repeat:-1, repeatDelay: 1});
        loaderTL
            .from(pieces[0][0], 1, {opacity:0, x:'-'+bb.width, y:bb.height, ease:Power2.easeOut})
            .from(pieces[0][1], 1, {opacity:0, x:'-'+bb.width, y:'-'+bb.height, ease:Power2.easeOut}, 0.45)
            .from(pieces[0][2], 1, {opacity:0, x:bb.width, ease:Power2.easeOut}, 1)
            .set(tri, {mask: '', delay:0.8}, 'out')
            .to(tri, 1, {rotation:360,transformOrigin:"50% 50%", ease:Power2.easeOut}, 'stage2')
            .to(pieces[0][0], 1, {opacity:0, x:'-'+bb.width, y:bb.height, ease:Power2.easeOut}, 'stage2')
            .to(pieces[0][1], 1, {opacity:0, x:'-'+bb.width, y:'-'+bb.height, ease:Power2.easeOut}, 'stage2')
            .to(pieces[0][2], 1, {opacity:0, x:bb.width, ease:Power2.easeOut}, 'stage2')

        testBtn = $('#portfolio').after('h1').html('test!!!');
        $('body').click( function(e){
            loaderTL.play('out')
            loaderTL({repeat:0})
                        loaderTL.stop( )
        })

    }




    $(".menu-work").click(function (e) {
        e.preventDefault();
        ajaxInProg = false;
        if (ajaxInProg === true) {
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
                    triLoader();
//                    loader = "<h1 id='loading'>LOADING</h1>";
//                    $('#portfolio').append(loader);
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


    var createSVGimgs = function (jsonObj) {
        var container = d3.select("#portfolio")
                .append("ul"),
            li = container.selectAll("li")
                .data(jsonObj)
                .enter()
                .append("li")
                .style('width', function (d) {
                    return d.thumb_w + 'px';

                }),
            svg = li.append('svg'),
            filter = svg.append("defs")
                .append("filter")
                .attr("id", function (d, i) {
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
                .style('filter', function (d, i) {
                    return 'url(#filter_' + i + ')';
                })
                .style('-webkit-filter', function (d, i) {
                    return 'url(#filter_' + i + ')';
                });

        var container = $('#portfolio ul'),
            layout = function () {
                container.layout({
                    type: 'flow',
                    alignment: 'center',
                    resize: false,
                    hgap: 50,
                    vgap: 50,
                    items: li[0]
                });
                scrollH = container.prop('scrollHeight');
                container.parent().height(scrollH + 125);
            }

        layout();

        $(window).resize(function () {
            layout();
        });

        var portTL = new TimelineLite({paused: true}),
            t3iLogo = d3.select('.main.tripl3infLogo');
        portTL.to(t3iLogo, 1, {autoAlpha: 0});
        portTL.staggerTo(li[0], 0.75, {autoAlpha: 1, ease: Expo.easeIn}, 0.15, 'stage1');
        portTL.staggerFrom(li[0], 0.75, {y: '-=200px', ease: Expo.easeIn}, 0.15, 'stage1');
        //portTL.staggerTo(filter[0], 0.2, {attr: {"values": 1}}, 0.15);
        //portTL.staggerTo(filter[0], 0.2, {attr: {"values": 0}}, 0.15);
        portTL.play();

        li.on('mouseover', function (d, i) {
            TweenLite.to(filter[0][i], 0.3, {attr: {"values": 1}, ease: Linear.easeNone});
        })
        .on('mouseout', function (d, i) {
            TweenLite.to(filter[0][i], 0.3, {attr: {"values": 0}, ease: Linear.easeNone});
        })
        .on('click', function (d, i, e) {
            // spatial calculations
            var $this = d3.select(this),
                domEl = li[0][i],
                winH = $(window).height(),
                centerH = (winH / 2),
                winW = $(window).width(),
                centerW = (winW / 2),
                thumbW = $(domEl).width(),
                thumbH = $(domEl).height(),
                imgW = d.img_w,
                imgH = (thumbH / thumbW) * imgW,
                topOffset = ((winH - imgH) / 2) - 100, // 50px top margin
                posX = centerW - imgW,
                info = d.content;

            $this.on('mouseout', null);
            $this.on('click', null);
            $this.append('div').attr('class', 'portInfo').html(info);
            li[0].splice(i, 1);
            portTL.staggerTo(li[0], 0.75, {autoAlpha: 0, y:'+=200px'}, 0.15);
            portTL.set($('#portfolio'), {height: winH, overflow: 'hidden'});
            //portTL.set(li, 0.8, {display: 'none'});
            //portTL.set($this, {position: 'absolute'});
            //portTL.to( $this, 1, {top:centerH});
            portTL.to($this, 0.75, {left: posX, top: topOffset, width: imgW});

            /*
            console.info('img max width = ' + d.img_w);
            console.info('port margin = ' + portMargin);
            console.log('window height = ' + winH);
            console.log('img height = ' + thumbH);
            console.log('img width = ' + imgW);
            console.log('img height = ' + imgH);
            console.log('img top offset = ' + topOffset);
            console.log('center W = ' + centerW);
            console.log('item W = ' + thumbW);
            console.log('item H = ' + posX);
            */
        });
    }


});