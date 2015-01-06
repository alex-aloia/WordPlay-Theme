<?php
/*
Title: Project Info
Post Type: cpt_portfolio
*/

//piklist( 'field', array(
//  'type'        => 'text',
//  'field'       => 'port_title',
//  'label'       => 'Title',
//  'description' => 'Enter a title for the portfolio piece',
//  'value'       => 'title',
//  'columns'     => 6,
//  'attributes'  => array(
//    'class' => 'text'
//  )
//) );


piklist('field', array(
  'type' => 'select',
  'field' => 'item_type',
  'value' => 'option1', // Sets default to Option 2
  'label' => 'Type',
  'columns' => '6',
  'description' => 'Portfolio item type',
  'attributes' => array(
    'class' => 'text'
  )
,'choices' => array(
  'option1' => 'General',
  'option2' => 'Web',
  'option3' => 'Print',
  'option4' => 'Identity'
  )
));


piklist( 'field', array(
  'type'        => 'text',
  'field'       => 'port_imgW',
  'label'       => 'Max Img Display Width',
  'description' => 'Max width for portfolio featured image',
  'columns'     => 2,
//  'value'       => '0',
  'attributes'  => array(
  'class' => 'text'
)
) );


piklist( 'field', array(
  'type'        => 'text',
  'field'       => 'port_thumbW',
  'label'       => 'Thumbnail Width',
  'columns'     => 2,
  'value'       => 200,
  'attributes'  => array(
  'class' => 'text'
)
) );


piklist( 'field', array(
  //'type'        => 'textarea',
  'type'        => 'editor',
  'field'       => 'port_description',
  'label'       => 'Description',
  'description' => 'Description for portfolio piece',
  'value'       => 'enter project description',
  'columns'     => 12,
  'options'     => array(
    'media_buttons' => false,
    'tinymce'       => true,
    'quicktags'     => true,
  ),
  'attributes'  => array(
    'class' => 'text'
  )
) );


// END

