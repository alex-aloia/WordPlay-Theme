/**
 * Created by tripl3inf on 3/5/15.
 */


var loadContact = function () {
  var container = document.querySelector('#contact'),
    content = container.querySelector('.content')
    backBtn = $('#back_arw');

  animate_title('Contact Me');

  contactTL = new TimelineLite()
    .set(container, {display: 'block'}, 'show')
    .to(content, 1, {autoAlpha: 1}, '+=1')
    .addPause('hide')
    .to(content, 1, {autoAlpha: 0})
    .set(container, {display: 'none'}, '+=1')

  backBtn.on('click', function () {
    contactTL.play('hide');
    backBtn.off('click');
  })
}




// form label animations
function formLabels() {
  var form = $('form'),
    inputs = form.find(':input');
  inputs.each(function () {
    var $this = $(this),
      label = $this.prev('label');

    if (!label) {
      return;
    }
    else {
      var labelTL = new TimelineLite({paused: true})
        .to(label, .5, {y: '-=18px'});
      $this.animation = labelTL;
    }

    $this.focus(function () {
      $this.animation.play()
    })

    $this.blur(function () {
      if (this.value) {
        return;
      }
      else {
        $this.animation.reverse()
      }
    })
  })


}

formLabels()

