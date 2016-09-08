﻿/**
 * Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// This file contains style definitions that can be used by CKEditor plugins.
//
// The most common use for it is the "stylescombo" plugin, which shows a combo
// in the editor toolbar, containing all styles. Other plugins instead, like
// the div plugin, use a subset of the styles on their feature.
//
// If you don't have plugins that depend on this file, you can simply ignore it.
// Otherwise it is strongly recommended to customize this file to match your
// website requirements and design properly.

CKEDITOR.stylesSet.add( 'default', [
	/* Block Styles */

	// These styles are already available in the "Format" combo ("format" plugin),
	// so they are not needed here by default. You may enable them to avoid
	// placing the "Format" combo in the toolbar, maintaining the same features.
	/*
	{ name: 'Paragraph',		element: 'p' },
	{ name: 'Heading 1',		element: 'h1' },
	{ name: 'Heading 2',		element: 'h2' },
	{ name: 'Heading 3',		element: 'h3' },
	{ name: 'Heading 4',		element: 'h4' },
	{ name: 'Heading 5',		element: 'h5' },
	{ name: 'Heading 6',		element: 'h6' },
	*/
	{
			name : 'Image on Left',
			element : 'img',
			attributes :
			{
					'class' : 'img_left'
			}
	},

	{
			name : 'Image on Right',
			element : 'img',
			attributes :
			{
					'class' : 'img_right'
			}
	},

	/*
	 * Button Styles
	 */
	{
			name : 'Normal Link (Ideal)',
			element : 'a',
			attributes :
			{
					'class' : ''
			}
	},

	{
			name : 'OC Blue Button',
			element : 'a',
			attributes :
			{
					'class' : 'blue_oc_button'
			}
	},

	{
			name : 'OC Green Button',
			element : 'a',
			attributes :
			{
					'class' : 'green_oc_button'
			}
	},

	{
			name : 'OC Red Button',
			element : 'a',
			attributes :
			{
					'class' : 'red_oc_button'
			}
	},

	{
			name : 'OC Gold Button',
			element : 'a',
			attributes :
			{
					'class' : 'gold_oc_button'
			}
	},

	{
			name : 'OC Gray Button',
			element : 'a',
			attributes :
			{
					'class' : 'gray_oc_button'
			}
	},
/*
	{
			name : 'Department Button',
			element : 'a',
			attributes :
			{
					'class' : 'department_button',
			}
	},

	{
			name : 'Gray Button',
			element : 'a',
			attributes :
			{
					'class' : 'gray_button'
			}
	},

	{
			name : 'Blue Button',
			element : 'a',
			attributes :
			{
					'class' : 'blue_button'
			}
	},

	{
			name : 'Orange Button',
			element : 'a',
			attributes :
			{
					'class' : 'orange_button'
			}
	},
*/
	/*
	 * Table Styles
	 */
	{
			name : 'Default Table',
			element : 'table',
			attributes :
			{
					'class' : 'default_table'
			}
	},

	{
			name : 'Large Table',
			element : 'table',
			attributes :
			{
					'class' : 'large_table'
			}
	},

	/* Table Cell Styles */

	{
			name : 'Align Top',
			element : 'td',
			attributes : { 'class' : 'td_align_top' }
	},

	{
			name : 'Align Center',
			element : 'td',
			attributes : { 'class' : 'td_align_center' }
	},

	{
			name : 'Half Width',
			element : 'td',
			attributes : { 'class' : 'td_half_width' }
	},

	{
			name : 'Third Width',
			element : 'td',
			attributes : { 'class' : 'td_third_width' }
	},

	/*
	 * Quote Styles
	 */
	{
			name : 'Box Quote',
			element : 'div',
			attributes :
			{
					'class' : 'box_quote'
			}
	}

] );
