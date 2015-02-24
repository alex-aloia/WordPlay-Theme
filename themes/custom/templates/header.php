<?php

global $post;
if (!empty($post)) {
  $args = array('post_type' => 'cpt_main_menu', 'posts_per_page' => -1);
  $loop = new WP_Query($args);
}
?>



<header class="banner" role="banner">
  <a href="<?php echo esc_url(home_url('/')); ?>" class="logo_tripl3inf logo">
    <?php get_template_part('assets/svg/logo', 'tripl3inf.svg'); ?>
  </a>
</header>


<nav id="main_menu" class="menu" role="navigation">
  <ul>
    <?php while ($loop->have_posts()) : $loop->the_post();
      $post_id = get_the_ID(); ?>

      <li>
        <?php echo get_the_post_thumbnail($post_id, 'thumbnail', array('class' => 'svg-inject')); ?>

        <?php
        //$title = the_title();
        //get_template_part('assets/svg/nav', '"'.$title.'svg');
        ?>
        <a href="<?php echo the_permalink(); ?>"><?php the_title() ?></a>
      </li>

    <?php endwhile; ?>
  </ul>
</nav>


















