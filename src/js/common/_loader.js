function loader() {

  var loader = d3.select('#loader'),
    lp = loader.select('.loader-path');

  TweenLite.set(lp, {drawSVG: 0});

  loaderTL = new TimelineMax({delay: .5, paused: false, repeat: -1})
    .to(lp, 3, {drawSVG: '100%', ease: Expo.easeInOut}, 0)
    .to(lp, 3, {autoAlpha: 1}, 0)
    .to(lp, 2, {autoAlpha: 0}, '-=1')

  window.oncontextmenu = function (event) {
    //event.preventDefault();
    //event.stopPropagation();
    //return false;
  };

}


var animate_title = function (container) {
  var tc = $(container),
    title = tc.children('.title-block'),
    h = title.children('h2'),
    line = title.find('line');

  if (!title.is(':hidden')) {
    return
  }
  else{
    var split = new SplitText(h, {type: "chars", charsClass: "char"}),
    tTL = new TimelineLite({})
      .set(title, {display: 'block'})
      .set(line, {drawSVG: '50% 50%'})
      .staggerTo(split.chars, .25, {autoAlpha: 1}, 0.1, 'title')
      .staggerFrom(split.chars, .25, {y: '-=25px'}, 0.1, 'title')
      .to(line, 1, {drawSVG: '0 100%'}, 'title+=.5')
  }
  /*
   var tc = d3.select(container),
   title = $('.title-block'),
   h = tc.select('h2'),
   line = tc.select('svg line'),
   split = new SplitText(h, {type: "chars", charsClass: "char"}),
   tTL = new TimelineLite({paused: true})
   .set(title, {display: 'block'})
   .staggerTo(split.chars, .25, {autoAlpha: 1}, 0.1, 'title')
   .staggerFrom(split.chars, .25, {y: '-=25px'}, 0.1, 'title')
   .to(line[0][0], 1, {drawSVG: '0 100%'}, 'lines')
   */

}


var animate_title_close = function() {
  //var tc = $(container),
  var title = $('.title-block'),
    h = title.children('h2'),
    letters = h.children('div'),
    line = title.find('line'),
    hide = function(){
      title.hide();
    }
    tTL = new TimelineLite({onComplete:hide})
//      .set(title, {display: 'block'})
      .to(line, 2, {drawSVG: '50% 50%'})
      .staggerTo(letters, .5, {autoAlpha: 0, y:'-=25px'}, .1, 0)
      //.staggerTo(split.chars, .25, {autoAlpha: 0}, 0.1, 'title')
      //.to(h, 1, {autoAlpha: 0})
}
