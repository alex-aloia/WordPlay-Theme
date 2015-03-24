// About page

var loadAbout = function(){
  var container = document.querySelector('#about_container'),
    backBtn = $('#back_arw');

  aboutTL = new TimelineLite()
    .set(container, {display:'block'}, 'show')
    .to(container, 1, {autoAlpha: 1}, '+=1')
    .addPause('hide')
    .to(container, 1, {autoAlpha: 0})
    .set(container, {display:'none'}, '+=1')

  backBtn.on('click', function(){
    aboutTL.play('hide');
    backBtn.off('click');
  })
}
