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

class Imgur_Image_Gallery_Plugin {
    /**
     * Constructor method. Initializes the plugin.
     */
    public function __construct() {
        // Enqueue scripts and stylesheets
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));

        // Register shortcode
        add_shortcode('imgur_gallery', array($this, 'imgur_gallery_shortcode'));
    }

    /**
     * Enqueues necessary scripts and stylesheets.
     */
    public function enqueue_scripts() {
        // Enqueue Angular.js from a CDN
        wp_enqueue_script('angular-js', 'https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js', array(), '1.8.2', true);

        // Enqueue custom JavaScript file
        wp_enqueue_script('imgur-gallery-js', plugins_url('js/imgur-gallery.js', __FILE__), array('angular-js'), '1.0.0', true);

        // Enqueue custom CSS file
        wp_enqueue_style('imgur-gallery-css', plugins_url('css/imgur-gallery.css', __FILE__), array(), '1.0.0');
    }

    /**
     * Shortcode callback function.
     * Renders the responsive image gallery using the plugin's functionality.
     *
     * @return string Generated HTML markup for the image gallery.
     */
    public function imgur_gallery_shortcode() {
        ob_start(); // Start output buffering
    
        // Angular template code
        ?>
        <div ng-app="imgurGalleryApp">
           <div ng-controller="ImgurGalleryController as galleryCtrl">
              <div class="imgur-gallery">
                 <div ng-repeat="image in galleryCtrl.images">
                    <img ng-src="{{ image.link }}" alt="{{ image.title }}">
                 </div>
              </div>
           </div>
        </div>
        <?php


    
        return ob_get_clean(); // Return the generated HTML markup
    }
    
}

$imgur_image_gallery_plugin = new Imgur_Image_Gallery_Plugin();

