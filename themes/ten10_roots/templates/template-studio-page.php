<?php
/*
Template Name: Studio Page - Staff Roster
*/
global $post;
if ( ! empty( $post ) ) {

}
?>


<?php dynamic_sidebar('sidebar-subhead'); ?>
<?php //query_posts( 'post_type=cpt_staff'); ?>

  <section class="content-wrap archive-staff">
  <?php while ( have_posts() ) : the_post();
    $args = array( 'post_type' => 'cpt_staff', 'posts_per_page' => -1 );
    $loop = new WP_Query( $args );
    ?>
    <div class="featured">
      <img src="<?php echo $img; ?>" class="img-responsive">
    </div>

    <div class="content">
      <article class="entry-content">
        <ul class="staff_list">
          <?php
          while ( $loop->have_posts() ) :
            $loop->the_post();
            ?>
            <li class="staff_info">
              <div class="thumb_wrap">
                <?php the_post_thumbnail( 'archive-staff-thumb' ); ?>
              </div>
              <ul>
                <li>
                  <?php the_title(); ?>
                </li>
                <li>
                  <a href="<?php echo the_permalink(); ?>">more about&nbsp;<?php the_title() ?></a>
                </li>
              </ul>
            </li>
            <?php
            the_excerpt();
          endwhile;
          ?>
        </ul>
      </article>
    </div>
  <?php endwhile; ?>
</section>










