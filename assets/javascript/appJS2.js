$("#start").on("click", function() {
  $("#start").remove();
  game.loadQ(); //loads the questions / buttons
})

$(document).on("click", ".answer-button", function(e){ //e is used to store an event / passing it through the event. will pass the value of each Q through e
    game.clicked(e);
})

$(document).on("click", "#reset", function(){ //resets the game if clicked- will appear on results page only once game is done
game.reset();
})

var questions= [
    { //Q1 Start
    question: "What year did the first Air Jordan come out?",
    answers: ["1995", "1974", "1985", "1992"],
    correctAnswer: "1985"
    }, //Q1 End
    
    { //Q2 Start
    question: "Who is the founder of Adidas?",
    answers: ["Adolf Dassler", "Phil Knight", "Tinker Hartfield", "Bob Hundreds"],
    correctAnswer: "Adolf Dassler"
    }, //Q2 End
    
    { //Q3 Start
    question: "What year was Supreme founded, and in what city?",
    answers: ["1993 In New York", "1996 In Los Angeles", "1994 In New York", "1993 In Los Angeles"],
    correctAnswer: "1994 In New York"
    }, //Q3 End
    
    { //Q4 Start
    question: "Whose the founder of nutorious streetwear brand Off-White, and creative director of Louis Vuitton?",
    answers: ["Blondy McCoy", "Virgil Abloh", "Ronnie Fieg", "Nakel Smith"],
    correctAnswer: "Virgil Abloh"
    }, //Q4 End
    
    { //Q5 Start
    question: "Which corporate giant currently owns Converse?",
    answers: ["Chuck Taylor", "Puma", "Adidas", "Nike"],
    correctAnswer: "Nike"
    }, //Q5 End

    ];

    console.log(questions)

var game= { //game start object

    questions: questions, 
    currentQuestion: 0, //current question
    counter: 25, //time start / left
    correct:0, //number right
    incorrect:0, //number wrong
    unanswered:0,

    countdown: function(){ //timer countdown | only used in the loadQ()- used to decrease the game by 1 second which is determined in the 1000
        game.counter--; //decrease the counter which is 30 stated above
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("time up!")
            game.timeUp(); //calling the timeUp function
        }
    },

    loadQ: function(){ //loads the Question | used in the nextQ to load the current Q, and the first and last thing done
        timer = setInterval(game.countdown,1000); //timer is not predetermined in JS. it's made up 
        $("#subwrapper").html("<h2> Time Remaining: <span id='counter'> 25 </span> seconds </h2>") //shows the timer on the page above everything
       $("#subwrapper").append("<h3>" + questions[game.currentQuestion].question + "</h3>"); //h2 with the current question inside of it
       for(var i=0; i<questions[game.currentQuestion].answers.length; i++){ //using the for loop to create buttons for each option (1 of 4)
           $("#subwrapper").append('<button class="answer-button" id= "button-' +i+ '" data-name="'+ questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>'); //the created data-name will be storing the correct answer
       }
    },

    nextQ: function(){ //move to the next Question | used in both answered and timeUp function- 
        game.counter =25; //must do this to reset the counter each time
        $("#counter").html(game.counter); //set the counter back to 30 on the page
        game.currentQuestion++; //move us to the next Question
        game.loadQ(); //loadQ function
    },

    timeUp: function(){ //if the 25 seconds or so expires before you select- will tell you the correct answer | called in the countdown() function
        clearInterval(timer);//clearInterval is built into js
        game.unanswered++
        $("#subwrapper").html("<h2> OUT OF TIME YO </h2>");
        $("#subwrapper").append("<h3> The correct answer was :" + questions[game.currentQuestion].correctAnswer +"</h3>") //displays what the cprrect answer was 
        if(game.currentQuestion==questions.length-1) {
            setTimeout(game.results,2*1000);
        }else{
            setTimeout(game.nextQ,2*1000);
        }
    },

    results: function(){ //show the results once the game is over using either the correct or incorrect answers | used in the answered correct * incorrect in the else statement
        clearInterval(timer);
        $("#subwrapper").html("<h2> Game Over! </h2>");
        $("#subwrapper").append("<h3> Correct: " + game.correct +"</h3>");
        $("#subwrapper").append("<h3> Wrong: " + game.incorrect + "</h3>");
        $("#subwrapper").append("<h3> Unanswered: " + game.unanswered+ "</h3>"); //added last- counted in the timeUp function under the clearInterval
        $("#subwrapper").append("<button id= 'reset'> RESET GAME? </button>"); //uses the onclick made on top of page with the clicks functions
    },

    clicked: function(e){ //used for the onclick funtion- passed an e as an argument and stores the correct answer in it
        clearInterval(timer); //clear the timer inside of loadQ function
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer) { //if the clicked button is equal to "e", correct- else incorrect
            game.answeredCorrectly();
            console.log($(e.target).data("name"));
        }else{
            game.answeredIncorrectly();
            console.log($(e.target).data("name"));
        }
    },

    answeredCorrectly: function(){ //if answered Correctly, this will happen... | Used in the clicked() function
        console.log("You got it!");
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html("<h2>you got it right!</h2>");
        if(game.currentQuestion==questions.length-1) {
            setTimeout(game.results,2*1000);
        }else{
            setTimeout(game.nextQ,2*1000);
        }
    },

    answeredIncorrectly: function(){ //if answered Incorrectly, this will happen... | Used in the clicked() function
        console.log("WRONG! trump voice")
        clearInterval(timer);
        game.incorrect++;
        $("#subwrapper").html("<h2>you got it WRONG!</h2>");
        if(game.currentQuestion==questions.length-1) {
            setTimeout(game.results,2*1000);
        }else{
            setTimeout(game.nextQ,2*1000);
        }
    },

    reset: function(){ //reset the game- is only activiated when clicked at the end of game to start over
        game.currentQuestion= 0;
        game.counter= 25 //time start / left
        game.correct= 0 //number right
        game.incorrect= 0 //number wrong
        game.unanswered= 0;
        game.loadQ();
    },

} //game end object
//github change note.