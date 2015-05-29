<?php
/*
FOR => Featured Movie Widget
*/


piklist( 'field', array(
  'type'     => 'group',
//  'field'    => 'field_groups',
  'label'    => __( 'Slider Panels' ),
//  'columns'  => 12,
  'add_more' => true,
  'validate' => array(
    array(
      'type'    => 'limit',
      'options' => array(
        'min' => 2,
        'max' => 4
      )
    )
  ),
  'fields'   => array(

// video url list
    array(
      'type'        => 'text',
      'field'       => 'vid_embed_url',
      'label'       => __( 'Add YouTube URL' ),
      'description' => __( 'Add a URL to embed it in the widget bar. Up to 4 videos can be added.' ),
      'attributes'  => array(
        'class' => 'list_item'
      )
    ),
    array(
      'type'        => 'file',
      'field'       => 'upload_slider_img',
      'label'       => 'Upload Slider Image',
      'description' => 'Choose an image for the main slider/gallery image.',
      'options'     => array(
        'modal_title' => 'Add File(s)',
        'button'      => 'Add Slider Image',
      )
    )
  ),


) );








// END widget
?>
