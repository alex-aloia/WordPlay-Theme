/*
* LOGO ANIMATION -- tripl3inf
 */
    var animateLogo_tripl3inf = function(){

        var container = d3.select('#intro_tripl3infLogo_wrap'),
            tripl3Logo = d3.select('#intro_tripl3infLogo'),
            letters = tripl3Logo.selectAll('#letters path'),
            dd_letters = tripl3Logo.selectAll('#desanddev path'),
            infSym = tripl3Logo.select('#infSym'),
            infPath = tripl3Logo.selectAll('#infSymPaths path'),
            defs = tripl3Logo.select("defs"),
            filter = defs.append("filter")
                .attr("id", 'glow'),
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
            infSymWhole = d3.selectAll('#infSymWhole path')
                .attr('filter', "url('#glow')");

        $('#intro_tripl3infLogo_wrap').center()

        logo_tripl3infTL = new TimelineMax()

        letters.each(function (d, i) {
            var pathLength = this.getTotalLength();
            logo_tripl3infTL.add(TweenLite.set(this, {strokeDasharray: pathLength, strokeDashoffset: pathLength}));
        });

        infPath.each(function (d, i) {
            var pathLength = this.getTotalLength();
            logo_tripl3infTL.add(TweenLite.set(this, {strokeDasharray: pathLength, strokeDashoffset: pathLength}));
        });

        logo_tripl3infTL
            .set(container, {display:'block'})
            .staggerTo(letters[0], 0.8, {autoAlpha:1, strokeDashoffset: 0, ease:Sine.easeIn}, 0.25)
            //.set(dd_letters[0], {transformOrigin:"50% 50%"})
            //.staggerTo(letters[0], 0.8, {fill:'#aaff00', ease:Sine.easeIn}, 0.25, '-=3')
            .addLabel('infSym', '-=2.5')
            .staggerTo(infPath[0], 0.8, {autoAlpha:1, strokeDashoffset: 0, ease:Sine.easeIn}, 0.25, 'infSym')
            .to(infSymWhole, 0.2, {autoAlpha:1}, 'infSym+=1.2')
            .to(blur, 1, {attr:{stdDeviation:7}}, 'infSym+=1.3')
            .staggerTo(dd_letters[0], 0.8, {autoAlpha:1, ease:Sine.easeIn}, 0.1, '-=2')

            //.staggerTo(dd_letters[0], 0.2, {fill: '#aaff00'}, 0.15, '-=1')
            .addLabel('fadeOut', '-=0.25')
            .staggerTo(letters[0], 0.6, {autoAlpha:0, ease:Sine.easeOut}, 0.25, 'fadeOut')
            .to(infSym, 0.6, {autoAlpha:0, ease:Sine.easeOut}, 'fadeOut+=1.1')
            .staggerTo(dd_letters[0], 1.5, {autoAlpha:0}, 0.1, 'fadeOut+=2')
            .set( $('#intro_tripl3infLogo_wrap'), {display:'none'});

        //logo_tripl3infTL.play()
      return logo_tripl3infTL;

    }
