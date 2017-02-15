 "use strict";
$(document).ready(function() {
// Switcher Stylesheet iQuery
  $('#styleOptions').styleSwitcher();

// Accordion jQuery
  $( "#accordion" ).accordion();

// Date Picker jQuery
  $( "#datepicker" ).datepicker({
	inline: true
  });
  
  // File Upload jQuery
  $('#filer_input').filer({
    limit: 3,
		showThumbs: true,
		addMore: true,
		allowDuplicates: false
	});

// autogrow jQuery plugin
$( "textarea" ).autogrow( { vertical : true } );

// sortable jQuery plugin
$( "#sortable" ).sortable();
$( "#sortable" ).disableSelection();


            $('.Chess').tooltipster({
              theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
              animation: 'fade',
              delay: 200,
              trigger: 	'click',
              maxWidth:400

            });
            $('.math').tooltipster({
              theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
              animation: 'grow',
              delay: 200,
              maxWidth:400
            });
            $('.Physics').tooltipster({
              theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
              animation: 'swing',
              delay: 200,
              maxWidth:400
            });
            $('.Defendo').tooltipster({
              animation: 'fall',
              delay: 200,
              maxWidth:400
            });
            $('.Hockey').tooltipster({
              animation: 'slide',
              trigger: 	'click',
              delay: 200,
              maxWidth:400,
            });

	// text editor jQuery Plugin
  $('.jqte-test').jqte();

	// settings of status
	var jqteStatus = true;
	$(".status").click(function()
	{
		jqteStatus = jqteStatus ? false : true;
		$('.jqte-test').jqte({"status" : jqteStatus})
	});
$('.chaCount').corner("dog3 30px");
$('.upLoad').corner("sharp 20px");
$('.sortPgn').corner("cool 20px");
$('.txtEdetor').corner("tear 20px").parent().css('padding', '15px').corner("tear 20px")
$('.toolTip').corner("long 15px").parent().css('padding', '15px').corner("curl 15px")



// Character counter jQuery
  var comment = $('form#enquiry textarea'),
          counter = '',
          counterValue = 140, //change this to set the max character count
          minCommentLength = 2, //set minimum comment length
          $commentValue = comment.val(),
          $commentLength = $commentValue.length,
          submitButton = $('form#enquiry input[type=submit]').hide();

      $('#enquiry').prepend('<span class="counter"></span>').append('<p class="info">Min length: <span></span></p>');
      counter = $('span.counter');
      counter.html(counterValue); //display your set max length
      comment.attr('maxlength', counterValue); //apply max length to textarea
      $('form').find('p.info > span').html(minCommentLength);
      // everytime a key is pressed inside the textarea, update counter
      comment.keyup(function () {
        var $this = $(this);
        $commentLength = $this.val().length; //get number of characters
        counter.html(counterValue - $commentLength); //update counter
        if ($commentLength > minCommentLength - 1) {
          submitButton.fadeIn(200);
        } else {
          submitButton.fadeOut(200);
        }
      });

});
