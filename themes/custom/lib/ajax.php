<?php

/*
 * Basic Ajax Request Handler
 *

function ajax_request()
{

  $nonce = $_POST['postCommentNonce'];
  if (!wp_verify_nonce($nonce, 'myajax-post-comment-nonce')) die ('Busted!');

  global $wp_query;
  global $post;

  $args = array(
    'numberposts' => -1,
    'post_type' => 'custom_post_type_goes_here',
    'orderby' => 'menu_order',
    'order' => 'ASC'
  );

  $port_items = get_posts($args);
  $responses = array();

  foreach ($port_items as $post) {

    $postID = $post->ID;
    $postTitle = sanitize_text_field($post->post_title);

    $img_id = get_post_thumbnail_id();
    $img_url = wp_get_attachment_image_src($img_id, 'large');

    $response = array(
      'ID' => $img_id,
      'title' => $postTitle,
      'img_url' => $img_url[0],
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

add_action('wp_ajax_ajax_request', 'ajax_request');
add_action('wp_ajax_nopriv_request', 'ajax_request');

 */

