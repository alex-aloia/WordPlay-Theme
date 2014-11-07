<?php


add_image_size( 'port_thumb_med', 350 ); // 300 pixels wide (and unlimited height)
//add_image_size( 'archive-staff-thumb', 82, 95 );
//add_image_size( 'archive-project-thumb', 122, 170 );


add_filter( 'piklist_post_types', 'custom_post_types' );
function custom_post_types( $post_types ) {
  $post_types = array_merge( $post_types, array(
    // staff
    'cpt_portfolio'   => array(
      'labels'          => array(
        'name' => __('Portfolio', 't3i'),
        'singular_name' => __('Portfolio Item', 't3i'),
        'add_new' => __('Add Port Item', 'cpt_portfolio'),
        'add_new_item' => __('Add Port Item', 'cpt_portfolio')
      ),
      'title'           => __( 'Item Title' ),
      'public'          => true,
      'has_archive'     => true,
      'rewrite'         => array(
        'slug' => 'cpt_portfolio'
      ),
      'capability_type' => 'post',
      'supports'        => array(
        'title',
        'thumbnail',
        'video',
        'author',
        'revisions'
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
