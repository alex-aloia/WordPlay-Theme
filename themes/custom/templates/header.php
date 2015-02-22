<?php

global $post;
if ( ! empty( $post ) ) {
  $args = array( 'post_type' => 'cpt_main_menu', 'posts_per_page' => - 1 );
  $loop = new WP_Query( $args );
}

?>


<header class="banner" role="banner">



  <a href="<?php echo esc_url(home_url('/')); ?>" id="header_logo" class="logo">
<!--    <svg class="symbol_tripl3infLogo">-->
<!--      <use xlink:href="#logo_tripl3inf"></use>-->
<!--    </svg>-->
  </a>

<nav id="main_menu" class="menu" role="navigation">
  <ul>
  <?php while ( $loop->have_posts() ) : $loop->the_post();
    $post_id = get_the_ID(); ?>

    <li>
      <?php echo get_the_post_thumbnail( $post_id, 'thumbnail', array( 'class' => 'svg-inject' ) ); ?>
      <a href="<?php echo the_permalink(); ?>"><?php the_title() ?></a>
    </li>

  <?php endwhile; ?>
  </ul>
</nav>



</header>





















