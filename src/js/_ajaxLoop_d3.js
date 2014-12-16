// ajaxLoop.js
jQuery(function ($) {

    var contactSatellite = function(){
        contactBTN = d3.select('#contact_BTN'),
            satellite = d3.select('#satellite'),
            satWaves = d3.selectAll('#satWaves path'),
            iconGrp = d3.selectAll('#satIconGrp g')


        var waveTL = new TimelineMax({repeat:-1})
            .set(satWaves, {autoAlpha: 0})
            .staggerTo(satWaves[0], 3, {autoAlpha:0.8}, 1.5)
            .to(satWaves[0], 2, {autoAlpha:0});

        iconTL = new TimelineMax({paused:true})
            .set( iconGrp[0], {transformOrigin: '50% 50%'})
            .from(iconGrp[0][0], 0.8, {scale:0,autoAlpha:0}, 's1')
            .from(iconGrp[0][0], 0.6, {x:25, y:-100}, 's1')

            .from(iconGrp[0][1], 0.8, {scale:0,autoAlpha:0}, 's2-=0.6')
            .from(iconGrp[0][1], 0.6, {x:100, y:-100}, 's2-=0.75')

            .from(iconGrp[0][2], 0.8, {scale:0,autoAlpha:0}, 's3-=0.6')
            .from(iconGrp[0][2], 0.6, {x:100, y:-25}, 's3-=0.6');


        $('#contact_BTN').mouseenter( function(){
            iconTL.play();
        });

        $('#contact_BTN').mouseleave( function(){
            iconTL.reverse(0);
        });

        $('#satIconGrp g').mouseenter(function(e){
            TweenLite.to(e.target, 0.5, {fill:'green'});
        });

        $('#satIconGrp g').mouseleave(function(e){
            TweenLite.to(e.target, 0.5, {fill:'#11099E'});
        });
    }

    contactSatellite()




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
                    loaderTL.play();
                },
                success: function (response) {
                    if (response.success) {
                        $('#portfolio').empty();
                        ajaxInProg = true;
                        //console.log(response.data[0]);
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

        var portItems = $('#portfolio ul'),
            layout = function () {
                portItems.layout({
                    type: 'flow',
                    alignment: 'center',
                    resize: false,
                    hgap: 50,
                    vgap: 50,
                    items: li[0]
                });
                scrollH = portItems.prop('scrollHeight');
                portItems.parent().height(scrollH + 125);
            };


        $(window).resize(function () {
            layout();
        });

        var portTL = new TimelineLite({paused: true}),
            t3iLogo = d3.select('.main.tripl3infLogo');
        portTL.to(t3iLogo, 1, {autoAlpha: 0});
        portTL.staggerFrom(li[0], 0.75, {autoAlpha:0, y: '-=200px', ease: Expo.easeIn}, 0.15, 'stage1');

        layout();
        loaderTL.repeat(0);
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
                    winW = $(window).width(),
                    imgW = d.img_w,
                    leftOffset = '-' + (imgW / 2), // 50px top margin
                    info = d.content;

                $this.on('mouseout', null);
                $this.on('click', null);
                $this.append('div').attr('class', 'portInfo').html(info);
                li[0].splice(i, 1);
                portTL.staggerTo(li[0], 0.75, {autoAlpha: 0, y:'+=200px'}, 0.15);
                portTL.set($('#portfolio'), {height: winH, overflow: 'hidden'});
                portTL.to($this, 0.75, {left: '50%', top: '50%', xPercent: -50, yPercent: -50, width: imgW, x: leftOffset});
            });
    };


});