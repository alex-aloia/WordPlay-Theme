<?php
/*
Title: Slider Panels
Post Type: cpt-slider
*/


piklist( 'field', array(
      'type' => 'group',
      'label' => __('Image 1'),
      'description' => __('Choose Static Image 1'),
      'add_more' => false,
     // 'position' => 'wrap',
      'fields' => array(

        array(
          'type'    => 'text',
          'field'   => 'img-static-title-1',
          'label'   => __( 'Title:' ),
          'columns' => 12,
        ),

        array(
          'type'    => 'select',
          'field'   => 'img-static-page-link-1',
          'label'   => __( 'Link to Page:' ),
          'description' => __('Choose the static featured image links'),
          'columns' => 12,
          'choices' => piklist(
            get_pages(
              array(
                'post_type' => 'page',
                'child_of'  => 0,
                'parent'    => - 1,
                //  ,'orderby' => 'post_date'
              ),
              'objects'
            ),
            array(
              'ID',
              'post_title'
            )
          )
        ),

        array(
          'type'        => 'file',
          'field'       => 'img-static-upload-1',
          //  'scope' => 'post_meta',
          'label'       => __( 'Add File(s)', 'piklist' ),
          'description' => __( 'This is the uploader seen in the admin by default.', 'piklist' ),
          'columns' => 2,
          'options'     => array(
            'modal_title' => __( 'Add File(s)', 'piklist' ),
            'button'      => __( 'Add Static Image', 'piklist' )
          )
        ),
      ),
    ));



piklist( 'field', array(
  'type' => 'group',
  'label' => __('Image 2'),
  'description' => __('Choose Static Image 2'),
  'add_more' => false,
  'fields' => array(

    array(
      'type'    => 'text',
      'field'   => 'img-static-title-2',
      'label'   => __( 'Title:' ),
      'columns' => 12,
    ),

    array(
      'type'    => 'select',
      'field'   => 'img-static-page-link-2',
      'label'   => __( 'Link to Page:' ),
      'description' => __('Choose the static featured image links'),
      'columns' => 12,
      'choices' => piklist(
        get_pages(
          array(
            'post_type' => 'page',
            'child_of'  => 0,
            'parent'    => - 1,
            //  ,'orderby' => 'post_date'
          ),
          'objects'
        ),
        array(
          'ID',
          'post_title'
        )
      )
    ),

    array(
      'type'        => 'file',
      'field'       => 'img-static-upload-2',
      'label'       => __( 'Add File(s)', 'piklist' ),
      'description' => __( 'This is the uploader seen in the admin by default.', 'piklist' ),
      'columns' => 2,
      'options'     => array(
        'modal_title' => __( 'Add File(s)', 'piklist' ),
        'button'      => __( 'Add Static Image', 'piklist' )
      )
    ),
  ),
));



piklist( 'field', array(
  'type'     => 'group',
  'field'    => 'slider-group',
  'label'    => __( 'Slider Panels' ),
  'description' => __('Create Slide Panels'),
 // 'template' => 'post_meta_custom',
  'add_more' => true,
  'fields'   => array(


    array(
      'type'    => 'text',
      'field'   => 'title',
      'label'   => __( 'Title:' ),
      'value' => 'Slider Panel',
      'columns' => 12,
      'attributes' => array(
      'placeholder' => 'Slider Panel'
      )
    ),

    array(
      'type'    => 'select',
      'field'   => 'page_link',
      'label'   => __( 'Link to Page:' ),
      'columns' => 12,
      'choices' => piklist(
        get_pages(
          array(
            'post_type' => 'page',
            'child_of'  => 0,
            'parent'    => - 1,
            //  ,'orderby' => 'post_date'
          ),
          'objects'
        ),
        array(
          'ID',
          'post_title'
        )
      )
    ),
    array(
      'type'        => 'file',
      'field'       => 'upload_media_slider_img',
      //  'scope' => 'post_meta',
      'label'       => __( 'Add File(s', 'piklist' ),
      'description' => __( 'This is the uploader seen in the admin by default.', 'piklist' ),
      'options'     => array(
        'modal_title' => __( 'Add File(s)', 'piklist' ),
        'button'      => __( 'Add Slider Image', 'piklist' )
      )
    )
  )

) );




// END

