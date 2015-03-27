// About page

var loadAbout = function(){
  var container = document.querySelector('#about'),
    content = container.querySelector('.content'),
    backBtn = $('#back_arw');

  animate_title(container);

  aboutTL = new TimelineLite()
    .set(container, {display:'block'}, 'show')
    .to(content, 1, {autoAlpha: 1}, '+=1')
    .addPause('hide')
    .to(container, 1, {autoAlpha: 0})
    .set(container, {display:'none'}, '+=1')

  backBtn.on('click', function(){
    aboutTL.play('hide');
    backBtn.off('click');
    animate_title_close();
  })
}
