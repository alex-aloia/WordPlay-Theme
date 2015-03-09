/**
 * Created by tripl3inf on 3/5/15.
 */


var loadContact = function(){
  var container = document.querySelector('#contact_container'),
    backBtn = $('.port_arw');

  contactTL = new TimelineLite()
    .set(container, {display:'block'}, 'show')
    .to(container, 1, {autoAlpha: 1}, '+=1')
    .addPause('hide')
    .to(container, 1, {autoAlpha: 0})
    .set(container, {display:'none'}, '+=1')

  backBtn.on('click', function(){
    contactTL.play('hide');
    backBtn.off('click');
  })
}


//loadContact();
