<?php
/*
Template Name: Film Project Archive
*/
//global $post;
//if ( ! empty( $post ) ) {
  //$name = get_post_meta($post->ID, 'cpt_staff_text', true);
//  $position = get_post_meta($post->ID, 'position', true);
//  $staff_photo =  get_post_meta($post->ID, 'staff_photo', true);
//}

$myquery['tax_query'] = array(
  array(
    'taxonomy' => 'project_type',
    'terms' => array('film'),
    'field' => 'slug',
  )
);
query_posts($myquery);

?>



<section class="content-wrap template-studio">
	<?php while ( have_posts() ) : the_post(); ?>

<p>
  <?php the_title(); ?>
</p>

  <p>
    <?php echo get_post_meta( $post->ID, 'project_director', true ); ?>
  </p>


    <a href="<?php echo the_permalink(); ?>">
      <?php echo the_permalink(); ?>
    </a>

	<?php endwhile; ?>
</section>








