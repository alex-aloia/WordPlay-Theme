<?php get_template_part('templates/head'); ?>
<!--<body --><?php //body_class(); ?>

<body data-grid-framework="b3" data-grid-color="blue" data-grid-opacity="0.5" data-grid-zindex="10" data-grid-gutterwidth="30px" data-grid-nbcols="16" <?php body_class(); ?>
<!--
Framework codes: b3 (Bootstrap 3 fixed), b3f (Bootstrap 3 fluid), bo (Bootstrap 2 fixed), bf (Bootstrap 2 fluid), f4 (Foundation 4 & 5), f3 (Foundation 3), f2 (Foundation 2).
Note 1: 'Gutter width' parameter only applies to gutterless grid systems (Bootstrap 3, Foundation 4 & 5).
Note 2: 'Nb cols' parameter for Bootstrap only.
-->

  <!--[if lt IE 8]>
    <div class="alert alert-warning">
      <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'roots'); ?>
    </div>
  <![endif]-->

  <?php
    do_action('get_header');
    get_template_part('templates/header');
  ?>

  <div class="wrap container" role="document">
    <div class="content row">
      <main class="main <?php echo roots_main_class(); ?>" role="main">
        <?php include roots_template_path(); ?>
      </main><!-- /.main -->
      <?php if (roots_display_sidebar()) : ?>
        <aside class="sidebar <?php echo roots_sidebar_class(); ?>" role="complementary">
          <?php include roots_sidebar_path(); ?>
        </aside><!-- /.sidebar -->
      <?php endif; ?>
    </div><!-- /.content -->








  </div><!-- /.wrap -->

  <?php get_template_part('templates/footer'); ?>

</body>
</html>
