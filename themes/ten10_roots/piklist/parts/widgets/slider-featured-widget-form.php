<?php


piklist( 'field', array(
  'type'     => 'group',
  'field'    => 'field_groups',
  'label'    => __( 'Slider Panels' ),
//  'columns'  => 12,
  'add_more' => true,
  'validate' => array(
    array(
      'type' => 'limit',
      'options' => array(
        'min' => 0,
        'max' => 2
      )
    )
  ),
  'fields'   => array(

    array(
      'type'    => 'select',
      'field'   => 'page_link',
//      'columns' => 12,
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
      'field'       => 'upload_slider_img',
// 'field' => 'my_image',
//      'scope'       => 'post_meta',
      'label'       => 'Upload Slider Image',
      'description' => 'Choose an image for the main slider/gallery image.',
      'options'     => array(
        'modal_title' => 'Add File(s)',
        'button'      => 'Add Slider Image',
      )
    )
  ),


//array(
//  'type'    => 'select',
//  'field'   => 'cpt_link',
//  'label'   => 'Choose Sidebar Menu',
//  'value'   => 'none',
//  'choices' => piklist(
//    get_pages(
//      array(
//        'post_type' => 'page',
//        'child_of'  => 0,
//        'parent'    => - 1,
//        //  ,'orderby' => 'post_date'
//      ),
//       'objects'
//    ),
//     array(
//      'ID',
//      'post_title'
//    )
//  )
//)


));






//piklist('field', array(
//  'type' => 'file',
//  'field' => 'upload_slider_img',
//// 'field' => 'my_image',
//  'scope' => 'post_meta',
//  'label' => 'Upload Slider Image',
//  'description' => 'Choose an image for the main slider/gallery image.',
//  'options' => array(
//    'modal_title' => 'Add File(s)',
//    'button' => 'Add Slider Image',
//  )
//));

//piklist( 'field', array(
//  'type'    => 'select',
//  'field'   => 'cpt_link',
//  'label'   => 'Choose Sidebar Menu',
//  'value'   => 'none',
//  'choices' => piklist(
//    get_pages(
//      array(
//        'post_type' => 'page',
//        'child_of'  => 0,
//        'parent'    => - 1,
//        //  ,'orderby' => 'post_date'
//      ),
//       'objects'
//    ),
//     array(
//      'ID',
//      'post_title'
//    )
//  )
//));



// END widget
?>
