<?php get_template_part('templates/head'); ?>
<body <?php body_class(); ?>>

  <!--[if lt IE 8]>
    <div class="alert alert-warning">
      <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'custom'); ?>
    </div>
  <![endif]-->

  <?php get_template_part('templates/header'); ?>

  <div class="wrap container" role="document">
    <div class="content">
      <main class="main" role="main">
        <?php include custom_template_path(); ?>
      </main><!-- /.main -->
      <?php if (custom_display_sidebar()) : ?>
        <aside class="sidebar" role="complementary">
          <?php include custom_sidebar_path(); ?>
        </aside><!-- /.sidebar -->
      <?php endif; ?>
    </div><!-- /.content -->
  </div><!-- /.wrap -->

  <?php get_template_part('templates/footer'); ?>

  <?php wp_footer(); ?>

</body>


</html>
