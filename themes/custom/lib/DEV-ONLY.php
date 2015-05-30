<?php
/**
 * Theme Dev/Testing ONLY! Not to be used on a production site!!!
 */

add_action( 'wp_footer', 'theme_wrap_info' );
function theme_wrap_info() {
  $format = '<p><span>The %s template being used is:</span> %s</p>';
  $main   = Theme_Wrapper::$main_template;
  global $template;
  echo '<div class="template_dev_info container">';
  printf( $format, 'Main', $main );
  printf( $format, 'Base', $template );
  echo '</div>';
}
