/* 
 * Chris Gonzalez 2017 jQueryMobile site
 */

/**
 * Click/touch on muskie image on homepage to reveal a small pop-up message. Pop up appears
 * where clicked/touched.
 */
$.mobile.document.on( "click", "#homepage-img", function( evt ) {
    $( "#popup-homepage-img" ).popup( 
        "open", 
        { x: evt.pageX, 
          y: evt.pageY } 
    );
    evt.preventDefault();
});
