/**
 * Created by tripl3inf on 1/14/15.
 */

initMainMenu = function () {
  //$('#main_menu').center()

  var body = document.querySelector('body'),
    mainMenu = d3.select('#main_menu'),
    menuItem = mainMenu.selectAll('li'),
    //portBtn = mainMenu.select('.works'),
    link = mainMenu.selectAll('a'),
    svg = menuItem.selectAll('svg'),
    circlePath1 = svg.selectAll('.center circle.center1'),
    circlePath2 = svg.selectAll('.center circle.center2'),
    ring1 = svg.selectAll('.ring1'),
    ring2 = svg.selectAll('.ring2'),
    ring3 = svg.selectAll('.ring3'),
    btns = svg.selectAll('.buttons > g'),
    btn_mail = svg.selectAll('.btn-mail'),
    btn_about = mainMenu.select('.about'),
    btn_linked = svg.selectAll('.btn-linked'),
    btn_gplus = svg.selectAll('.btn-gplus'),
    btn_github = svg.selectAll('.btn-github'),
    btn_portf = svg.selectAll('.btn-portfolio'),
    btn_cpen = svg.selectAll('.btn-codepen');

  var backBtn = d3.select('#back_arw'),
    backBtnArw = backBtn.select('.arw'),
    arwHvrTL = new TimelineLite({paused: true})
      .to(backBtnArw, .4, {stroke: '#9933FF'});

  TweenLite.set(backBtnArw, {drawSVG: 0});

  mainMenuTL = new TimelineMax()
    .set(ring1, {transformOrigin: "50% 50%"})
    .set(ring2, {transformOrigin: "50% 50%"})
    .set(ring3, {transformOrigin: "50% 50%"})
    .staggerTo(menuItem[0], 1.5, {autoAlpha: 1}, 0.3, 'ringS1')
//      .staggerTo(ring1, 1.5, {autoAlpha: 0.5}, 0.4, 'ringS1')
    .staggerTo(ring1, 1.5, {directionalRotation: "90_cw", ease: Back.easeOut}, 0.3, 'ringS1')
    .staggerTo(ring2, 1 , {directionalRotation: "45_ccw", ease: Back.easeOut}, 0.3, 'ringS1+=.5')
    //.staggerTo(ring3, 1, {directionalRotation: "90_ccw", ease: Back.easeOut}, 0.3, 'ringS1+=1')
    //.staggerTo(ring4, 1, {directionalRotation: "120_ccw", ease: Back.easeOut}, 0.3, 'ringS1+=1.5')

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
      animate_title_close()
      openMenu();
    })

  menuItem.each(function (d, i) {
    var $this = this,
      hoverTL = new TimelineLite({paused: true}),
      targetPath = circlePath1[i][0],
      targetPath2 = circlePath2[i][0],
      targetRing = ring1[i][0],
      targetRing2 = ring2[i][0],
      targetRing3 = ring3[i][0];

    if (i === 0) {
      hoverTL.to(btns[0][0], .3, {x: '-=80px', y: '-=60px', autoAlpha: '1'}, 0)
        .to(btns[0][1], .3, {x: '-=90px', y: '+=45px', autoAlpha: '1'}, 0.2)
        .to(btns[0][2], .3, {x: '-=30px', y: '+=120px', autoAlpha: '1'}, 0.4);
    }
    if (i === 2) {
      hoverTL.to(btns[2][2], .3, {x: '+=100px', y: '-=60px', autoAlpha: '1'}, 0)
        .to(btns[2][0], .3, {x: '+=110px', y: '+=45px', autoAlpha: '1'}, 0.2)
        .to(btns[2][1], .3, {x: '+=60px', y: '+=130px', autoAlpha: '1'}, 0.4);
    }
    hoverTL
      .to(targetPath, 1, {autoAlpha: 0.9}, 0)
      .to(targetPath2, 1, {autoAlpha: 0.9}, 0)
      .fromTo(targetPath, 1, {drawSVG: '0'}, {drawSVG: '100%'}, 0)
      .fromTo(targetPath2, 1, {drawSVG: '0'}, {drawSVG: '100%'}, 0)
      .to(targetRing, 0.7, {autoAlpha: 0.2, stroke: '#9A40FF', directionalRotation: "0_short"}, 0)
      .to(targetRing2, 0.7, {directionalRotation: "30_ccw"}, .2)
      .to(targetRing3, 0.7, {directionalRotation: "60_ccw"}, .4)
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

  // contact btns
  btn_mail.on("mousedown", function () {
    closeMenu(loadContact());
  })

  btn_about.on("mousedown", function () {
    closeMenu(loadAbout());
  })

  btn_linked.on("mousedown", function () {
    window.open('https://www.linkedin.com/in/tripl3inf','_target')
  })

  btn_gplus.on("mousedown", function () {
    window.open('https://plus.google.com/u/0/108844291722497947799','_target')
  })

  btn_portf.on("mousedown", function () {
    closeMenu(portOpen());
  })

  btn_github.on("mousedown", function () {
    window.open('https://github.com/tripl3inf','_target')
  })

  btn_cpen.on("mousedown", function () {
    window.open('http://codepen.io/tripl3inf/','_target')
  })


  // touch events...
  var contact_press = new Hammer(menuItem[0][0]);
  contact_press.on("tap press", function (ev) {
    var tl = menuItem[0][0].animation;
    if (tl.reversed()) {
      tl.play();
    }
    else {
      tl.reverse();
    }
  });

  var works_press = new Hammer(menuItem[0][2]);
  works_press.on("tap press", function (ev) {
    var tl = menuItem[0][2].animation;
    if (tl.reversed()) {
      tl.play();
    }
    else {
      tl.reverse();
    }
  });

  function closeMenu() {
//  closeMenu = function () {
    var hideMenu = function () {
      //logo_aaaTL.reverse().timeScale(2);
      TweenLite.set(mainMenu, {display: 'none'})
      TweenLite.set($('body'), {overflow: 'scroll'});
    }
    closeMenuTL = new TimelineLite({onComplete: hideMenu})
//      .add(logo_aaaTL.reverse().timeScale(2))
      .add(mainMenuTL.reverse().timeScale(1.5), 0)
      .set(backBtn, {display: 'block'})
      .add(TweenLite.to('.logo_tripl3inf', 1, {'margin-bottom':'-200px'}))
      .add(TweenLite.to(backBtnArw, .8, {drawSVG: '100%', autoAlpha: .9}));
  }

  function openMenu() {
//  openMenu = function () {
    openMenuTL = new TimelineLite({delay:.5, onStart: set_scroll})
      .add(TweenLite.to(backBtnArw, .8, {drawSVG: 0, autoAlpha: 0}))
      .set(mainMenu, {display: 'block'})
      //.set($('body'), {overflow: 'hidden'})
      .add(mainMenuTL.play())
      .add(TweenLite.to('.logo_tripl3inf', .6, {'margin-bottom':0}))
      .set(backBtn, {display: 'none'})
  }

  return mainMenuTL;

}



