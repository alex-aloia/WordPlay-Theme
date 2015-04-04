<?php

add_filter( 'piklist_post_types', 'vid_intro_post_type' );

function vid_intro_post_type( $post_types ) {
  $post_types = array_merge( $post_types, array(
    // staff
    'cpt_vid_intro'   => array(
      'labels'          => array(
        'name' => __('Video Intros'),
        'singular_name' => __('Video Intro'),
        'add_new' => __('Add Intro'),
        'add_new_item' => __('Add Intro')
      ),
      'title'           => __( 'Page Title' ),
      'public'          => true,
      'has_archive'     => true,
      'hierarchical'    => true,
      'rewrite'         => array(
        'slug' => 'greeting'
      ),
      'capability_type' => 'post',
      'supports'        => array(
        'title',
        'thumbnail',
        'author',
        'revisions',
        'page-attributes'
      ),
      'hide_meta_box'   => array(
        'slug',
        'author',
        'revisions',
        'comments',
        'commentstatus'
      )
    )

  ) );

  return $post_types;
}
