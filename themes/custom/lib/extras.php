<?php
/**
 * Clean up the_excerpt()
 */
function custom_excerpt_more($more) {
  return ' &hellip; <a href="' . get_permalink() . '">' . __('Continued', 'custom') . '</a>';
}
add_filter('excerpt_more', 'custom_excerpt_more');

/**
 * Manage output of wp_title()
 */
function custom_wp_title($title) {
  if (is_feed()) {
    return $title;
  }

  $title .= get_bloginfo('name');

  return $title;
}
add_filter('wp_title', 'custom_wp_title', 10);
