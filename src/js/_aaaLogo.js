pathTL = new TimelineLite({paused: true, delay: 0.2});

var animPath = function (path, time, delay) {

    pathLength = path.length();
    function animate() {
        pathTL.add(TweenLite.to(path.node, time, {strokeDashoffset: 0, delay: delay}));
        //    pathTL.add( TweenLite.to(t3iTxt.node, 1.5, {opacity:0,delay:3}) );
        pathTL.play();
    }

    pathTL.add(TweenLite.set(path.node, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        onComplete: animate
    }));
};

$(document).ready(function() {
    //d3.xml("content/themes/roots/assets/svg/aaaLogo-for_SVG.svg", "image/svg+xml", function (xml) {
    //    var importedNode = document.importNode(xml.documentElement, true);
    //    document.body.appendChild(importedNode);
    //    d3.select("#aaaLogo_wrap").node().appendChild(importedNode);

//        var loadSVG = function(file, container){
//            d3.xml( file, "image/svg+xml", function (xml) {
//                var importedNode = document.importNode(xml.documentElement, true);
//                document.body.appendChild(importedNode);
//                d3.select(container).node().appendChild(importedNode);
//            });
//        };

//        loadSVG("content/themes/roots/assets/svg/aaaLogo-for_SVG.svg", "#aaaLogo_wrap");

  //  var letters = d3.select("#letters");
  //  letters.attr({fill:'red'});
//d3.select("body").append("svg").append(letters);

    //d3.select("#aaaLogo").select("mask").select("path").attr({fill:'white'});

        function animate_aaaLogo() {
            var logo = d3.select("#aaaLogo")
                logoTL = new TimelineLite({paused:true});
//            .attr("transform", "translate(750, 20) scale(.5)")

            logoTL.from(a1_1, 0.7, {x: '-=80', y: '+=140', autoAlpha:0, ease:Power2.easeIn})
            .from(a1_2, 0.4, {x: '-=80', y: '-=140', ease:Power1.easeInOut}, '-=0.05')
            .from(a1_3, 0.4, {x: '+=108', ease:Power2.easeOut})
            .from(l1, 0.8, {x: '-=70', y:'-=119', autoAlpha:0, ease:Power2.easeOut}, '-=0.3')
            .add('e')
            .from(e1_1, 0.3, {x: '-=38', y:'+=62', autoAlpha:0, ease:Power2.easeIn}, 'e-=0.5')
            .from(e1_2, 0.3, {x: '+=90'}, 'e-=0.1')
            .from(e2_1, 0.3, {x: '-=68', y:'-=117'}, 'e+=0.2')
            .from(e2_2, 0.2, {x: '-=44', y:'+=77', ease:Power2.easeOut})
                .add('x')
            .from(x_1_2, 0.8, {x: '-=95', y:'+=144', autoAlpha:0, ease:Power2.easeInOut}, 'x-=0.2')
            .from(x_1_1, 0.8, {x: '-=66', y:'-=92', autoAlpha:0, ease:Power2.easeInOut}, 'x+=0.1')
                .add('a2')
            .from(a_2_1, 0.5, {x: '-=80', y: '+=140', autoAlpha:0, ease:Power2.easeInOut}, 'a2-=0.4')
            .from(a_2_2, 0.4, {x: '-=80', y: '-=140'}, 'a2+=0.1')
            .from(a_2_0, 0.4, {x: '+=108', ease:Power2.easeOut}, 'a2+=0.4')
            .from(l2, 0.5, {x: '-=75', y:'-=119', autoAlpha:0, ease:Power2.easeInOut}, '-=0.3')
                .add('o')
            .from(o_3, 0.4, {x: '+=70', y: '+=118', autoAlpha:0, ease:Power2.easeIn}, 'o-=0.2')
            .from(o_2, 0.4, {x: '-=135', ease:Power1.easeInOut}, 'o+=0.15')
            .from(o_1, 0.5, {x: '+=68', y: '-=118', ease:Power4.easeOut}, 'o+=0.5')
            .from(i_1_1, 0.5, {x: '-=55', y:'+=94', autoAlpha:0}, '-=0.3')
            .from(i_2_1, 1, {x: '-=150', autoAlpha:0, ease:Power4.easeInOut}, '-=0.7')
                .add('a3')
            .from(a3_1_1, 0.4, {x: '+=90', autoAlpha:0, ease:Power2.easeInOut}, 'a3-=0.6')
            .from(a3_2_1, 0.2, {x: '-=70', y: '+=119'})
            .from(a3_2_2, 0.6, {x: '-70', y: '-=119', ease:Power4.easeOut});
            var dispatch = d3.dispatch("start");
            function show() {
                logo.style('display','block');
                logoTL.play();
            }
            dispatch.on("start", show() );

        }

  //  animate_aaaLogo();


//    });
});




