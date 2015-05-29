<?php
/**
 * Created by PhpStorm.
 * User: tripl3inf
 * Date: 8/18/14
 * Time: 10:33 PM
 */



function custom_metaboxes( $meta_boxes ) {
	$prefix = '_cmb_'; // Prefix for all fields

	$meta_boxes['metabox_home'] = array(
		'id' => 'metabox_home_imgs',
		'title' => 'Home Page Featured Images',
		'pages' => array('page'), // post type
		'context' => 'normal',
		'priority' => 'high',
		'show_names' => true, // Show field names on the left
		'show_on' => array( 'key' => 'page-template', 'value' => 'templates/template-home.php' ),
//        'show_on' => array( 'key' => 'id', 'value' => array( 86 ) ),
		'fields' => array(
			array(
				'id'          => $prefix . 'repeat_group',
				'type'        => 'group',
				'description' => __( 'Generates reusable form entries', 'cmb' ),
				'options'     => array(
					'group_title'   => __( 'Entry {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
					'add_button'    => __( 'Add Another Entry', 'cmb' ),
					'remove_button' => __( 'Remove Entry', 'cmb' ),
					'sortable'      => true, // beta
				),
				// Fields array works the same, except id's only need to be unique for this group. Prefix is not needed.
				'fields'      => array(
					array(
						'name' => 'Entry Title',
						'id'   => 'title',
						'type' => 'text',
						// 'repeatable' => true, // Repeatable fields are supported w/in repeatable groups (for most types)
					),
					array(
						'name' => 'Description',
						'description' => 'Write a short description for this entry',
						'id'   => 'description',
						'type' => 'textarea_small',
					),
					array(
						'name' => 'Entry Image',
						'id'   => 'image',
						'type' => 'file',
					),
					array(
						'name' => 'Image Caption',
						'id'   => 'image_caption',
						'type' => 'text',
					),
				),
			),

			array(
				'name' => 'Choose Image 1:',
				'desc' => 'the TOP right static image on home page.',
				'id' => $prefix . 'home_img_1',
				'type' => 'file',
				// 'preview_size' => array( 100, 100 ), // Default: array( 50, 50 )
			),

			array(
				'name' => 'Choose Image 2:',
				'desc' => 'the BOTTOM right static image on home page.',
				'id' => $prefix . 'home_img_2',
				'type' => 'file',
				// 'preview_size' => array( 100, 100 ), // Default: array( 50, 50 )
			),


			/*        array(
						'name' => __( 'Website URL', 'cmb' ),
						'id'   => $prefix . 'fetured_',
						'type' => 'text_url',
						// 'protocols' => array( 'http', 'https', 'ftp', 'ftps', 'mailto', 'news', 'irc', 'gopher', 'nntp', 'feed', 'telnet' ), // Array of allowed protocols
					),
			*/

		),
	);







	$meta_boxes['metabox_film_page'] = array(
		'id' => 'metabox_film_page',
		'title' => 'Film Page Media',
		'pages' => array('page'), // post type
		'context' => 'normal',
		'priority' => 'high',
		'show_names' => true, // Show field names on the left
		'show_on' => array( 'key' => 'page-template', 'value' => 'templates/template-film-page.php' ),
//        'show_on' => array( 'key' => 'id', 'value' => array( 86 ) ),
		'fields' => array(

			array(
				'name' => 'Choose Image 1:',
				'desc' => 'the TOP right static image on home page.',
				'id' => $prefix . 'featured_img_full',
				'type' => 'file',
				// 'preview_size' => array( 100, 100 ), // Default: array( 50, 50 )
			),

			array(
				'name' => 'oEmbed1',
				'desc' => 'Enter a youtube, twitter, or instagram URL. Supports services listed at <a href="http://codex.wordpress.org/Embeds">http://codex.wordpress.org/Embeds</a>.',
				'id' => $prefix . 'video1_embed',
				'type' => 'oembed',
			),

			array(
				'name' => 'oEmbed2',
				'desc' => 'Enter a youtube, twitter, or instagram URL. Supports services listed at <a href="http://codex.wordpress.org/Embeds">http://codex.wordpress.org/Embeds</a>.',
				'id' => $prefix . 'video2_embed',
				'type' => 'oembed',
			),
		),
	);







	$meta_boxes['metabox_risk_panel'] = array(
		'id' => 'metabox_risk_panel',
		'title' => 'Risk Panel Widget',
		'pages' => array('page'), // post type
		'context' => 'normal',
		'priority' => 'low',
		'show_names' => true, // Show field names on the left
		'show_on' => array( 'key' => 'page-template', 'value' => 'templates/template-risk-tolerance.php' ),
//        'show_on' => array( 'key' => 'id', 'value' => array( 86 ) ),
		'fields' => array(
			array(
				'id'          => $prefix . 'repeat_group_risk_template',
				'type'        => 'group',
				'description' => __( 'Panels for Risk Tolerance Widget', 'cmb' ),
				'options'     => array(
					'group_title'   => __( 'Panel {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
					'add_button'    => __( 'Add Another Entry', 'cmb' ),
					'remove_button' => __( 'Remove Entry', 'cmb' ),
					'sortable'      => false, // beta
				),
				// Fields array works the same, except id's only need to be unique for this group. Prefix is not needed.
				'fields' => array(
					// left box
					array(
						'name' => 'Left Box',
						'id'   => 'lb_header',
						'type' => 'title',
						// 'repeatable' => true, // Repeatable fields are supported w/in repeatable groups (for most types)
					),
					array(
						'name' => 'Left Box Title',
						'id'   => 'lb_title',
						'type' => 'text_medium',
					),
					array(
						'name' => 'Left Box %',
						'description' => '%',
						'id'   => 'lb_percent',
						//	'sanitization_cb' => 'false',
						'type' => 'text_small',
					),
					array(
						'name' => 'Left Box Copy',
						'id'   => 'lb_copy',
						'type' => 'textarea_small',
					),


					// center box
					array(
						'name' => 'Center Box',
						'id'   => 'cb_header',
						'type' => 'title',
						// 'repeatable' => true, // Repeatable fields are supported w/in repeatable groups (for most types)
					),
					array(
						'name' => 'Center Box Title',
						'id'   => 'cb_title',
						'type' => 'text_medium',
					),
					array(
						'name' => 'Center Box %',
						'description' => '%',
						'id'   => 'cb_percent',
						'type' => 'text_small',
					),
					array(
						'name' => 'Center Box Copy',
						'id'   => 'cb_copy',
						'type' => 'textarea_small',
					),


					// right box
					array(
						'name' => 'Right Box',
						'id'   => 'rb_header',
						'type' => 'title',
						// 'repeatable' => true, // Repeatable fields are supported w/in repeatable groups (for most types)
					),
					array(
						'name' => 'Right Box Title',
						'id'   => 'rb_title',
						'type' => 'text_medium',
					),
					array(
						'name' => 'Right Box %',
						'description' => '%',
						'id'   => 'rb_percent',
						'type' => 'text_small',
					),
					array(
						'name' => 'Right Box Copy',
						'id'   => 'rb_copy',
						'type' => 'textarea_small',
					),


				),
			),


		),
	);






	$meta_boxes['metabox_slider_full'] = array(
		'id' => 'metabox_slider_full',
		'title' => 'Full Width Slider Images',
		'pages' => array('page'), // post type
		'context' => 'normal',
		'priority' => 'high',
		'show_names' => true, // Show field names on the left
    'show_on' => array( 'key' => 'page-template', 'value' => array('templates/template-slider-full-width.php','archive-cpt_project.php' ) ),
//        'show_on' => array( 'key' => 'id', 'value' => array( 86 ) ),
		'fields' => array(
			array(
				'id'          => $prefix . 'repeat_group',
				'type'        => 'group',
				'description' => __( 'Generates reusable form entries', 'cmb' ),
				'options'     => array(
					'group_title'   => __( 'Entry {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
					'add_button'    => __( 'Add Another Entry', 'cmb' ),
					'remove_button' => __( 'Remove Entry', 'cmb' ),
					'sortable'      => true, // beta
				),
				// Fields array works the same, except id's only need to be unique for this group. Prefix is not needed.
				'fields'      => array(
					array(
						'name' => 'Entry Title',
						'id'   => 'title',
						'type' => 'text',
						// 'repeatable' => true, // Repeatable fields are supported w/in repeatable groups (for most types)
					),
					array(
						'name' => 'Description',
						'description' => 'Write a short description for this entry',
						'id'   => 'description',
						'type' => 'textarea_small',
					),
					array(
						'name' => 'Entry Image',
						'id'   => 'image',
						'type' => 'file',
					),
					array(
						'name' => 'Image Caption',
						'id'   => 'image_caption',
						'type' => 'text',
					),
				),
			),
		),
	);


	$meta_boxes['metabox_template_split'] = array(
		'id' => 'metabox_template_split',
		'title' => 'Featured Image',
		'pages' => array('page'), // post type
		'context' => 'normal',
		'priority' => 'high',
		'show_names' => true, // Show field names on the left
		'show_on' => array( 'key' => 'page-template', 'value' => 'templates/template-feature-split.php' ),
		'fields' => array(
			array(
				'name' => 'Choose Image:',
				'desc' => 'LEFT side static featured image.',
				'id' => $prefix . 'img_split',
				'type' => 'file',
				'allow' => array( 'attachment' ) // limit to just attachments with array( 'attachment' )
			),
		),
	);

	$meta_boxes['metabox_template_third'] = array(
		'id' => 'metabox_template_third',
		'title' => 'Featured Image',
		'pages' => array('page'), // post type
		'context' => 'normal',
		'priority' => 'default',
		'show_names' => true, // Show field names on the left
		'show_on' => array( 'key' => 'page-template', 'value' => array('templates/template-feature-third.php','templates/template-risk-tolerance.php' ) ),
		'fields' => array(
			array(
				'name' => 'Choose Image:',
				'desc' => 'LEFT side static featured image.',
				'id' => $prefix . 'img_third',
				'type' => 'file',
				'allow' => array( 'attachment' )
			),
		),
	);

	return $meta_boxes;
}
add_filter( 'cmb_meta_boxes', 'custom_metaboxes' );

// Initialize the metabox class
add_action( 'init', 'init_custom_meta_boxes', 9999 );
function init_custom_meta_boxes() {
	if ( !class_exists( 'cmb_Meta_Box' ) ) {
		require_once( 'metabox/init.php' );
	}
}


