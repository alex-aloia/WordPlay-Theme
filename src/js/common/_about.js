// About page

loadAbout = function(){
  var container = document.querySelector('#about'),
    content = container.querySelector('.content'),
    backBtn = $('#back_arw');

  animate_title('About Me');


  aboutTL = new TimelineLite()
    .set(container, {display:'block', autoAlpha: 1}, 'show')
    .to(content, 1, {autoAlpha: 1}, '+=1')
    .addPause('hide')
    .to(content, 1, {autoAlpha: 0})
    .set(container, {display:'none'}, '+=1')

  backBtn.on('click', function(){
    aboutTL.play('hide');
    backBtn.off('click');
    animate_title_close();
  })


  function social_icons() {

    var icon_container = d3.selectAll('.icon_container'),
      target = icon_container.selectAll('.target');
    icon = icon_container.selectAll('.icon');

    icon_container.each(function (d, i) {
//      console.log(icon.length)
//      console.log( 'icon = ' + icon[i][0] )
      var $this = this,
        hoverTL2 = new TimelineLite({paused: true})
          .to(icon[i][0], .5, {fill: '#3a14cc'});

      $this.animation = hoverTL2;
    })


    // hover event
    icon_container.on("mouseenter", function () {
      this.animation.play()
    })
      .on("mouseleave", function () {
        this.animation.reverse()
      })

  }

  social_icons();



}




