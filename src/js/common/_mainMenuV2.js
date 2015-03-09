/**
 * Created by tripl3inf on 1/14/15.
 */

initMainMenu = function () {
  //$('#main_menu').center()

  var body = document.querySelector('body'),
    mainMenu = d3.select('#main_menu'),
    menuItem = mainMenu.selectAll('li'),
    portBtn = mainMenu.select('.works'),
    link = mainMenu.selectAll('a'),
    svg = menuItem.selectAll('svg'),
    circlePath1 = svg.selectAll('.center circle.center1'),
    circlePath2 = svg.selectAll('.center circle.center2'),
    ring1 = svg.selectAll('.ring1'),
    btns = svg.selectAll('.buttons > g'),
    btn_mail = svg.selectAll('.btn-mail');

  var backBtn = d3.select('#back_arw'),
    backBtnArw = backBtn.select('.arw'),
    arwHvrTL = new TimelineLite({paused: true})
      .to(backBtnArw, .4, {stroke: '#9933FF'});

  TweenLite.set(backBtnArw, {drawSVG: 0});

  mainMenuTL = new TimelineMax()
    .set(ring1, {transformOrigin: "50% 50%"})
    .staggerTo(menuItem[0], 1.5, {autoAlpha: 1}, 0.3, 'ringS1')
//      .staggerTo(ring1, 1.5, {autoAlpha: 0.5}, 0.4, 'ringS1')
    .staggerTo(ring1, 1.5, {directionalRotation: "90_cw", ease: Back.easeOut}, 0.3, 'ringS1')

  TweenLite.set(circlePath1, {drawSVG: 0, transform: 'rotate(90deg)', transformOrigin: "50% 50%"})
  TweenLite.set(circlePath2, {drawSVG: 0, transform: 'rotate(-90deg)', transformOrigin: "50% 50%"})


  backBtn.on('mouseover', function () {
    arwHvrTL.play()
  })
    .on('mouseout', function () {
      arwHvrTL.reverse()
    })
    .on('mousedown', function () {
      //arwTL.reverse()
      portClose()
      openMenu();
    })

  menuItem.each(function (d, i) {
    var $this = this,
      hoverTL = new TimelineLite({paused: true}),
      targetPath = circlePath1[i][0],
      targetPath2 = circlePath2[i][0],
      targetRing = ring1[i][0];
    if (i === 0) {
      hoverTL.to(btns[0][0], .3, {x: '-=110px', autoAlpha: '1'}, 0)
        .to(btns[0][1], .3, {x: '-=90px', y: '+=50px', autoAlpha: '1'}, 0.2)
        .to(btns[0][2], .3, {x: '-=60px', y: '+=80px', autoAlpha: '1'}, 0.4);
    }
    hoverTL.to(targetPath, 1, {autoAlpha: 0.3}, 0)
      .to(targetPath2, 1, {autoAlpha: 0.7}, 0)
      .fromTo(targetPath, 1, {drawSVG: '0'}, {drawSVG: '100%'}, 0)
      .fromTo(targetPath2, 1, {drawSVG: '0'}, {drawSVG: '100%'}, 0)
      .to(targetRing, 0.7, {autoAlpha: 0.9, stroke: '#9A40FF', directionalRotation: "0_short"}, 0)
      .to(link[0][i], 0.5, {color: '#aaff00'}, 0.3)
    $this.animation = hoverTL;
  })

  link.on('click', function () {
    d3.event.preventDefault();
  })

  // hover event
  menuItem.on("mouseenter", function () {
    //if (!mainMenuTL.isActive()) {
    this.animation.play()
    //}
  })

  menuItem.on("mouseleave", function () {
    this.animation.reverse().timeScale(1.5)
  })

  menuItem.on('mousedown', function (d, i) {
    d3.event.preventDefault();
  })

  btn_mail.on("mousedown", function () {
    //contactTL.play();
    closeMenu(loadContact());
  })

  portBtn.on("mousedown", function () {
    closeMenu(portOpen());
    console.log('port btn down')
  })


  closeMenu = function () {
    var hideMenu = function () {
      //logo_aaaTL.reverse().timeScale(2);
      TweenLite.set(mainMenu, {display: 'none'})
      TweenLite.set($('body'), {overflow: 'scroll'});
    }
    var closeMenuTL = new TimelineLite({onComplete: hideMenu})
      .set(backBtn, {display: 'block'})
      .add(mainMenuTL.reverse().timeScale(1.5))
      .add(TweenLite.to(backBtnArw, .8, {drawSVG: '100%', autoAlpha: .7}));
  }

  openMenu = function () {
    var setScroll = function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    var openMenuTL = new TimelineLite({onStart: setScroll})
      .add(TweenLite.to(backBtnArw, .8, {drawSVG: 0, autoAlpha: 0}))
      .set(mainMenu, {display: 'block'})
      .set($('body'), {overflow: 'hidden'})
      .add(mainMenuTL.play())
      .set(backBtn, {display: 'none'})
  }

  return mainMenuTL;

}



