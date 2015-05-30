<?php

/**
 * Site Front Page
 */

    get_template_part('templates/head');
?>


<body <?php body_class(); ?>>

    <!--[if lt IE 8]>
    <div class="alert alert-warning">
        <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your
        browser</a> to improve your experience.', 'custom'); ?>
    </div>
    <![endif]-->

    <?php get_template_part('templates/header'); ?>

    <?php include custom_template_path(); /* front-page.php */ ?>

    <?php get_template_part('templates/footer'); ?>

    <?php wp_footer(); ?>

</body>
</html>
