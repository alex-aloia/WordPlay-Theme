<?php
/**
 * What Page? Site Front Page
 */
session_start();


get_template_part('templates/head');
get_template_part('templates/header');
?>

<body id="<?php echo get_option('current_page_template'); ?>" <?php body_class(); ?>>

<?php include custom_template_path(); /* front-page.php */ ?>

<?php get_template_part('templates/footer'); ?>

<?php wp_footer(); ?>

<script type="text/javascript">

  // prevent touch/hold window events
  window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  set_scroll = function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  // track img loading
  function load_check() {
    setTimeout(function () {
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
        .set('#loader-wrap', {display: 'none'})
        .add(logo_aaaTL.play(), 0)
        .add(initMainMenu, 1)
        .add(animateLogo_tripl3inf, 2)
        //.add(loadAbout, 0)
        //.add(portOpen)
    }

    loaderTL.repeat(0).eventCallback("onComplete", animate);
  }

  jQuery(function ($) {
    loader(initPortfolio(set_scroll(), load_check(), animateLogo_aaa()));
  });

</script>


</body>
</html>
