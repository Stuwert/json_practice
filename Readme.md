'S DUE:

- Your mission, should you choose to accept it, is to build an app where a user can type in a search term, and receive back a nicely formatted table of Reddit posts that match the search term given. Everything you need to do to achieve this was covered ( in pieces ) in this morning's lecture. Your job is to work to put it all together. You can display the title, name , AND header_img of each post.
The first task is learning how to use the Reddit API.
You will make an AJAX request to https://www.reddit.com/subreddits/search.json?q=ouya , parse the data and append it to a table that will receive the data.
Action items:

<!-- - Build a text field where the user can type in text that will exclude posts with a certain title when searching? -->
<!-- - Put in a mechanism to remove a row containing a certain value ( also supplied by the user in a text field ) -->
<!-- - Make a 'locate on page' feature where if you type in a search term on the page, the row containing the corresponding text is highlighted. -->
<!-- - If no image is found for a particular post, replace it with a placeholder from placehold.it -->
<!-- - Make a 'wipe clean' button to wipe the table rows clean before doing a new search -->
- Make a 'predictor' box where the user can predict how many rows for the serach. If correct, show a "win" box. Hide the 'win' box when wiping the table rows clean.
