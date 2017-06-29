//Game Elements
var win = 0;
var loss = 0;
var lives =10;

//Words & Answers
var words = "";
var answerArray = [];
 

    //Random Word Selector based on User Category
function latinValue()
{
    var computerGuess = latinarray[Math.floor(Math.random() * latinarray.length)];
    var computerWord = (Array.from(computerGuess));
    console.log(computerWord); 
    // This function is run whenever the user presses a key.

    document.onkeyup = function(event) {
    var userCommand = (event.key).toLowerCase();  
    console.log(userCommand);
   
    var element = computerWord;
    console.log(element);
    var idx = computerWord.indexOf(element);
    while (idx != -1) {
        answerArray.push(idx);
        idx = computerWord.indexOf(element, idx + 1);
    }
    console.log(answerArray);
    function updateAnswerArray (computerWord, answerArray) {
    if (computerWord.indexOf(answerArray) === -1) {
        computerWord.push(answerArray);
        console.log('New computerWord collection is : ' + computerWord);
    } else if (computerWord.indexOf(answerArray) > -1) {
        console.log(answerArray + ' already exists in the computerWord collection.');
    }
}
}

var answerArray = [];
   
} 
}
//second try

function latinValue()
{
    var computerGuess = latinarray[Math.floor(Math.random() * latinarray.length)];
    var computerWord = (Array.from(computerGuess));
    console.log(computerWord); 

    //User Key Press
    document.onkeyup = function(event) {
        var inp = String.fromCharCode(event.keyCode).toLowerCase();
        if (/[a-zA-Z]/.test(inp)){
            console.log(inp);
                var idx = inp.indexOf(computerWord);
                while (idx != -1) {
                answerArray.push(idx);
                idx = inp.indexOf(computerWord, idx + 1);
                }
                console.log(answerArray);
                }     
        

        else    {
        alert("input was not a valid. Use letters 'a' though 'z'");  
        
    }
}
}

function stanValue()
{
    var myarray= new Array("Foxtrot", "Quickstep", "Tango", "Viennese-Waltz", "Waltz");
    var computerGuess = myarray[Math.floor(Math.random() * myarray.length)];
    var computerWord = (Array.from(computerGuess));
    console.log(computerWord);     
}

function bonusValue()
{
    var myarray= new Array("Salsa", "Swing", "Hip-Hop", "Burlesque");
    var computerGuess = myarray[Math.floor(Math.random() * myarray.length)];
    var computerWord = (Array.from(computerGuess));
    console.log(computerWord);     
}

// This function is run whenever the user presses a key.

document.onkeyup = function(event) {


var userCommand = (event.key).toLowerCase();        
