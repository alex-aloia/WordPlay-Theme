<?php
/**
 * Enable theme features
 */
add_theme_support( 'soil-clean-up' );         // Enable clean up from Soil
add_theme_support( 'soil-relative-urls' );    // Enable relative URLs from Soil
add_theme_support( 'soil-nice-search' );      // Enable /?s= to /search/ redirect from Soil
add_theme_support( 'bootstrap-gallery' );     // Enable Bootstrap's thumbnails component on [gallery]
add_theme_support( 'jquery-cdn' );            // Enable to load jQuery from the Google CDN

//add_image_size( 'featured_img_split', 600, 665, true );
//add_image_size( 'img_gallery_home', 785, 355, true ); // Permalink thumbnail size

//add_image_size( 'video-placeholder-lrg', 768, 480, true ); // 220 pixels wide by 180 pixels tall, hard crop mod






// THUMBNAILS TO ADMIN POST VIEW
add_filter('manage_posts_columns', 'posts_columns', 5);
add_action('manage_posts_custom_column', 'posts_custom_columns', 5, 2);

function posts_columns($defaults){
  $defaults['custom_post_thumbs'] = __('Preview');
  return $defaults;
}

function posts_custom_columns($column_name, $id){
  if($column_name === 'custom_post_thumbs'){
    echo the_post_thumbnail( 'admin-thumb' );
  }
}

/**
 * Configuration values
 */
define( 'GOOGLE_ANALYTICS_ID', '' ); // UA-XXXXX-Y (Note: Universal Analytics only, not Classic Analytics)


//footer nav
$footer_nav_id                     = wp_create_nav_menu( __( 'Footer Navigation', 'roots' ), array( 'slug' => 'footer_nav' ) );
$roots_nav_theme_mod['footer_nav'] = $footer_nav_id;


$film_nav_id                     = wp_create_nav_menu( __( 'Film Menu', 'roots' ), array( 'slug' => 'film_nav' ) );
$roots_nav_theme_mod['film_nav'] = $film_nav_id;


/**
 * .main classes
 */
function roots_main_class() {
  if ( roots_display_sidebar() ) {
    // Classes on pages with the sidebar
    $class = 'col-sm-8';
  } else {
    // Classes on full width pages
    $class = 'col-sm-12';
  }

  //  $class = 'test';
  //return apply_filters('roots/main_class', $class);
}

/**
 * .sidebar classes
 * function roots_sidebar_class() {
 * return apply_filters('roots/sidebar_class', 'col-sm-4');
 * }
 */


/**
 * Define which pages shouldn't have the sidebar
 *
 * See lib/sidebar.php for more details
 */


// find custom post types
function is_cpt_return() {
  if ( get_post_type() == 'gallery' ) {
    return true;
  } else {
    return false;
  }
}


function roots_display_sidebar() {
  $sidebar_config = new Roots_Sidebar(
  /**
   * Conditional tag checks (http://codex.wordpress.org/Conditional_Tags)
   * Any of these conditional tags that return true won't show the sidebar
   *
   * To use a function that accepts arguments, use the following format:
   *
   * array('function_name', array('arg1', 'arg2'))
   *
   * The second element must be an array even if there's only 1 argument.
   */
    array(
      'is_cpt_return',
      'is_404',
      'is_front_page'
    ),
    /**
     * Page template checks (via is_page_template())
     * Any of these page templates that return true won't show the sidebar
     */
    array(
      'template-custom.php',
      'templates/template-feature-split.php'
    )
  );

  return apply_filters( 'roots/display_sidebar', $sidebar_config->display );
}

/**
 * $content_width is a global variable used by WordPress for max image upload sizes
 * and media embeds (in pixels).
 *
 * Example: If the content area is 640px wide, set $content_width = 620; so images and videos will not overflow.
 * Default: 1140px is the default Bootstrap container width.
 */
if ( ! isset( $content_width ) ) {
  $content_width = 1140;
}





// remove comments tab from admin menubar
// remove links/menus from the admin bar
function mytheme_admin_bar_render() {
  global $wp_admin_bar;
  $wp_admin_bar->remove_menu( 'comments' );


}

add_action( 'wp_before_admin_bar_render', 'mytheme_admin_bar_render' );


// Use your custom URL logo link
//function wpc_url_login(){
//    return "http://t3inf.com/"; // your URL here
//}
//add_filter('login_headerurl', 'wpc_url_login');


// Custom WordPress Login Logo
function login_css() {
  wp_enqueue_style( 'login_css', get_template_directory_uri() . '/assets/css/login.css' );
}

add_action( 'login_head', 'login_css' );


// Custom WordPress Footer
function remove_footer_admin() {
  echo '&copy; 2014 - tripl3infinity Design &copy Dev';
}

add_filter( 'admin_footer_text', 'remove_footer_admin' );


// Remove dashboard widgets
add_action( 'wp_dashboard_setup', 'wpc_dashboard_widgets' );
function wpc_dashboard_widgets() {
  global $wp_meta_boxes;
  // Last comments
  unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments'] );
  // Incoming links
  unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links'] );
}


function hide_admin_bar_from_front_end() {
  if ( is_blog_admin() ) {
    return true;
  }
  remove_action( 'wp_head', '_admin_bar_bump_cb' );

  return false;
}

//add_filter( 'show_admin_bar', 'hide_admin_bar_from_front_end' );





//function wp_get_attachment( $attachment_id ) {
//  $attachment = get_post( $attachment_id );
//  return array(
//    'alt' => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
//    'caption' => $attachment->post_excerpt,
//    'description' => $attachment->post_content,
//    'href' => get_permalink( $attachment->ID ),
//    'src' => $attachment->guid,
//    'title' => $attachment->post_title
//  );
//}

//add_filter('oembed_dataparse','test',10,3);
//
//function test($return, $data, $url) {
//  if ($data->provider_name == 'YouTube') {
//    return "<img src='{$data->thumbnail_url}'>";
//  }
//  else return $return;
//}
