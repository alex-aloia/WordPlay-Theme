
  var animateLogo_aaa = function(){
    var maskPath = [
        //A1
        'M 33.85,54.71 C 31.98,57.85 29.81,61.3 27.89,64.54 L 74.5,64.54 C 62.74,44.16 51.15,24.13 39.35,3.67 27.63,24.17 16.13,44.29 4.5,64.67 L 16.35,64.67 C 24.02,51.24 31.53,38.27 39.5,24.32 45.69,35.03 51.12,44.24 57.18,54.69 48.9,54.69 41.69,54.71 33.85,54.71 Z M 33.85,54.71',
        //L1
        'M 51.3,13.67 C 61.28,30.84 71.08,47.84 80.84,64.67 84.73,64.67 88.36,64.67 92.3,64.67 82.32,47.5 72.52,30.49 62.76,13.67 58.87,13.67 55.28,13.67 51.3,13.67 Z M 51.3,13.67',
        //E1
        'M 114.94,43.86 C 111.88,49.5 108.78,54.52 105.41,60.29 103.48,57.04 100.2,51.53 100.2,51.53 L 100.18,51.5 95.17,43.19 89.42,33.67 100.78,33.67 115.5,24.67 74.94,24.67 C 84.95,42 95.35,59.55 105.41,76.67 111.84,65.53 118.16,55.13 124.5,43.86 L 114.94,43.86 Z M 114.94,43.86',
        'M 94.17,44.19 L 99.18,52.5 115.5,24.67 101.68,32.37 94.17,44.19 Z M 94.17,44.19',
        //X1
        'M142.497,63.569c0.25,0.434,0.488,0.848,0.693,1.21H151l3.109,0.02l-0.547-0.963 c-1.619-2.804-4.126-7.233-6.442-11.343l-12.079-21.266c-1.054-1.796-2.892-4.932-3.9-6.668h-10.803L142.497,63.569z',
        'M135.84,52.23c0,0,0.021,0.037,0.04,0.066l5.595-9.85c-0.005-0.01-0.015-0.026-0.015-0.026 s1.88-3.289,4.498-7.866l12.431-21.884H147.27c-1.477,2.499-3.474,5.961-5.386,9.3l-19.217,33.833 c-3.775,6.712-8.167,14.524-11.167,19.867h11.06C126.89,68.15,135.84,52.23,135.84,52.23z',
        //A2
        'M171.53,64.6c15.82,0.04,31.111,0.04,46.97,0.04c-11.92-20.47-23.57-40.55-35.45-60.97 c-10.3,17.94-30.55,53.52-30.55,53.52l4.53,7.48l2.54-0.02c7.75-13.48,15.51-26.95,23.53-40.9 c6.221,10.76,12.09,20.82,18.18,31.32h-24.059C175.34,58.22,173.5,61.28,171.53,64.6z',
        //L2
        'M236.5,64.67c-10.02-17.28-19.82-34.21-29.54-51c-3.89,0-7.56,0-11.46,0c9.93,17.18,19.73,34.11,29.54,51 C228.84,64.67,232.471,64.67,236.5,64.67z',
        //O1
        'M229.446,25.67c-3.309,0-6.612,0-9.946,0c9.99,16.87,19.77,33.87,29.76,51c1.61-2.806,3.206-5.597,4.805-8.391 L229.446,25.67z',
        'M278.5,25.67c-16.483,0-34.45,0-50.847,0l4.743,8.21c10.309,0,21.443,0,31.724,0 c-5.102,9.041-9.792,17.493-15.005,26.651l4.949,7.748L278.5,25.67z',
        //I1
        'M 297.06,24.08 L 285.58,24.08 C 277.87,37.58 270.25,51.04 262.5,64.67 L 273.98,64.67 C 281.56,51.3 289.22,37.84 297.06,24.08 Z M 297.06,24.08',
        'M 303.5,12.67 L 292.02,12.67 C 291.19,14.28 289.96,16.59 289.04,18.33 L 300.39,18.33 C 301.18,16.89 302.45,14.54 303.5,12.67 Z M 303.5,12.67',
        //A3
        'M 310.19,30.09 C 316.99,42.01 323.52,53.36 330.01,64.67 333.19,64.67 336.97,64.67 340.5,64.67 330.57,47.25 320.47,29.87 310.63,12.67 300.57,30.04 290.47,47.38 280.5,64.62 L 290.25,64.64 290.27,64.62 319.82,64.62 C 318.12,61.83 316.68,59.38 315.03,56.68 L 294.76,56.75 296.26,54.13 C 300.95,46.02 305.46,38.23 310.19,30.09 Z M 310.19,30.09'
      ],
      line = [
        //A1
        'M 6.5,70.5 L 39.5,15.5 66.5,59.5 25.5,59.5',
        //L1
        'M 54,9 L 90,70',
        //E1
        'M 123.5,37.5 L 105.5,67.5 82.5,29.5 119.5,29.5',
        'M 114.5,18.5 L 93.5,53.5',
        //X1
        'M 122.5,18.5 C 122.5,18.5 153.81,74.75 153.5,74.5',
        'M 112.5,83.5 L 157.5,4.5',
        //A2
        'M 150,70.5 182.833,13.67 210.5,60 168.167,60',
        //L2
        'M 198.5,7.83 L 233.17,69',
        //O1
        'M 220,16.93 L 254.67,78.1',
        'M 236.51,90.7 L 271.18,29.53 214.62,29.53',
        //I1
        'M 265,70.1 L 299.67,8.93',
        'M 290.5,24.5 L 299.67,8.93',
        //A3
        'M 339.06,70.53 L 310.5,21.67 287.67,60.42 321.17,60.38'
      ],

      aaaLogo = d3.select('body')
        .append('svg')
        .attr('id', 'intro_aaaLogo')
        .attr('viewBox', '0 0 345 90')
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .append('g'),

      defs = aaaLogo.append('defs'),

      mask = defs.selectAll("clipPath")
        .data(maskPath)
        .enter()
        .append('clipPath')
        .attr('id', function (d, i) {
          return 'mask_p' + i;
        })
        .style('fill', '#fff')
        .append('path')
        .attr('d', function (d) {
          return d;
        }),

      pathGrp = aaaLogo.append('g')
        .attr('id', 'aaaLogoPieces'),

      paths = pathGrp.selectAll('path')
        .data(line)
        .enter()
        .append('path')
        .attr('d', function (d) {
          return d;
        })
        .attr('clip-path', function (d, i) {
          return 'url(#mask_p' + i + ')';
        })
        .attr("stroke-width", 12)
        .attr("fill", "none");

    $('#intro_aaaLogo').center()

    logo_aaaTl = new TimelineMax({})

    paths.each(function (d, i) {
      var pathLength = this.getTotalLength();
      logo_aaaTl.add(TweenLite.set(this, {strokeDasharray: pathLength, strokeDashoffset: pathLength}))
    })

    logo_aaaTl
      .set(paths[0], {autoAlpha: 0})
      .set(paths[0][3], {autoAlpha: 1})
      .set(paths[0][9], {autoAlpha: 1})
      .set(paths[0][11], {autoAlpha: 1})
      //A1
      .to(paths[0][0], 1, {autoAlpha: 1, ease:Power2.easeIn}, 'stage1')
      .to(paths[0][0], 1, {strokeDashoffset: 0, ease:Power2.easeIn}, 'stage1')
      //L1
      .to(paths[0][1], 1, {autoAlpha: 1, strokeDashoffset: 0, ease:Power1.easeInOut}, '0.9')
      //E1
      .to(paths[0][2], 1, {autoAlpha: 1, strokeDashoffset: 0, ease:Power3.easeOut}, '1.45')
      .to(paths[0][3], 1, {strokeDashoffset: 0, ease:Power3.easeOut}, '1.8')
      //X1
      .to(paths[0][4], 1, {autoAlpha: 1, strokeDashoffset: 0, ease:Power3.easeOut}, '1.9')
      .to(paths[0][5], 1, {autoAlpha: 1, strokeDashoffset: 0, ease:Power3.easeOut}, '2.1')
      //A2
      .to(paths[0][6], 1, {autoAlpha: 1, strokeDashoffset: 0, ease:Power3.easeOut}, '2.3')
      //L2
      .to(paths[0][7], 1, {autoAlpha: 1, strokeDashoffset: 0, ease:Power3.easeOut}, '2.5')
      //O1
      .to(paths[0][8], 1, {autoAlpha: 1, strokeDashoffset: 0, ease:Power3.easeOut}, '2.9')
      .to(paths[0][9], 1, {strokeDashoffset: 0, ease:Power3.easeOut}, '3.2')
      //I1
      .to(paths[0][10], 1, {autoAlpha: 1, strokeDashoffset: 0, ease:Power3.easeOut}, '3.3')
      .to(paths[0][11], 1, {strokeDashoffset: 0, ease:Power3.easeOut}, '3.6')
      //A3
      .to(paths[0][12], 1, {autoAlpha: 1, strokeDashoffset: 0, ease:Power3.easeOut}, '3.8')
      .staggerTo(paths[0], 0.6, {autoAlpha:0}, 0.15, '-=0.1')
      .set( $('#intro_aaaLogo'), {display:'none'});

    //.to(aaaLogo, 2, {autoAlpha: 0}

    return logo_aaaTl;

  }

  //animateLogo()





