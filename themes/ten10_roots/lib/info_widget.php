<?php
/**
 * User: tripl3infinity
 * Date: 7/18/14
 */



add_action('wp_dashboard_setup', 'my_custom_dashboard_widgets');

function my_custom_dashboard_widgets() {
    global $wp_meta_boxes;

    wp_add_dashboard_widget('custom_help_widget', 'Theme Support', 'custom_dashboard_help');
}

function custom_dashboard_help() {
    echo 'This theme was created by Alex Aloia via tripl3infinity Design & Dev. He can be reached at alex@t3inf.com';
}
