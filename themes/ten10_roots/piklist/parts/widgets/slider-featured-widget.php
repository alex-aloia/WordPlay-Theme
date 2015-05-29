<?php
/*
Title: Featured Content Slider/Static Image Widget
Description: Slider Gallery w/ Featured Static Images
*/

global $post;
if ( ! empty( $post ) ) {
  $args = array(
    'post_type'      => 'cpt-slider',
    'name'           => 'home-slider',
    'posts_per_page' => - 1
  );
  $loop = new WP_Query( $args );
}

echo $before_widget;
while ( $loop->have_posts() ) : $loop->the_post();
  // static img 1
  $img_static_title_1     = get_post_meta( $post->ID, 'img-static-title-1', true );
  $img_static_page_link_1 = get_post_meta( $post->ID, 'img-static-page-link-1', true );
  $img_static_upload_1    = get_post_meta( $post->ID, 'img-static-upload-1', true );

  // static img 2
  $img_static_title_2     = get_post_meta( $post->ID, 'img-static-title-2', true );
  $img_static_page_link_2 = get_post_meta( $post->ID, 'img-static-page-link-2', true );
  $img_static_upload_2    = get_post_meta( $post->ID, 'img-static-upload-2', true );
  ?>




  <section class="widget_home">
    <div class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <!-- Wrapper for slides -->
        <?php

        $slider_group = get_post_meta( $post->ID, 'slider-group', true );
        piklist( get_template_directory() . '/piklist/parts/templates/slider-main-template', array(
          'data' => $slider_group,
          'loop' => 'data'
        ) );
        ?>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href=".carousel" role="button" data-slide="prev">
        <span class="fa fa-angle-left"></span>
      </a>
      <a class="right carousel-control" href=".carousel" role="button" data-slide="next">
        <span class="fa fa-angle-right"></span>
      </a>
    </div>

    <div class="feat_img_wrap">
        <?php
        foreach ($img_static_upload_1 as $image1) {
        ?>
        <div>
          <a href="<?php echo get_permalink( $img_static_page_link_1 ) ?>">
            <img src="<?php echo wp_get_attachment_url( $image1 ) ?>" class="img-responsive"/>
          </a>
        </div>
      <?php
      }

       foreach ( $img_static_upload_2 as $image2 ) {
        ?>
        <div>
          <a href="<?php echo get_permalink( $img_static_page_link_2 ) ?>">
            <img src="<?php echo wp_get_attachment_url( $image2 ) ?>" class="img-responsive"/>
          </a>
        </div>
      <?php
      }
      ?>


    </div>
  </section>



<?php
endwhile;
wp_reset_postdata();
echo $after_widget;
?>
