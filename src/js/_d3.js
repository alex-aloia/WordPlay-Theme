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



function aaaLogo() {

    var logo = d3.select("#logo_alex");
//    var a1 = d3.select('#a1'),
//        a1_1 = d3.select('#a1_1'),
//        a1_2 = d3.select('#a1_2'),
//        a1_3 = d3.select('#a1_3'),
//        l1 = d3.select('#l1'),
////      e1 = d3.select('#e1'),
//        el_1 = d3.select('#e1_1'),
//        el_2 = d3.select('#e1_2'),
//        el_3 = d3.select('#e1_3'),
//        el_4 = d3.select('#e1_4'),
//    x_1 = d3.select('#x_1'),
//    x_2 = d3.select('#x_2'),
//        a1_1 = d3.select('#a2_1'),
//        a1_2 = d3.select('#a2_2'),
//        a1_3 = d3.select('#a2_3'),
//        o_1 = d3.select('#o_1'),
//        o_2 = d3.select('#o_2'),
//        o_3 = d3.select('#o_3'),
//    i = d3.select('#i');


    var logoTL = new TimelineLite({paused:true});

   logoTL.from(a1_1, 1, {x: '-=80', y: '+=140', autoAlpha:0})
   .from(a1_2, 1, {x: '-=80', y: '-=140'},"-=0.1")
   .from(a1_3, 1, {x: '+=108'}, '-=0.1')
   .from(l1, 1, {x: '-=80', y:'-=119', autoAlpha:0})
   .from(e1_1, 1, {x: '-=38', y:'+=62', autoAlpha:0})
   .from(e1_2, 1, {x: '+=90'})
   .from(e1_3, 1, {x: '-=68', y:'-=117'})
   .from(e1_4, 1, {x: '-=44', y:'+=77'})
   .from(x_1, 1, {x: '-=120', y:'+=144'})
   .from(x_2, 1, {x: '-=66', y:'-=92'});

    logoTL.from(a2_1, 1, {x: '-=80', y: '+=140', autoAlpha:0})
    .from(a2_2, 1, {x: '-=70', y: '-=140'},"-=0.1")
    .from(a2_3, 1, {x: '+=108'}, '-=0.1')
    .from(l2, 1, {x: '-=80', y:'-=119', autoAlpha:0})
    .from(i, 1, {x: '-=82', y:'+=119', autoAlpha:0});

    logoTL.from(a3_1, 1, {x: '+=90', autoAlpha:0})
    .from(a3_2, 1, {x: '-=60', y: '+=119'})
    .from(a3_3, 1, {x: '-70', y: '-=119'});

//    .from(o_3, 1, {x: '+=70', y: '+=118', autoAlpha:0})
//    .from(o_2, 1, {x: '-=135'})
//        .from(o_1, 1, {x: '+=68', y: '-=118'});


    function clone(selector) {
        var node = d3.select(selector).node();
        return d3.select(node.parentNode.insertBefore(node.cloneNode(true),
            node.nextSibling)).attr('id', 'test');
    }


    //clone(a1_3);

    var dispatch = d3.dispatch("start");
    function show() {
        logo.style('display','block');
        logoTL.play();

    }
    dispatch.on("start", show() );


//
//    TweenLite.from(l1_1.node, 2, {x: '-=65', y:'-=118'});});
}




$(window).load(function() {
    aaaLogo();
});


