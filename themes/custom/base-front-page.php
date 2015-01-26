<?php
/**
 * What Page? Site Front Page
 * Will be a simple landing page; layout cruft dropped.
 */
?>

<?php get_template_part('templates/head');
  get_template_part('templates/header');
?>

<body <?php body_class(); ?>>



  <?php include custom_template_path(); /* front-page.php */ ?>

  <?php get_template_part('templates/footer'); ?>

  <?php wp_footer(); ?>

  <script type="text/javascript">

      jQuery(function ($) {
          $(window).load(function() {
              var mainTL = new TimelineLite();
//              mainTL.add(animate_pwrdBy(), 0);

//              mainTL.add(animateLogo_tripl3inf());
//              mainTL.add(animate_pwrdBy(), 6.5);
//              mainTL.add(animateLogo_aaa(), 9);
              mainTL.add(initMainMenu());

          });
      });

  </script>






</body>
</html>
