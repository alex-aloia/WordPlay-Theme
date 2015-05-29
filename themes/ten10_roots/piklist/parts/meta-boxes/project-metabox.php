<?php
/*
Title: Project Info
Post Type: cpt_project
*/

piklist( 'field', array(
  'type'        => 'text',
  'field'       => 'project_director',
  'label'       => 'Director',
  'description' => 'Enter the project directors first & last name',
  'value'       => 'director',
  'columns'     => 12,
  'attributes'  => array(
    'class' => 'text'
  )
) );


piklist( 'field', array(
  'type'        => 'text',
  'field'       => 'project_producer',
  'label'       => 'Producer',
  'description' => 'Enter the project producers first & last name',
  'value'       => 'producer',
  'columns'     => 12,
  'attributes'  => array(
    'class' => 'text'
  )
) );


piklist( 'field', array(
  'type'        => 'textarea',
  'field'       => 'project_desc_short',
  'label'       => 'Project Short Description',
  'description' => 'Enter a short film description to be used as a teaser/excerpt',
  'value'       => 'enter project description',
  'columns'     => 12,
  'attributes'  => array(
    'class' => 'text'
  )
) );


piklist( 'field', array(
  'type'        => 'editor',
  'field'       => 'project_desc_long',
  'label'       => __( 'Project Long Description' ),
  'description' => __( 'The complete description that will be used as the body copy on the project details page' ),
  'options'     => array(
    'media_buttons' => false,
    'tinymce'       => true,
    'quicktags'     => false,
  ),
  'attributes'  => array(
    'class' => 'text',
  )
) );


//piklist( 'field', array(
//  'type'        => 'file',
//  'field'       => 'vid_embed_url',
//  'label'       => 'Add YouTube Video Link',
//  'description' => 'Add a YouTube URL to embed a video in the post. only one main video can be selected.',
//  'columns'     => 12,
//  'options'     => array(
//    'modal_title' => 'Add YouTube URL',
//    'button'      => 'Add Video',
//  )
//,'validate' => array(
//    array(
//      'type' => 'limit',
//      'options' => array(
//        'min' => 0,
//        'max' => 1
//      )
//    )
//  )
//) );





piklist( 'field', array(
  'type'        => 'file',
  'field'       => 'upload_slider_full_img',
// 'field' => 'my_image',
  'label'       => 'Upload Slider Image',
  'description' => 'Choose an image for the full-width slider gallery.',
  'columns'     => 12,
  'options'     => array(
    'modal_title' => 'Add File(s)',
    'button'      => 'Add Slider Image',
  )
) );


// Text field
piklist( 'field', array(
  'type'        => 'text',
  'field'       => 'vid_embed_url',
  'label'       => 'Add YouTube Video Link',
  'description' => 'Add a YouTube URL to embed a video in the post. only one main video can be selected.',
  'columns'     => 12,
  'attributes'  => array(
    'class' => 'text_class',
    'placeholder' => 'enter youtube url'
  )
));


piklist( 'field', array(
  'type'        => 'file',
  'field'       => 'custom_vid_thumb',
// 'field' => 'my_image',
  'label'       => 'Upload Video Thumbnail Image',
  'description' => 'Choose a custom image for the video thumbnail -- default is pulled from youtube.',
  'columns'     => 12,
  'options'     => array(
    'modal_title' => 'Add Video Thumb',
    'button'      => 'Add Video Thumb',
  )
) );


// END

