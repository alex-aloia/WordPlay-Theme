<?php
/*
Title: Slider Gallery (full-width) Widget
Description: Slider Gallery For Sub-Head Area
*/


global $post;
if ( ! empty( $post ) ) {
  $args        = array( 'post_type' => 'cpt_project', 'posts_per_page' => - 1 );
  $loop        = new WP_Query( $args );
}

?>



<?php echo $before_widget; ?>
<section id="widget_home" class="row">
  <div id="projects_carousel" class="col-sm-12 carousel slide" data-ride="carousel">
    <!-- Slider Content (Wrapper for slides )-->
    <div class="carousel-inner">
      <?php
      // BEGIN widget display code
      while ( $loop->have_posts() ) : $loop->the_post();
        $image_ids = get_post_meta($post->ID, 'upload_slider_full_img');
        foreach ($image_ids as $image) {
          ?>
          <a href="<?php echo the_permalink(); ?>" class="item" >
            <img src="<?php echo wp_get_attachment_url($image) ?>"/>
          </a>

        <?php
        }
        // END Widget
      endwhile;
      ?>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#projects_carousel" role="button" data-slide="prev">
      <span class="fa fa-angle-left"></span>
    </a>
    <a class="right carousel-control" href="#projects_carousel" role="button" data-slide="next">
      <span class="fa fa-angle-right"></span>
    </a>
  </div>
</section>


<?php
wp_reset_postdata();
echo $after_widget;
?>







