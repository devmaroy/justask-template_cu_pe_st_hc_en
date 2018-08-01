/* Custom JavaScript File For JustAsk
 *
 * This file is using jQuery version 3.3.1
 * Author: devxenner
 * Website: https://devxenner.com/
 * License: All rights reserved. Do not modify, do not copy!
 * 
 */

 (function($) {
 	// FAQ Accordion
 	var faqList = $( '#faq-list' );

 	// Hide FAQ Answer
 	faqList.find( 'dd' ).slideUp();

 	// Show FAQ Answer on click
 	faqList.find('dt').on('click', function(event) {
 		var dt = $( this ),
 			dd = dt.next( 'dd' );

 		// Find panel icon for this dt
 		var panelIcon = dt.find( '.panel-icon' );

 		// Expand or collapse panel
 		$( this ).next()
 			.slideToggle( 'fast' );

 		// Add "+" or "-" for this dt
 		panelIcon.toggleClass( 'fa-plus' )
 			.toggleClass( 'fa-minus' );
 		

 		// Add "+" panel icon for all dt siblings
 		dt.siblings( 'dt' )
 			.find( '.panel-icon' )
 			.removeClass( 'fa-minus' )
 			.addClass( 'fa-plus' );

 		// Hide the other panels
 		dt.siblings('dd')
 			.not( dd )
 			.slideUp( 'fast' );
 	});
 })(jQuery)