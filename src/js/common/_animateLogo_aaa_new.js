var animateLogo_aaa = function(){

  var logo_aaaTL = new TimelineLite(),
    logo_aaa = d3.select(".logo_aaa"),
    line = logo_aaa.selectAll('.lines path');

  TweenLite.set(line, {drawSVG: 0});
  logo_aaaTL.to(line[0][0], 1, {drawSVG:'100%', autoAlpha: 1}, 0)
  .to(line[0][1], 1, {drawSVG:'100%', autoAlpha: 1}, .4)
  .to(line[0][2], 1, {drawSVG:'100%', autoAlpha: 1}, .7)
  .to(line[0][3], 1, {drawSVG:'100%', autoAlpha: 1}, 1)
  .to(line[0][4], 1, {drawSVG:'100%', autoAlpha: 1}, 1.1)
  .to(line[0][5], 1, {drawSVG:'100%', autoAlpha: 1}, 1.3)
  .to(line[0][6], 1, {drawSVG:'100%', autoAlpha: 1}, 1.6)
  .to(line[0][7], 1, {drawSVG:'100%', autoAlpha: 1}, 1.9)
  .to(line[0][8], 1, {drawSVG:'100%', autoAlpha: 1}, 2.1)
  .to(line[0][9], 1, {drawSVG:'100%', autoAlpha: 1}, 2.3);
  return logo_aaaTL;
}


//animateLogo_tripl3inf();




