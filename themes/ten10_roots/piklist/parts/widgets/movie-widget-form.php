<?php
/*
FOR => Featured Movie Widget
*/

// director name field
piklist('field', array(
	'type' => 'text',
	'field' => 'mw_direc',
	'label' => __('Director Name:'),
	'attributes' => array(
		'class' => 'title',
    'placeholder' => 'enter director name'
	)
));

// producers name field
piklist('field', array(
  'type' => 'text',
  'field' => 'mw_producer',
  'label' => __('Producer Name:'),
  'attributes' => array(
    'class' => 'title',
    'placeholder' => 'enter producer name'
  )
));

// actor list
piklist('field', array(
	'type' => 'text',
	'field' => 'mw_list_actors',
	'label' => __('Staring Actors:'),
  'add_more' => true,
	'attributes' => array(
		'class' => 'list-item',
    'placeholder' => 'enter actor name'
	)
));

// budget field
piklist('field', array(
  'type' => 'text',
  'field' => 'mw_budget',
  'label' => __('Estimated Budget:'),
  'attributes' => array(
    'class' => 'title',
    'placeholder' => 'enter estimated budget'
  )
));

// release date field
piklist('field', array(
  'type' => 'text',
  'field' => 'mw_release_date',
  'label' => __('Project Release Date'),
  'attributes' => array(
    'class' => 'title',
    'placeholder' => 'enter project release date'
  )
));

// movie image
piklist('field', array(
  'type' => 'file',
  'field' => 'mw_upload_media',
  'label' => __('Add Image'),
  'description' => "Add a Featured Image or Movie Logo. <br> No more than one file is allowed",
  'options' => array(
    'modal_title' => __('Add Image'),
    'button' => __('Add Image')
  ),
  'attributes' => array(
    'class' => 'large-text'
  ),
  'validate' => array(
    array(
      'type' => 'limit',
      'options' => array(
        'min' => 0,
        'max' => 1
      )
    )
  )
));



// END widget
?>
