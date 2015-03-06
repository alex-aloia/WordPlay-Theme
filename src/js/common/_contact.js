/**
 * Created by tripl3inf on 3/5/15.
 */


var loadContact = function(){
  var container = document.querySelector('#contact_container'),
    show = function(){
      TweenLite.set(container, {display:'block'})
    }


  contactTL = new TimelineLite({paused: true, onStart:show})
    .call(closeMenu)
    .to(container, 1, {autoAlpha: 1}, 1);

}


//loadContact();
