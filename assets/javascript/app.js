// body waiting for document to load
$( document ).ready(function() {
    console.log( "ready!" );

//**********Variables************/
var question= "";
var answers= "";
var correctAnswer= "";
var right= 0;
var wrong= 0;

//******Array of Questions to ask with answers **********/


var questionsToAsk = [

{ //Q1 Start
question: "What year did the first Air Jordan come out?",

answers: {
    A: "1995",
    B: "1974",
    C: "1985",
    D: "1992"
},

correctAnswer: "1985"
}, //Q1 End

{ //Q2 Start
question: "Who is the founder of Adidas?",

answers: {
    A: "Adolf Dassler",
    B: "Phil Knight",
    C: "Tinker Hartfield",
    D: "Bob Hundreds"
},

correctAnswer: "Adolf Dassler"
}, //Q2 End

{ //Q3 Start
question: "What year was Supreme founded, and in what city?",

answers: {
    A: "1993 In New York",
    B: "1996 In Los Angeles",
    C: "1994 In New York",
    D: "1993 In Los Angeles"
},

correctAnswer: "1994 In New York"
}, //Q3 End

{ //Q4 Start
question: "Whose the founder of nutorious streetwear brand Off-White, and creative director of Louis Vuitton?",

answers: {
    A: "Blondy McCoy",
    B: "Virgil Abloh",
    C: "Ronnie Fieg",
    D: "Nakel Smith"
},

correctAnswer: "Virgil Abloh"
}, //Q4 End

{ //Q5 Start
question: "Which corporate giant currently owns Converse?",

answers: {
    A: "Chuck Taylor",
    B: "Puma",
    C: "Adidas",
    D: "Nike"
},

correctAnswer: "Nike"
}, //Q5 End
    

];
// console.log(questionsToAsk);

for (var i = 0; i < questionsToAsk.length; i++) {
    $(".questionA").html(questionsToAsk[i].question) 
    $(".Button1").html(questionsToAsk[i].answers.A)
    $(".Button2").html(questionsToAsk[i].answers.B)
    $(".Button3").html(questionsToAsk[i].answers.C)
    $(".Button4").html(questionsToAsk[i].answers.D)
    console.log(i)
}

//*****Put IN HTML*******/

//***********Question1*********/



//****Correct Click Functions *****/

// function youRight() {
//     right++;
//      console.log("right: " +right);
// }

// function youWrong() {
//     wrong++;
//     console.log("wrong: " +wrong);
// }

 

//************** On click functions ***************/


    // $(".Button1").on("click", function() {
    //     console.log(questionsToAsk[1].answers.A)
    // })

    // $(".Button2").on("click", function() {
    //     console.log(questionsToAsk[1].answers.B)
    // })

    // $(".Button3").on("click", function() {
    //     console.log(questionsToAsk[1].answers.C)
    // })

    // $(".Button4").on("click", function() {
    //     console.log(questionsToAsk[1].answers.D)
    // })

  



    //*********Function Calls**********/ 
    
    

});


