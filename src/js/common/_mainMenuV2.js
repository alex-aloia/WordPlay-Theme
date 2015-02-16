/**
 * Created by tripl3inf on 1/14/15.
 */

var initMainMenu = function () {
  $('#main_menu').center()

  mainMenu = d3.select('#main_menu'),
    menuItem = mainMenu.selectAll('li'),
    link = mainMenu.selectAll('a'),
    circlePath = menuItem.selectAll('.hud1-center'),
    ring = menuItem.selectAll('.hud1-ring1'),
    svg = menuItem.select('svg'),
    mainMenuTL = new TimelineMax()
      .set(ring, {transformOrigin: "50% 50%"})
      .set(menuItem[0], {autoAlpha: 0})
      .staggerTo(menuItem[0], 2.5, {autoAlpha: 1}, 0.3, 'ringS1')
      .staggerTo(ring, 2, {autoAlpha: 0.5}, 0.4, 'ringS1+=0.5')
      .staggerTo(ring, 3, {directionalRotation: "90_cw", ease: Back.easeOut}, 0.4, 'ringS1+=1')


  link.on('click', function () {
    d3.event.preventDefault();
  })

  TweenLite.set(circlePath, {drawSVG: 0, transform: 'rotate(90deg)', transformOrigin: "50% 50%"})

  // hover event
  menuItem.on("mouseenter", function (d, i) {
    targetPath = circlePath[i][0],
      targetRing = ring[i][0],
    hoverTL = new TimelineLite()
      .to(targetPath, 1, {autoAlpha: 0.8}, 0)
      .fromTo(targetPath, 1, {drawSVG: '50% 50%'}, {drawSVG: '0 100%'}, 0)
      .to(targetRing, 0.7, {autoAlpha: 0.7, stroke: '#9A40FF', directionalRotation: "0_short"}, 0)
      .to(link[0][i], 0.5, {color: '#aaff00'}, 0.3)
  })

  menuItem.on("mouseleave", function (d, i) {
    hoverTL.reverse();
  })

  menuItem.on('mousedown', function (d, i) {
    d3.event.preventDefault();

    if (!mainMenuTL.isActive()) {
      var li = menuItem[0][i];
      closeMenu(li)
    }
  })

  closeMenu = function (current) {
    var link = d3.select(current).select('a').node().href.split('/')[3];
    var siblings = $(current).siblings()

    var gotoLink = function () {
      if (link != null) {
        if (link == 'featured-work') {
          portTL.play('port_open')
        }
        //else if ( link === 'contact'){
        //  loadContactForm()
        //}
        else {
          window.location.href = link;
        }
      }
    }

    mainMenuTL.staggerTo(siblings, 1, {autoAlpha: 0}, 0.25)
      .to(current, 1, {autoAlpha: 0}, '-=0.7')
      .set(menuItem[0], {display: 'none'})
      .call(gotoLink, [], '+=1')

  }

  openMenu = function () {
    mainMenuTL.set(menuItem[0], {display: 'inline-block'})
      .staggerTo(menuItem[0], 1, {autoAlpha: 1}, 0.25)
  }


  return mainMenuTL;

}



