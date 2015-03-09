<?php
/**
 * What Page? Site Front Page
 * Will be a simple landing page; layout cruft dropped.
 */
session_start();


get_template_part('templates/head');
get_template_part('templates/header');
?>

<body <?php body_class(); ?>>


<!--<div class="logo_aaa">-->
<!--  <img width="1" height="1" src="http://dev.t3inf.com/content/uploads/logo_aaa.svg" class="svg-inject wp-post-image" alt="hud1">-->
<!--</div>-->

<?php include custom_template_path(); /* front-page.php */?>

<?php get_template_part('templates/footer'); ?>

<?php wp_footer(); ?>

  <script type="text/javascript">

    function init() {

      jQuery(function ($) {
        var mainTL = new TimelineLite({delay: 0.5})
          .add(animateLogo_tripl3inf, 0)
          .add(initMainMenu, 0)
          .add(animateLogo_aaa, 2)
          .call(loadContact)
          .call(initPortfolio)
        //.to( 'header .logo', 2, {autoAlpha:1}, 's1')
        //.from( 'header .logo', 1, {x:'-=300px'}, 's1')
        //.to( '#aaaLogo_footer', 4, {autoAlpha:1}, 's2' )
        //.from( '#aaaLogo_footer', 1, {x:'+=300px'}, 's2')
        //setTimeout(function(){ backBtn(); }, 200);
      });



    }
    // Elements to inject
    var SVGsToInject = document.querySelectorAll('img.inject');

    // Options
    var injectorOptions = {
      each: function (svg) {
        // Callback after each SVG is injected
        console.log('SVG injected: ' + svg.getAttribute('id'));
      }
    };
    // Do the injection
    SVGInjector(SVGsToInject, null, init());






  </script>



</body>
</html>
