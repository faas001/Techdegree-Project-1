// FSJS - Random Quote Generator

// Creates an array to hold quote data objects
var quotes = [
    {quote: 'Don\'t find blame. Find a remedy; anybody can complain.', 
     source: 'Henry Ford', 
     citation: '', 
     year: '1922',
     tags: 'Business'
    },

    {quote: 'Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.', 
     source: 'Henry Ford', 
     citation: '', 
     year: '',
     tags: 'Education'
    },

    {quote: 'I played the game one way. I gave it everything I had. It doesn’t take any ability to hustle.',
     source: 'Wade Boggs', 
     citation: '', 
     year: '',
     tags: 'Motivation'
    },

    {quote: 'Do… or do not. There is no try.', 
     source: 'Yoda', 
     citation: 'Star Wars: Empire Strikes Back', 
     year: '1980',
     tags: 'Motivation'
    },

    {quote: 'Strong people always have strong weaknesses too. Where there are peaks, there are valleys.', 
     source: 'Peter F. Drucker', 
     citation: 'The Effective Executive', 
     year: '1967',
     tags: 'Business"'
    },

    {quote: 'Thirty years from now the big university campuses will be relics. Universities won’t survive.', 
     source: 'Peter F. Drucker', 
     citation: 'Forbes', 
     year: '1997',
     tags: 'Education'
    },

    {quote: 'The most rewarding things you do in life are often the ones that look like they cannot be done.', 
     source: 'Arnold Palmer', 
     citation: '', 
     year: '',
     tags: 'Motivation'
    },

    {quote: 'It is not only right to strike while the iron is hot, but that it may be very practicable to heat it by continually striking.', 
     source: 'Benjamin Franklin', 
     citation: 'Letter to Rev. Richard Price', 
     year: '1782',
     tags: 'Business'
    }
]

//used to store index value of last random quote
var LastRandom;

//print function saved from the Treehouse course and modified to target div id
function print(message) {
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = message;
  }

function changeBGColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var bgColor = 'rgb(' + red + ', ' + green + ', ' + blue  + ')';
    return bgColor;
    }


// Creates function to generate a new random quote array value to return to print
function getRandomQuote(array) {
    var getNewQ = LastRandom;
    
    // below forces script to pick a different random if it was the same as previously displayed
    while (getNewQ === LastRandom) {
        getNewQ = Math.floor(Math.random() * array.length); 
    } 
    // set the global LastRandom variable to use on next button click
    LastRandom = getNewQ;
    console.log(getNewQ);

    //return the new random quote array to printQuote function
    return array[getNewQ];
}

// Creates function to call getRandomQuote and generate a html string with the result for output to browser
function printQuote() {

    var message = '';   
    var newQ = getRandomQuote(quotes);

    // The quote string and source string are assumed to be valid for all entries
    message = '<p class="quote">' + newQ.quote + '</p>';
    message += '<p class="source">' + newQ.source;

    // The optional properties are tested for non blanks and added to message string if true
    if (newQ.citation != '') {
        message += '<span class="citation">' + newQ.citation + '</span>';
    }  
    if (newQ.year != '') {    
        message += '<span class="year">' + newQ.year + '</span>';
    }
    if (newQ.tags != '') {
        message += '<span class="tags">' + newQ.tags + '</span>';
    }
    message += '</p>'

    //changes the body background to random color return by changeBGcolor function
    document.body.style.backgroundColor=changeBGColor();

    //prints the final string built in this function
    print(message);
}

//printQuote function will be called every 20 seconds without user input
setInterval(printQuote, 20000);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);