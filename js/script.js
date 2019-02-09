/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/
var quotes = [
  {source: "Andy Mineo", quote: "Make moves or make excuses"},
  {source: "Lecrae", quote: "Before you complain today, be grateful you have breath to complain with."},
  {source: "Andy Mineo", quote: "It takes a moment to make memories and a lifetime to forget them.", year: 2014},
  {source: "Trip Lee", quote: "The question is not whether or not you will face trials. The question is, how will you respond when you do?"},
  {source: "tobyMac", quote: "Focusing on the negative only makes a difficult journey more difficult"},
  {source: "Lecrae", quote: "If you live for people’s acceptance you will die from their rejection."},
  {source: "Lecrae", quote: "If I'm wrong about God then I wasted my life. If you're wrong about God then you wasted your eternity."},
  {source: "Lecrae", quote: "People will hurt you. But don't use that as an excuse for your poor choices, use it as motivation to make the right ones."},
  {source: "Andy Mineo", quote: "Emotions change. Truth doesn't. What will you build your life upon?"},
  {source: "Andy Mineo", quote: "My biggest enemy is me and even I can't stop me", year: 2014}
]




/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/
function getRandomQuote(){

// gets a random valid number
  do{
var rand = Math.floor(Math.random() * (quotes.length + 1));
i = rand;
} while (i > quotes.length - 1)



//creates variables for the data
var source = quotes[i].source;
var quote = quotes[i].quote;
var year = quotes[i].year;


return [source, quote, year];
}


/*********************End getRandomQuote***********/



/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/
function printQuote(){
var rand = getRandomQuote();
var quote = rand[1];
var author = rand[0];

//checks for year
var year = ''
if(rand[year] != undefined){
year = rand[year];
}
var citation = ''
if(rand[citation] != undefined){
citation = rand[citation];
}
var html = '<p class="quote">' + quote +'</p>' + '<p class="source">' + author + '<span class="citation">' + citation + '</span><span class="year">' + year + '</span></p>';
document.getElementById('quote-box').innerHTML = html;
}

printQuote();


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
