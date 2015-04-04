<?php
/**
 * Bug testing only. Not to be used on a production site!!
 * User: tripl3inf
 * Date: 8/26/14
 * Time: 9:28 PM
 */
add_action( 'wp_footer', 'roots_wrap_info' );
function roots_wrap_info() {
  $format = '<h6>The %s template being used is: %s</h6>';
  $main   = Roots_Wrapping::$main_template;
  global $template;
  printf( $format, 'Main', $main );
  printf( $format, 'Base', $template );
}
