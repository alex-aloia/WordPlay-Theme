<?php



function portfolio_page_request() {

  $nonce = $_POST['postCommentNonce'];
  if ( ! wp_verify_nonce( $nonce, 'myajax-post-comment-nonce' ) ) die ( 'Busted!');




//  global $wpdb;
//  global $terms;
  global $wp_query;
  global $post;
  $success = false;

  $args = array(
    'numberposts' => -1,
    'post_type' => 'cpt_portfolio'
  );

  $html = "";
  $html .= "<ul class='portfolio'>";

  $port_items = get_posts( $args );
  foreach( $port_items as $post ) :  setup_postdata($post);
    $postID = get_the_ID();
    $permalink = get_permalink( $postID );
    //$port_imgW = get_post_meta( $postID, 'port_imgW' );
    $thumb = wp_get_attachment_url( get_post_thumbnail_id($postID) );

    $html .= '<li>
                <a href="'.$permalink.'">
                    <img src="'.$thumb.'"  />
                </a>
              </li>';
  endforeach;

  $html .= '</ul>';

// Build the response...
  $success = true;
  $response = json_encode(array(
    'success' => $success,
    'html' => $html
  ));

// Construct and send the response
  header("content-type: application/json");
  echo $response;










  // IMPORTANT: don't forget to "exit"
  exit;
}
add_action( 'wp_ajax_portfolio_page_request', 'portfolio_page_request' );
add_action( 'wp_ajax_nopriv_portfolio_page_request', 'portfolio_page_request' );














//
//
//
//
//
//function portfolio_ajax_request() {
//
//  $nonce = $_POST['postCommentNonce'];
//
//  // check to see if the submitted nonce matches with the
//  // generated nonce we created earlier
// if ( ! wp_verify_nonce( $nonce, 'myajax-post-comment-nonce' ) )
//    die ( 'Busted!');
//
//
//    // ignore the request if the current user doesn't have
//    // sufficient permissions
////    if ( current_user_can( 'edit_posts' ) ) {
//
//
//      // get the submitted parameters
//      $postID = $_POST['postID'];
//  //      $post_id = $_REQUEST['post_id'];
//
//  $copy = get_post_meta($postID, 'port_description', true);
//  $url = wp_get_attachment_url( get_post_thumbnail_id($postID) );
//
//  $result['copy'] = $copy;
//  $result['url'] = $url;
//
//      // generate the response
//      header( "Content-Type: application/json" );
//      //echo 'Post ID = ' . $postID;
//      //echo json_encode($copy);
//      echo json_encode($result);
//
//      //echo json_encode('Nonse = ' . $nonce);
////  echo json_encode( 'Post ID = ' . $postID->post_title );
//
//
// // else {
// //   echo 'no access';
// // }
//
//    // IMPORTANT: don't forget to "exit"
//    exit;
//}
//add_action( 'wp_ajax_portfolio_ajax_request', 'portfolio_ajax_request' );
//add_action( 'wp_ajax_nopriv_portfolio_ajax_request', 'portfolio_ajax_request' );
//

