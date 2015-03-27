<?php
/**
 * What Page? Site Front Page
 */
session_start();


get_template_part('templates/head');
get_template_part('templates/header');
?>

<body <?php body_class(); ?>>


<!--<div class="logo_aaa">-->
<!--  <img width="1" height="1" src="http://dev.t3inf.com/content/uploads/logo_aaa.svg" class="svg-inject wp-post-image" alt="hud1">-->
<!--</div>-->

<?php include custom_template_path(); /* front-page.php */ ?>

<?php get_template_part('templates/footer'); ?>

<?php wp_footer(); ?>

<script type="text/javascript">



  set_scroll = function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  // track img loading
  function load_check() {
    setTimeout(function () {
      //imgs = document.querySelectorAll('img')
      imgLoad = imagesLoaded('body')

      imgLoad.on('always', function (instance) {
        //console.log('done loading images')
        init();
      });

      /*imgLoad.on('progress', function (instance, image) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log('image is ' + result + ' for ' + image.img.src);
      });*/
    }, 500);
  }

  function init() {
    function animate() {
      var mainTL = new TimelineLite()
        .add(logo_aaaTL.play(), 0)
        .add(initMainMenu, 1)
        //.add(loadAbout, 0)
        //.add(portOpen)
        .add(animateLogo_tripl3inf, 3)
    }

    loaderTL.repeat(0).eventCallback("onComplete", animate);
  }

  jQuery(function ($) {
    loader( initPortfolio( set_scroll(), load_check(), animateLogo_aaa() ) );
  });

</script>


</body>
</html>
