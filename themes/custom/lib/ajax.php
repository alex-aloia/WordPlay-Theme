<?php
function portfolio_page_request()
{

  $nonce = $_POST['postCommentNonce'];
  if (!wp_verify_nonce($nonce, 'myajax-post-comment-nonce')) die ('Busted!');

  global $wp_query;
  global $post;

  $args = array(
    'numberposts' => -1,
    'post_type' => 'cpt_portfolio',
    'orderby' => 'menu_order',
    'order' => 'ASC'
  );

  $port_items = get_posts($args);
  $responses = array();

  foreach ($port_items as $post) {
    //$postID = sanitize_text_field($post->ID);
    $postID = $post->ID;
    $postTitle = sanitize_text_field($post->post_title);
    $info = get_post_meta($post->ID, 'port_description');
    $info = sanitize_text_field($info[0]);

    $thumb_id = get_post_thumbnail_id();
    $thumb = wp_get_attachment_image_src($thumb_id, 'full');
    //$thumb = sanitize_text_field( wp_get_attachment_url( get_post_thumbnail_id($postID) ));

				$thumb_sml = wp_get_attachment_thumb_url($thumb_id);

    $imgW = get_post_meta($post->ID, 'port_imgW');
    $imgW = sanitize_text_field($imgW[0]);
    $thumbW = get_post_meta($post->ID, 'port_thumbW');
    $thumbW = sanitize_text_field($thumbW[0]);

    $extLink = get_post_meta($post->ID, 'ext_link');
    $extLink = sanitize_text_field($extLink[0]);

    $response = array(
      'ID' => $thumb_id,
      'title' => $postTitle,
      'content' => $info,
						'thumb_url' => $thumb_sml,
      'img_url' => $thumb[0],
      'img_w' =>  $thumb[1],
      'img_h' =>  $thumb[2],

      'img_w' => $imgW,
      'thumb_w' => $thumbW,
      'ext_link' => $extLink
    );
    array_push($responses, $response);
  }
  header("content-type: application/json");

  if ($responses) {
    wp_send_json_success($responses);
  } else {
    wp_send_json_error();
  }

  // IMPORTANT: don't forget to "exit"
  exit;

}

add_action('wp_ajax_portfolio_page_request', 'portfolio_page_request');
add_action('wp_ajax_nopriv_portfolio_page_request', 'portfolio_page_request');



/*
function contact_page_request(){

  $nonce = $_POST['postCommentNonce'];
  if (!wp_verify_nonce($nonce, 'myajax-post-comment-nonce')) die ('Busted!');

  global $wp_query;
  global $post;

  $wp_query = new WP_Query('page_id=14');

//$response = 'test';

  while ($wp_query->have_posts()) {
    $wp_query->the_post();
//    $response = get_the_content();
    $response = do_shortcode('[cscf-contact-form]');

  }


//    $thumbW = sanitize_text_field( $thumbW[0] );

  header("content-type: application/json");

  if ($response) {
    wp_send_json_success($response);
  } else {
    wp_send_json_error();
  }

  exit;

}

add_action('wp_ajax_contact_page_request', 'contact_page_request');
add_action('wp_ajax_nopriv_contact_page_request', 'contact_page_request');
*/
