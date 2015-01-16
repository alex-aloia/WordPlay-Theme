/**
 * Created by tripl3inf on 1/14/15.
 */

var initMainMenu = function () {
  var mainMenu = d3.select('#menu-primary-navigation'),
    menuItem = mainMenu.selectAll('li'),
    link = mainMenu.selectAll('a'),
    circlePath = ["M 102.16,194.99 C 154.9,194.07 196.9,150.57 195.99,97.84 195.07,45.1 151.57,3.1 98.84,4.01 82.51,4.3 67.21,8.67 53.89,16.13 24.2,32.76 4.38,64.76 5.01,101.16 5.93,153.9 49.43,195.9 102.16,194.99 L 102.18,195.99 C 48.89,196.91 4.94,154.47 4.01,101.18 3.09,47.89 45.53,3.94 98.82,3.01 152.11,2.09 196.06,44.53 196.99,97.82 197.91,151.11 155.47,195.06 102.18,195.99 L 102.16,194.99 Z M 102.16,194.99"],
    svg = menuItem.insert('svg', 'a')
      .attr('class', 'nav_circle')
      .attr('viewBox', '0 0 200 200'),
    nav_circle = svg.append('g')
      .selectAll('path')
      .data(circlePath)
      .enter()
      .append('path')
      .attr('d', function (d) {
        return d;
      })
      .attr('class', 'circ1');

  // hover event
  menuItem.on("mouseenter", function (d, i) {
    var target = nav_circle[i][0],
      linkTL = new TimelineMax();
    linkTL.to(target, 1, {strokeDashoffset: 0, ease: Sine.easeInOut}, 's1')
      .to(link[0][i], 0.8, {color: '#aaff00'}, 's1')
  })

  menuItem.on("mouseleave", function (d, i) {
    var target = nav_circle[i][0],
      pathLength = target.getTotalLength(),
      linkTL = new TimelineMax();
    linkTL.to(target, 1, {strokeDashoffset: pathLength, ease: Sine.easeInOut}, 's1')
      .to(link[0][i], 0.8, {color: '#333'}, 's1')
  })

  // menu timeline
  var mainMenuTL = new TimelineMax()
    .set(link[0], {autoAlpha: 0})
    .staggerTo(link[0], 2.5, {autoAlpha: 1}, 0.3);

  nav_circle.each(function (d, i) {
    var pathLength = this.getTotalLength();
    mainMenuTL.add(TweenLite.set(this, {strokeDasharray: pathLength, strokeDashoffset: pathLength}));
  });

  return mainMenuTL;

}




