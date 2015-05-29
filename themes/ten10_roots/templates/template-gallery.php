<?php
/*
Template Name: Gallery Page
*/
global $post;
if ( ! empty( $post ) ) {
  $args = array( 'post_type' => 'cpt_project', 'posts_per_page' => - 1 );
  $loop = new WP_Query( $args );

  function get_youtube_id( $url ) {
    if ( strpos( $url, "v=" ) !== false ) {
      return substr( $url, strpos( $url, "v=" ) + 2, 11 );
    } elseif ( strpos( $url, "embed/" ) !== false ) {
      return substr( $url, strpos( $url, "embed/" ) + 6, 11 );
    }
  }
}
?>

<div class="archive-gallery">
  <section class="content-wrap">
    <div class="content">
      <h1>Gallery</h1>

        <?php while (have_posts()) : the_post();?>
              <?php the_content(); ?>
        <?php endwhile;
        wp_reset_postdata() ?>

      <article class="entry-content">
        <?php
        while ( $loop->have_posts() ) :
          $loop->the_post();
          $media_URL  = get_post_meta( $post->ID, 'vid_embed_url', true );
          $short_desc = get_post_meta( $post->ID, 'project_desc_short', true );
          $custom_vid_thumb = get_post_meta( $post->ID, 'custom_vid_thumb', true );

          if ( $media_URL ) {
            $media_ID            = get_youtube_id( $media_URL );
            if ( !empty($custom_vid_thumb) ) {
              $thumb_url = wp_get_attachment_url( $custom_vid_thumb );
              $thumb_lrg_url = $thumb_url;
            }
            else {
              $thumb_url     = 'http://i1.ytimg.com/vi/' . $media_ID . '/mqdefault.jpg';
              $thumb_lrg_url = 'http://i1.ytimg.com/vi/' . $media_ID . '/maxresdefault.jpg';
            }

            echo "<div class='vid_link_wrap'>
            <a class='popup-image-fit-width' href='" . get_the_permalink() . "' data-mfp-src='" . $thumb_lrg_url . "'>
              <img src='" . $thumb_url . "'>
            <div class='hover_info'>
              <p class='title'>" . get_the_title() . "</p>";
            if ( ! empty( $short_desc ) ) {
              echo "<p>" . $short_desc . "</p>";
            }
            echo "</div>
                </a>
            </div>";
          }

          ?>


        <?php
        endwhile;
        ?>



      </article>
    </div>
  </section>


</div>









