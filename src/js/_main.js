/**
 * Created by tripl3inf on 1/15/15.
 */



jQuery(function ($) {
  $(window).load(function() {
    var mainTL = new TimelineLite();

    //mainTL.add(animateLogo_tripl3inf());
    mainTL.add(animate_pwrdBy(), 7);
    mainTL.add(animateLogo_aaa());
    mainTL.add(initMainMenu());

  });
});

