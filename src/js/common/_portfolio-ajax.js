// ajaxLoop.js

    var initPortfolio = function(){

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
                        //logoTL.play();
                        //loaderTL.play();
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
    }


    var createSVGimgs = function (jsonObj) {
        var container = d3.select('body').append('div').attr('id', 'portfolio'),
            list = container.append("ul"),
            li = list.selectAll("li")
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
                })

        // set status of container to 'open'
        //container.data([{'status':'open'}]);
            //.enter()
        jQuery.data( document.body, "port_status", 'open' );

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
        portTL.staggerFrom(li[0], 0.75, {autoAlpha:0, y: '-=200px', ease: Expo.easeIn}, 0.15, 'stage1')

        layout();
        //loaderTL.repeat(0);
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
                info = d.title;

            $this.on('mouseout', null);
            $this.on('click', null);
            $this.append('div').attr('class', 'portInfo').html(info);
            li[0].splice(i, 1);

            portTL.staggerTo(li[0], 0.75, {autoAlpha: 0, y:'+=200px'}, 0.15)
                .set($('#portfolio'), {height: winH, overflow: 'hidden'})
                .to($this, 0.75, {left: '50%', top: '50%', xPercent: -50, yPercent: -50, width: imgW})

                // for left offset of center
                //.to($this, 0.75, {left: '50%', top: '50%', xPercent: -50, yPercent: -50, width: imgW, x: leftOffset})

        });
    };


    var createBackBtn = function(){
        closeBtn = d3.select('body').append('i').attr('id', 'portCloseBtn').attr('class', ' fa fa-chevron-left');
        var closeBtnTL = new TimelineMax()
                .to(closeBtn, 1, {autoAlpha:1})

        var regenPortfolio = function(){
            $('#portfolio').remove()
            initPortfolio()
        }

        var regenMainMenu = function(){
           alert('t')
            $('#portfolio').remove()
            mainMenuTL.restart();
        }

        closeBtn.on('click', function(){
            //alert( portContainer.data() )
            var portStat = jQuery.data( document.body, "port_status" );
            if(portStat == 'open'){
                console.log('portfolio open')
                closeBtnTL.to( $('#portfolio'), 1, {autoAlpha:0})
                closeBtnTL.addCallback(regenPortfolio);
                //$('#portfolio').remove();
            }
            else {
                console.log('portfolio close')
                closeBtnTL.to( $('#portfolio'), 1, {autoAlpha:0})
                closeBtnTL.addCallback(regenMainMenu);
            }
        })

    }


createBackBtn();

//closeBtn.on('click', function(){
//    portTL.to(container, 1, {autoAlpha:0});
//    closeBtn.remove();
//    initPortfolio();
//})
//closeBtn.on('click', function(){
//    portTL.to(container, 1, {autoAlpha:0});
//    closeBtn.remove()
//    mainMenuTL.play('menuOpen');
//    //TweenLite.to( $('#menu-primary-navigation li a'), 1, {autoAlpha:1} )
//})

