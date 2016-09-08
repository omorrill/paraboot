/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
  config.stylesSet = 'my_styles';
};

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
 CKEDITOR.stylesSet.add( 'my_styles', [
   // Block-level styles
   { name: 'Blue Title', element: 'h2', styles: { 'color': 'Blue' } },
   { name: 'Red Title' , element: 'h3', styles: { 'color': 'Red' } },

   // Inline styles
   { name: 'CSS Style', element: 'span', attributes: { 'class': 'my_style' } },
   { name: 'Marker: Yellow', element: 'span', styles: { 'background-color': 'Yellow' } }
] );
