<?php
/**
 * What Page? Site Front Page
 * Only landing content needed; page header template part dropped.
 */
?>

<?php //get_template_part('templates/content', 'front-page'); ?>

<?php
  while (have_posts()) : the_post();
  //get_template_part('templates/content', get_post_format());
  get_template_part('assets/img/inline', 'symbols.svg');
  endwhile;
?>







