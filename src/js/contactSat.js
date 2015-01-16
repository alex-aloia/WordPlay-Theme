jQuery(function ($) {
    var contactSatellite = function(){
        contactBTN = d3.select('#contact_BTN'),
            satellite = d3.select('#satelliteContainer'),
            satWaves = d3.selectAll('#satWaves path'),

            icons_data = [
                'fa-facebook',
                'fa-envelope-o',
                'fa-linkedin'
            ];

        var createBlurFilter = function(container, id) {
            var filter = container.append("defs")
                    .append("filter")
                    .attr("id", id),

                blur = filter.append('feGaussianBlur')
                    .attr('in', 'SourceGraphic')
                    .attr('stdDeviation', '2');
        }

        createBlurFilter(satellite, 'blur');

        satWaves.attr('filter', "url('#blur')");

        icons = contactBTN
            .append('div')
            .attr('class', 'icons')
            .selectAll('i')
            .data(icons_data)
            .enter()
            .append('i')
            .attr('class', function(d){
                return 'fa ' + d;
            })


        waveTL = new TimelineMax({repeat:-1})
            .set(satWaves, {autoAlpha: 0})
            .staggerTo(satWaves[0], 3, {autoAlpha:0.8}, 1.5)
            .add('openedUp')
            .to(satWaves[0], 2, {autoAlpha:0});

        iconTL = new TimelineMax({paused:true})
            .set( icons[0], {transformOrigin: '50% 50%'})
            .from(icons[0][0], 0.8, {scale:0,autoAlpha:0}, 's1')
            .to(icons[0][0], 0.6, {x:'-=20', y:'+=110'}, 's1')

            .from(icons[0][1], 0.8, {scale:0,autoAlpha:0}, 's2-=0.6')
            .to(icons[0][1], 0.6, {x:'-=80', y:'+=75'}, 's2-=0.75')

            .from(icons[0][2], 0.8, {scale:0,autoAlpha:0}, 's3-=0.6')
            .to(icons[0][2], 0.6, {x:'-=110', y:'+=20'}, 's3-=0.6');

        contactBTN.on("mouseenter", function() {
            iconTL.play()
            waveTL.stop('openedUp');
        })
            .on("mouseleave", function(){
                iconTL.reverse(0)
                waveTL.play()
            });

        icons.on( "mouseenter", function(d, i){
            TweenLite.to(this, 0.5, {color:'#aaff00'});
        })
            .on( "mouseleave", function(d, i){
                TweenLite.to(this, 0.5, {color:'#666'});
            });


        satTL = new TimelineMax({repeat:-1, repeatDelay:0, yoyo:true})
            .set(contactBTN, {rotation: -33, transformOrigin:"100% 0%"})
            .to(contactBTN, 15, {rotation:-15, x:-10, y:-15, ease:Sine.easeInOut}, 's1');
        //.to(contactBTN, 10, {bezier:{type:"soft", curviness:1, values:[{x:0, y:50}, {x:50, y:0}]}, ease:Sine.easeInOut }, 's1')

      $("#contact_BTN .fa-envelope-o").click(function (e) {

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
              action: 'contact_page_request',
              postCommentNonce: ajax_handler.postCommentNonce
            },
            beforeSend: function () {
              loaderTL.play();
            },
            success: function (response) {
              if (response.success) {
                $('body').append('<div id="contactContainer">');
                ajaxInProg = true;
                console.log(response.data[0]);
                getContactPage(response.data);
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


      var getContactPage = function (jsonObj) {
//        alert(jsonObj);
        $('#contactContainer').append(jsonObj);
        TweenLite.to( $('#contactContainer'), 1, {autoAlpha:1});


      };

    }

   // contactSatellite()



});
