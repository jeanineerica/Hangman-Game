    //Variables

    //Game Elements
    var win = 0;
    var loss = 0;
    var guessesleft =9;

    //Show
    var showGuesses = document.getElementById("userguesses");


    //Words & Answers
    var words = "";
    var answerArray = [];
    var latinarray= new Array("cha-cha","samba","paso-doble", "jive", "rumba");
    var stanarray= new Array("foxtrot", "quickstep", "tango", "viennese-waltz", "waltz");
    var bonusarray= new Array("salsa", "swing", "hip-hop", "burlesque");


    //Random choice for Latin
    function latinValue()
    {
        var computerGuess = latinarray[Math.floor(Math.random() * latinarray.length)];
        var computerWord = (Array.from(computerGuess));
        console.log(computerWord); 

        //Begin Game

        //User Key Press
        document.onkeyup = function(event) {
            var inp = String.fromCharCode(event.keyCode).toLowerCase();
            if (/[a-zA-Z]/.test(inp)){
                console.log(inp);
                var answerArray = []
                for (var i = 0; i < computerWord; i ++)
                answerArray.push('-');
                console.log(answerArray);
                if (computerWord.indexOf(keyString) != -1){ // if the character is found
                for (var i = 0; i < wordLength; i ++){ // loop on all characters
                if (computerWord[i] == keyString) // if this is an occurance
                progressWord[i] = computerWord[i];
                    }
                    }   
                else    {
                alert("Please use a valid key");    
            };
      }  
    }  
}

    //Random choice for Standard
    function stanValue()
    {
        var computerGuess = stanarray[Math.floor(Math.random() * stanarray.length)];
        var computerWord = (Array.from(computerGuess));
        console.log(computerWord);     
    }

    //Random choice for Bonus
    function bonusValue()
    {
        var computerGuess = bonusarray[Math.floor(Math.random() * bonusarray.length)];
        var computerWord = (Array.from(computerGuess));
        console.log(computerWord);     
    }


