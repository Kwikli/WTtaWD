console.log('pr7js');

var quotes= [
     "The best way to predict the future is to invent it.",
     "If you can't explain something in simple terms, then you don’t understand it well enough",
     "You are never too old to set another goal or to dream a new dream.",
     "It's not what we do for love that makes us happy; it's how we react when others treat us.",
     "Believe you can and you are sure to succeed.",
     "Therefore always put your trust in yourself first, and only afterwards rely on others.",
     "Life is what happens when you’re busy making other plans."
];

// $(".more_pages").click(function(){
//      $("nav").toggle();
// });

$(document).ready(function(){
     console.log('giveQuote');
     $(".quote").html("Цитата: " + quotes[Math.floor(Math.random()*quotes.length)]);
     console.log(quotes[Math.floor(Math.random()*quotes.length)]);
})