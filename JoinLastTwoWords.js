/*
 * JoinLastTwoWords.js
 *
 * by Jeffrey Morgan
 * http://usabilityetc.com/
 *
 * The joinLastTwoWordsOfElement function uses jQuery to replace
 * the last space character in the selected HTML elements with
 * the non-breaking space entity (&nbsp;).
 *
 * An example use is ensuring that blogs don't put the
 * last word of an entry title on a separate line.
 *
 */

function joinLastTwoWords(s)
{
	// Get the position in the string of the last space
	var pos = s.lastIndexOf(' ');
			
	// Only process strings with a space
	// (i.e. with more than one word)
	if (pos != -1) {
			
		// The parts array stores the three parts of the new string
		var parts = [], i = -1;
				
		// The first part stores the string up to the space
		parts[++i] = s.substring(0, pos);
				
		// The second part stores the non-breaking space entity
		parts[++i] = '&nbsp;';
				
		// The third part stores the string after the space
		parts[++i] = s.substr(pos + 1);
				
		// Create a new string by joining the parts
		s = parts.join('');
	}
		
	// Return the string with the last two words joined
	return s;
}

function joinLastTwoWordsOfElement(selector, exclusions)
{
	// The exclusions parameter is optional
	if (exclusions == null) {
		exclusions = '';
	}
		
	// Loop through each HTML element that matches the selector
	$(selector).not(exclusions).each(function() {
		// Get the text marked-up in the currently selected HTML element
		var html = $(this).html();
			
		// Join the last two words of the element's text 
		$(this).html(joinLastTwoWords(html));
				
	});
}