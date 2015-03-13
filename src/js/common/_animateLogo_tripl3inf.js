/*
* LOGO ANIMATION -- tripl3inf
 */
    var animateLogo_tripl3inf = function(){

      var logo_tripl3infTL = new TimelineLite();

      var container = d3.select('.logo_tripl3inf'),
            tripl3Logo = container.selectAll('.logo-tripl3inf-wrap'),
            letters = tripl3Logo.selectAll('.logo-tripl3inf-letters path'),
            dd_letters = tripl3Logo.selectAll('.logo-tripl3inf-desanddev path'),
            infSym = tripl3Logo.selectAll('.logo-tripl3inf-infsym'),
            infPath = tripl3Logo.selectAll('.logo-tripl3inf-infsympaths path').style('mask', 'url(#logo-tripl3inf-defs)'),
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
            infSymWhole = d3.selectAll('.logo-tripl3inf-infsymwhole')
                .attr('filter', "url('#glow')");


        TweenLite.set(letters, {drawSVG:0})
        TweenLite.set(infPath, {drawSVG:0})


        logo_tripl3infTL
            .set(container, {display:'block', autoAlpha: 1})
            .staggerTo(letters[0], 0.8, {autoAlpha:1, drawSVG:'100%', ease:Sine.easeIn}, 0.25)
            .set(dd_letters[0], {transformOrigin:"50% 50%"})
            .addLabel('infSym', '-=2.5')
            .staggerTo(infPath[0], 0.8, {autoAlpha:1, drawSVG:'100%', ease:Sine.easeIn}, 0.25, 'infSym')
            .to(infSymWhole, 0.2, {autoAlpha:1}, 'infSym+=1.2')
            .to(blur, 1, {attr:{stdDeviation:5}}, 'infSym+=1.3')
            .staggerFrom(dd_letters[0], 0.8, {autoAlpha:0, ease:Sine.easeIn}, 0.1, '-=2')

            //.addLabel('fadeOut', '-=0.25')
            //.staggerTo(letters[0], 0.6, {autoAlpha:0, ease:Sine.easeOut}, 0.25, 'fadeOut')
            //.to(infSym, 0.6, {autoAlpha:0, ease:Sine.easeOut}, 'fadeOut+=1.1')
            //.staggerTo(dd_letters[0], 1.5, {autoAlpha:0}, 0.1, 'fadeOut+=2')
            //.set( container, {display:'none'});

      return logo_tripl3infTL;

    }

