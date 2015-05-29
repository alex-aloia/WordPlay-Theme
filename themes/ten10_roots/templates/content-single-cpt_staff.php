<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?>>
    <header>
      <h1 class="entry-title"><?php the_title(); ?></h1>
      <?php get_template_part('templates/entry-meta'); ?>
      <?php
        echo get_post_meta($post->ID, 'cpt_staff', true);
        echo get_post_meta($post->ID, 'staff_name', true);
        echo get_post_meta($post->ID, 'staff_position', true);
      the_post_thumbnail();
      ?>

    </header>
    <div class="entry-content">
      <?php the_content(); ?>



    </div>
    <footer>
      <?php wp_link_pages(array('before' => '<nav class="page-nav"><p>' . __('Pages:', 'roots'), 'after' => '</p></nav>')); ?>
    </footer>
    <?php comments_template('/templates/comments.php'); ?>
  </article>
<?php endwhile; ?>
