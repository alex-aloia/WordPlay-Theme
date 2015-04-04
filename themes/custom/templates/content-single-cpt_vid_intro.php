<?php while (have_posts()) : the_post();

// fetch custom meta data
  $vidID = get_post_meta($post->ID, 'vid_intro_media', true);
  $vidURL = wp_get_attachment_url($vidID);
  //$parsed = parse_url( wp_get_attachment_url( $vidID ) );
  $copy = get_post_meta($post->ID, 'vid_intro_copy', true);
//$vid_thumb = get_video_thumbnail();
//$project_desc_long = get_post_meta( $post->ID, 'project_desc_long', true );

  ?>

  <article>
    <h1 class="entry-title"><?php the_title(); ?></h1>

    <?php get_template_part('templates/entry-meta'); ?>

    <div class="entry-content">
      <?php the_content(); ?>

      <div class="embed-responsive video-js-responsive-container vjs-hd">
        <video data-setup="{}" class="embed-responsive-item video-js vjs-default-skin vjs-big-play-centered" controls preload="auto">
          <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
      </div>

      <?php echo $copy; ?>

    </div>


  </article>

<?php endwhile; ?>
