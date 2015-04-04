<?php
/*
Title: Video Intros
Post Type: cpt_vid_intro
*/


piklist('field', array(
  'type' => 'file'
,'field' => 'vid_intro_media'
,'scope' => 'post_meta'
,'label' => __('Add File(s)','piklist')
,'description' => __('This is the uploader seen in the admin by default.','piklist')
,'options' => array(
    'modal_title' => __('Add File(s)','piklist')
  ,'button' => __('Add','piklist')
  )
));


piklist( 'field', array(
  'type'        => 'editor',
  'field'       => 'vid_intro_copy',
  'label'       => 'Copy',
  'columns'     => 12,
  'options'     => array(
    'media_buttons' => false,
    'tinymce'       => true,
    'quicktags'     => true,
  ),
  'attributes'  => array(
    'class' => 'text'
  )
));





/*
piklist( 'field', array(
  'type'        => 'text',
  'field'       => 'ext_link',
  'label'       => 'External Link',
  'columns'     => 12,
  'attributes'  => array(
  'class' => 'text'
)
));
*/

// END

