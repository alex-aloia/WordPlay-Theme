<?php
/*
Template Name: Home Template
*/
global $post;
if ( ! empty( $post ) ) {
    //$slider_imgs = get_post_meta(get_the_ID(), '_cmb_slider_home', true);
}
?>

<?php dynamic_sidebar('sidebar-subhead'); ?>


<?php while ( have_posts() ) : the_post(); ?>

  <section class="menu_featured">
    <h5>TEN10 Entertainment - A Global Film & Television Fund - Leaders in Customizing
      Entertainment Portfolios - Offers Three Divisions of Investment</h5>
    <?php
    if ( has_nav_menu( 'film_pages_navigation' ) ) :
      wp_nav_menu( array( 'theme_location' => 'film_pages_navigation', 'menu_class' => 'nav' ) );
    endif;
    ?>
  </section>



  <?php the_content(); ?>

<?php endwhile; ?>
