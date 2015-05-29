<?php while (have_posts()) : the_post();
  // fetch custom meta data
  $vid_link = get_post_meta( $post->ID, 'vid_embed_url', true );
  $vid_thumb = get_video_thumbnail();
  $project_desc_long = get_post_meta( $post->ID, 'project_desc_long', true );

?>

  <?php //delete_post_meta_by_key( 'mw_director' );
  ?>

  <section class="content-wrap template-single-project">
    <div class="content">
      <?php
        if ( !empty ($vid_link) ) {
          echo "<div class='video_placeholder image-responsive'>
            <a class='popup-youtube' href='" . $vid_link . "'>
              <img src='" . $vid_thumb . "' width='100%' />
            </a>
          </div>";
        }
      ?>
      <div class="entry-content">
        <?php echo $project_desc_long; ?>
      </div>
      <?php dynamic_sidebar('sidebar-content-rail'); ?>
    </div>

    <div class="right_rail">
      <?php dynamic_sidebar('sidebar-right-rail'); ?>
    </div>
  </section>


<?php endwhile; ?>




