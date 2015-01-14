// ajaxLoop.js
jQuery(function ($) {
    var triLoader = function () {
        var maskPath = ['M340.648,327.443c41.156-72.031,82.364-144.136,123.791-216.631C445.669,78.3,426.86,45.712,407.989,13 C297.888,205.691,189.829,394.704,80.56,586.15h111.561C241.685,499.391,290.574,414.599,340.648,327.443z',
                'M462.251,107.022c0.01,0.016,0.477,0.825,0.477,0.825L408.667,206c0.139,0.24,1,1.875,1.139,2.114 c58.072,100.575,109.146,187.112,166.022,285.281c-0.081,0-0.161,0-0.242,0c17.947,31.08,35.775,61.945,53.537,92.691h109.833',
                'M356.236,493.587c-17.639,29.646-38.069,62.088-56.111,92.562h333.031 c-17.762-30.746-35.59-61.369-53.537-92.449C501.798,493.7,429.979,493.587,356.236,493.587z'
            ],
            line = [
                'M 107.5,635.5 122.715,609.048 459.5,23.5',
                'M 359.5,23.5 711.5,635.5',
                'M 752.5,540.5 289.5,540.5 277.5,540.5'
            ],
            wholePath = 'M192.121,586.15c71.958-125.962,142.494-247.772,217.302-378.693 c58.245,100.882,109.426,187.598,166.438,286.001c-77.923,0-145.805,0.129-219.625,0.129 c-17.639,29.646-38.069,62.088-56.111,92.562h438.864C628.248,394.281,519.145,205.682,407.989,13 C297.888,205.691,189.829,394.704,80.56,586.15H192.121z',

            triLoaderContainer = d3.select('body')
                .append('svg')
                .attr('id', 'triLoader')
                .attr('viewBox', '0 0 2000 2000')
                .attr('preserveAspectRatio', 'xMidYMin meet')
                .attr('width', 500)
                .attr('height', 500),

            triLoader = triLoaderContainer.append('g')
                .attr("transform", 'translate(100, 80)'),

            defs = triLoader.append('defs'),

            mask = defs.selectAll("mask")
                .data(maskPath)
                .enter()
                .append('mask')
                .attr('id', function (d, i) {
                    return 'mask_p' + i;
                })
                .style('fill', '#fff')
                .append('path')
                .attr('d', function (d) {
                    return d;
                }),

            filter = defs
                .append('filter')
                .attr('id', 'filter'),

            offset = filter.append('feOffset')
                .attr('result', 'offset_output')
                .attr('in', 'SourceGraphic')
                .attr('dx', '0')
                .attr('dy', '0'),

            blur = filter.append('feGaussianBlur')
                .attr('result', 'blur_output')
                .attr('in', 'offset_output')
                .attr('stdDeviation', '0'),

            blend = filter.append('feBlend')
                .attr('in', 'SourceGraphic')
                .attr('in2', 'blur_output')
                .attr('mode', 'normal'),

            outline = triLoader
                .append('path')
                .attr('d', wholePath)
                .attr('id', 'outline')
                .style('fill', '#aaff00')
                .attr('filter', 'url(#filter)')
                .style('visibility', 'hidden'),

            pathGrp = triLoader.append('g')
                .attr('id', 'triLoaderPieces'),

            paths = pathGrp.selectAll('path')
                .data(line)
                .enter()
                .append('path')
                .attr('d', function (d) {
                    return d;
                })
                .attr('mask', function (d, i) {
                    return 'url(#mask_p' + i + ')';
                })
                .attr("stroke-width", "100")
                .attr("fill", "none");

        loaderTL = new TimelineMax({paused:true, repeat: -1});

        paths.each(function (d, i) {
            var pathLength = this.getTotalLength();
            loaderTL.add(TweenLite.set(this, {strokeDasharray: pathLength, strokeDashoffset: pathLength}));
        });

        loaderTL.set(paths[0][0], {autoAlpha: 0})
            //.set(triLoaderContainer, {display: 'block'})
            .to(paths[0][0], 0.6, {autoAlpha: 1}, 'stage1')
            .to(paths[0][0], 0.6, {strokeDashoffset: 0, ease:Power2.easeIn}, 'stage1')
            .to(paths[0][1], 0.8, {strokeDashoffset: 0, ease:Power1.easeInOut}, '-=0.2')
            .to(paths[0][2], 0.6, {strokeDashoffset: 0, ease:Power2.easeOut}, '-=0.2')
            .set(outline, {autoAlpha: 1})
            //loaderTL.to(paths[0], 1, {stroke:'#666'});
            .to(blur, 1, {attr: {stdDeviation: 20}})
            .to(triLoader, 1, {autoAlpha: 0}, '-=0.25')
            //.set(triLoaderContainer, {display: 'none'});

    };

    triLoader();
});