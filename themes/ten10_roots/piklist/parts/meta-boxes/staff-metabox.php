<?php
/*
Title: Staff Member Information
Post Type: cpt_staff
*/

piklist( 'field', array(
  'type'        => 'text',
  'field'       => 'staff_position',
  'scope'       => 'post_meta',
  'label'       => 'Staff Members Title',
  'description' => 'The employees position or title',
  'value'       => 'general',
  'attributes'  => array(
    'class' => 'text'
  )
));


piklist('field', array(
  'type' => 'select',
'scope' => 'post_meta', // Not used for settings sections
'field' => 'select_team',
'value' => 'option_1', // Sets default to Option 2
'label' => 'Select Member Team',
'description' => 'Select either studio or financial team',
'attributes' => array(
    'class' => 'text'
  ),
'choices' => array(
    'option_1' => 'Studio'
  ,'option_2' => 'Financial'
  )
));





// END

