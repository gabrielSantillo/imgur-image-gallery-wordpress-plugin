<?php
/**
 * Plugin Name: Imgur Image Gallery
 * Plugin URI: 
 * Description: Retrieves and displays responsive images from the Imgur API.
 * Version: 1.0.0
 * Author: Gabriel Santillo
 * Author URI: 
 * License: 
 */

// Enqueue scripts and stylesheets
function imgur_image_gallery_enqueue_scripts() {
   // Enqueue Angular.js from a CDN
   wp_enqueue_script('angular-js', 'https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js', array(), '1.8.2', true);

   // Enqueue custom CSS file
   wp_enqueue_style('imgur-gallery-css', plugins_url('css/imgur-gallery.css', __FILE__));
}
add_action('wp_enqueue_scripts', 'imgur_image_gallery_enqueue_scripts');


// Shortcode callback function
function imgur_gallery_shortcode() {
   ob_start(); // Start output buffering

   // Code to generate HTML markup for the image gallery
   // Here I'm just pretending how the data is to print the image on the page
   $html = '<div class="imgur-gallery">';

   foreach ($images as $image) {
      $html .= '<img src="' . $image['image_url'] . '" alt="' . $image['alt_text'] . '">';
   }

   $html .= '</div>';

   return $html; // Return the generated HTML markup
}
add_shortcode('imgur_gallery', 'imgur_gallery_shortcode');

