<?php

function getResources()
{
  wp_enqueue_style('style', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'getResources');

//navigation menus
register_nav_menus(array('primary' => __('Primary Menu')));

?>
