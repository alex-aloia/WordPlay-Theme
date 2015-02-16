<?php
/*
Title: Main Menu
Post Type: cpt_main_menu
*/


piklist( 'field', array(
  'type'        => 'html',
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

