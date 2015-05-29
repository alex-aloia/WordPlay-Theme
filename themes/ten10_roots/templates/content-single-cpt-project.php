<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?>>
    <header>
      <h1 class="entry-title"><?php the_title(); ?></h1>
      <?php get_template_part('templates/entry-meta'); ?>
      <?php
        echo get_post_meta($post->ID, 'cpt_project', true);
        echo get_post_meta($post->ID, 'project_trailer_url', true);
        //echo get_post_meta($post->ID, 'staff_position', true);
      the_post_thumbnail();
      ?>

    </header>
    <div class="entry-content">
      <?php //the_content(); ?>

      <?php
      $video_link = 'https://www.youtube.com/watch?v=q86u0bDE17w';
      $video_embed_code = wp_oembed_get( $video_link, array( 'autoplay' => 1, 'rel' => 0) );
      ?>



    </div>
    <footer>
      <?php wp_link_pages(array('before' => '<nav class="page-nav"><p>' . __('Pages:', 'roots'), 'after' => '</p></nav>')); ?>
    </footer>
    <?php comments_template('/templates/comments.php'); ?>
  </article>
<?php endwhile; ?>
