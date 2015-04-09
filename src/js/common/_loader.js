function loader() {

  var loader = d3.select('#loader'),
    lp = loader.select('.loader-path');

  TweenLite.set(lp, {drawSVG: 0});

  loaderTL = new TimelineMax({delay: .5, paused: false, repeat: -1})
    .to(lp, 3, {drawSVG: '100%', ease: Expo.easeInOut}, 0)
    .to(lp, 3, {autoAlpha: 1}, 0)
    .to(lp, 2, {autoAlpha: 0}, '-=1');

}


