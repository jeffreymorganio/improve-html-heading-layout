JoinLastTwoWords.js
===================

About
-----

The joinLastTwoWordsOfElement function uses jQuery to replace the last space character in the selected HTML elements with the non-breaking space entity (&ampnbsp;).

Example
-------

An example use is ensuring that blogs don't put the last word of an entry title on a separate line. For example:

Bad:

    How to Improve HTML Heading Layout with
    jQuery

Good:

    How to Improve HTML Heading Layout
    with jQuery

If you have the following mark up:

    <h1>How to Improve HTML Heading Layout with jQuery</h1>

you can ensure two words will wrap to the next line with the following call:

    joinLastTwoWordsOfElement('h1');

See test.html for more examples.

More Information
----------------

Read the following article for more information:

How to Improve HTML Heading Layout with jQuery
[http://usabilityetc.com/2010/07/improve-html-heading-layout-with-jquery/](http://usabilityetc.com/2010/07/improve-html-heading-layout-with-jquery/)