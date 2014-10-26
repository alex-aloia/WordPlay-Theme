$(document).ready(function () {

    //     .attr("transform", "translate(10,10)");
    //.attr("width", "100px");
    //.attr("height", "100px")
    //.attr("preserveAspectRatio", "xMinYMin meet");

//    var totalLength = path.node().getTotalLength();
//    var totalLength = t3i_logo.node().getTotalLength();


    function t3iLogo_animate() {
        // graphic log
        var t3iLogo_p1 = d3.select("#t3iLogo_p1");
        t3iLogo_p2 = d3.select("#t3iLogo_p2");

        var animPath = function (path, time) {
            pathLength = path.node().getTotalLength();
            console.log('length= ' + pathLength);

            var pathTL = new TimelineLite({paused: true});
            pathTL.add(TweenLite.set(path.node(), {
                opacity: 1,
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
                onComplete: animate
            }));

            function animate() {
                pathTL.to(path.node(), 3, {opacity: 1}, 'stage1');
                pathTL.add(TweenLite.to(path.node(), time, {strokeDashoffset: 0}), 'stage1');
                pathTL.add(TweenLite.to(path.node(), 2, {stroke: '#222', delay: 0}));
                //pathTL.add( TweenLite.to(path.node, 2, {opacity:0.4,delay:0}));
                pathTL.play();
            };
        };

        animPath(t3iLogo_p1, 5);
        animPath(t3iLogo_p2, 5);
    }

    //t3iLogo_animate();

});




