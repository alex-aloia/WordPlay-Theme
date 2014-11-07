<?php
/**
 * Scripts and stylesheets
 *
 * Enqueue stylesheets in the following order:
 * 1. /theme/assets/css/main.css
 *
 * Enqueue scripts in the following order:
 * 1. jquery-1.11.1.min.js via Google CDN
 * 2. /theme/assets/js/vendor/modernizr.min.js
 * 3. /theme/assets/js/scripts.js (in footer)
 *
 * Google Analytics is loaded after enqueued scripts if:
 * - An ID has been defined in config.php
 * - You're not logged in as an administrator
 */
















function roots_scripts() {
  /**
   * The build task in Grunt renames production assets with a hash
   * Read the asset names from assets-manifest.json
   */
  if (WP_ENV === 'dev') {
    $assets = array(
      'css'       => '/assets/css/main.css',
      'js-head'        => '/assets/js/js-head.js',
      'js-foot'        => '/assets/js/js-foot.js',
    // 'modernizr' => '/assets/vendor/modernizr/modernizr.js',
      'jquery'    => '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.js'
    );
  } else {
    $get_assets = file_get_contents(get_template_directory() . '/assets/manifest.json');
    $assets     = json_decode($get_assets, true);
    $assets     = array(
      'css'       => '/assets/css/main.min.css' . $assets['assets/css/main.min.css'],
      'js-head'        => '/assets/js/js-head.min.js' . $assets['assets/js/js-head.min.js'],
      'js-foot'        => '/assets/js/js-foot.min.js' . $assets['assets/js/js-foot.min.js'],
    //  'modernizr' => '/assets/js/vendor/modernizr.min.js',
      'jquery'    => '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'
    );
  }

  wp_enqueue_style('roots_css', get_template_directory_uri() . $assets['css'], false, null);

  /**
   * jQuery is loaded using the same method from HTML5 Boilerplate:
   * Grab Google CDN's latest jQuery with a protocol relative URL; fallback to local if offline
   * It's kept in the header instead of footer to avoid conflicts with plugins.
   */
  if (!is_admin() && current_theme_supports('jquery-cdn')) {
    wp_deregister_script('jquery');
    wp_register_script('jquery', $assets['jquery'], array(), null, false);
    add_filter('script_loader_src', 'roots_jquery_local_fallback', 10, 2);
  }

  if (is_single() && comments_open() && get_option('thread_comments')) {
    wp_enqueue_script('comment-reply');
  }

  //wp_enqueue_script('modernizr', get_template_directory_uri() . $assets['modernizr'], array(), null, false);
  wp_enqueue_script('jquery');

  // scripts in header
  wp_enqueue_script('js-head', get_template_directory_uri() . $assets['js-head'], array(), null, false); // false indicates scripts in header
  // scripts in footer
  wp_enqueue_script('js-foot', get_template_directory_uri() . $assets['js-foot'], array(), null, true); // true indicates scripts in footer


  wp_enqueue_script( 'my-ajax-request', get_template_directory_uri().'/assets/js/ajax.js', 'jquery', true);
  //wp_localize_script( 'my-ajax-request', 'MyAjax', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) );

  wp_localize_script( 'my-ajax-request', 'ajax_handler', array(
      // URL to wp-admin/admin-ajax.php to process the request
      'ajaxurl'          => admin_url( 'admin-ajax.php' ),

      // generate a nonce with a unique ID "myajax-post-comment-nonce"
      // so that you can check it later when an AJAX request is sent
      'postCommentNonce' => wp_create_nonce( 'myajax-post-comment-nonce' )
    )
  );

}
add_action('wp_enqueue_scripts', 'roots_scripts', 100);



function example_ajax_request() {

  $nonce = $_POST['postCommentNonce'];

  // check to see if the submitted nonce matches with the
  // generated nonce we created earlier
 if ( ! wp_verify_nonce( $nonce, 'myajax-post-comment-nonce' ) )
    die ( 'Busted!');

//  if (!wp_verify_nonce($nonce, 'myajax-post-comment-nonce'))
//    exit('Busted !');

    // ignore the request if the current user doesn't have
    // sufficient permissions
//    if ( current_user_can( 'edit_posts' ) ) {


      // get the submitted parameters
      $postID = $_POST['postID'];
  //      $post_id = $_REQUEST['post_id'];

//  $vote_count = get_post_meta($_REQUEST["postID"], "votes", true);
  $url = wp_get_attachment_url( get_post_thumbnail_id($postID) );
      // generate the response
      header( "Content-Type: application/json" );
      //echo 'Post ID = ' . $postID;
      echo json_encode($url);
      //echo json_encode('Nonse = ' . $nonce);
//  echo json_encode( 'Post ID = ' . $postID->post_title );

      // response output
  //    echo json_encode($post_id);
//      echo 'nonce = ' . $nonce;
 //   }

 // else {
 //   echo 'no access';
 // }

    // IMPORTANT: don't forget to "exit"
    exit;
}





//function example_ajax_request() {
//
//  // The $_REQUEST contains all the data sent via ajax
//  if ( isset($_REQUEST) ) {
//
//    $post_id = $_REQUEST['post_id'];
//    $nonce = $_REQUEST['postCommentNonce'];
//
//    // Let's take the data that was sent and do something with it
//    if ( $post_id > 0 ) {
//      echo $nonce;
//    }
//
//    // If you're debugging, it might be useful to see what was sent in the $_REQUEST
//    // print_r($_REQUEST);
//
//  }
//
//  // Always die in functions echoing ajax content
//  die();
//}

add_action( 'wp_ajax_example_ajax_request', 'example_ajax_request' );

// If you wanted to also use the function for non-logged in users (in a theme for example)
 add_action( 'wp_ajax_nopriv_example_ajax_request', 'example_ajax_request' );










// http://wordpress.stackexchange.com/a/12450
function roots_jquery_local_fallback($src, $handle = null) {
  static $add_jquery_fallback = false;

  if ($add_jquery_fallback) {
    echo '<script>window.jQuery || document.write(\'<script src="' . get_template_directory_uri() . '/assets/vendor/jquery/dist/jquery.min.js?1.11.1"><\/script>\')</script>' . "\n";
    $add_jquery_fallback = false;
  }

  if ($handle === 'jquery') {
    $add_jquery_fallback = true;
  }

  return $src;
}
add_action('wp_head', 'roots_jquery_local_fallback');

/**
 * Google Analytics snippet from HTML5 Boilerplate
 *
 * Cookie domain is 'auto' configured. See: http://goo.gl/VUCHKM
 */
function roots_google_analytics() { ?>
<script>
  <?php if (WP_ENV === 'production') : ?>
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  <?php else : ?>
    function ga() {
      console.log('GoogleAnalytics: ' + [].slice.call(arguments));
    }
  <?php endif; ?>
  ga('create','<?php echo GOOGLE_ANALYTICS_ID; ?>','auto');ga('send','pageview');
</script>

<?php }
if (GOOGLE_ANALYTICS_ID && (WP_ENV !== 'production' || !current_user_can('manage_options'))) {
  add_action('wp_footer', 'roots_google_analytics', 20);
}
