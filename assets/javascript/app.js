// body waiting for document to load
$( document ).ready(function() {
    console.log( "ready!" );

//**********Variables************/
var question= "";
var answers= "";
var correctAnswer= "";
var right= 0;
var wrong= 0;
var i = 0;
var userChoice= "";



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

{ //Q6 which is technically the game over screen
    question: "Game Over! You had " + right + " right, and " + wrong + " wrong!",
    
    
    }, //Q5 End
    
];
console.log("please work: "+ questionsToAsk[i].correctAnswer);



//*******Puts the questions into the div*******/


        $(".questionA").text(questionsToAsk[i].question) 
        $(".Button1").text(questionsToAsk[i].answers.A)
        $(".Button2").text(questionsToAsk[i].answers.B)
        $(".Button3").text(questionsToAsk[i].answers.C)
        $(".Button4").text(questionsToAsk[i].answers.D)
        debugger;
        $(".Button1").attr("data-answer", questionsToAsk[i].answers.A);
        $(".Button2").attr("data-answer", questionsToAsk[i].answers.B);
        $(".Button3").attr("data-answer", questionsToAsk[i].answers.C);
        $(".Button4").attr("data-answer", questionsToAsk[i].answers.D);
        debugger;
        console.log(questionsToAsk[i]);
        




//************** On click functions ***************/
//Tell Will the Onclicks will roll the answers forward but not the text

    $(".Button1").on("click", function() {
        var btn1 = $(".Button1").attr("data-answer")
        console.log(btn1)
        console.log(questionsToAsk[i].correctAnswer)
        if(btn1=== questionsToAsk[i].correctAnswer){
            right++;
            console.log("Right: " + right)
            i++
            change()
        }
        else{
            wrong++
            console.log("Wrong: " + wrong)
            i++
            change()
            
        }
      
    
    })

    $(".Button2").on("click", function() {
        var btn2 = $(".Button2").attr("data-answer")
        console.log(questionsToAsk[i].answers.B)
        if(btn2=== questionsToAsk[i].correctAnswer){
            right++;
            console.log("Right: " + right)
            i++
            change()
        }
        else{
            wrong++
            console.log("Wrong: " + wrong)
            i++
            change()
        }
      

    })

    $(".Button3").on("click", function() {
        var btn3 = $(".Button3").attr("data-answer")
        console.log(questionsToAsk[i].answers.C)
        if(btn3=== questionsToAsk[i].correctAnswer){
            right++;
            console.log("Right: " + right)
            i++
            change()
        }
        else{
            wrong++
            console.log("Wrong: " + wrong)
            i++
            change()
        }
        
    })

    $(".Button4").on("click", function() {
        var btn4 = $(".Button4").attr("data-answer")
        console.log(questionsToAsk[i].answers.D)
        if(btn4=== questionsToAsk[i].correctAnswer){
            right++;
            console.log("Right: " + right)
            i++
            change()
          
        }
        else{
            wrong++
            console.log("Wrong: " + wrong)
            i++
            change()   
        }

    })

//****Move them forward***** */ could deff use a forloop
// it works just has to be clicked twice
    function change () {
        console.log("i: " + i);
        console.log(questionsToAsk[i])
        if (i==0) {
            $(".questionA").text(questionsToAsk[i].question) 
            $(".Button1").text(questionsToAsk[i].answers.A)
            $(".Button2").text(questionsToAsk[i].answers.B)
            $(".Button3").text(questionsToAsk[i].answers.C)
            $(".Button4").text(questionsToAsk[i].answers.D)
            $(".Button1").attr("data-answer", questionsToAsk[i].answers.A);
            $(".Button2").attr("data-answer", questionsToAsk[i].answers.B);
            $(".Button3").attr("data-answer", questionsToAsk[i].answers.C);
            $(".Button4").attr("data-answer", questionsToAsk[i].answers.D);
        }
        if(i==1){
            $(".questionA").text(questionsToAsk[i].question) 
            $(".Button1").text(questionsToAsk[i].answers.A)
            $(".Button2").text(questionsToAsk[i].answers.B)
            $(".Button3").text(questionsToAsk[i].answers.C)
            $(".Button4").text(questionsToAsk[i].answers.D)
            $(".Button1").attr("data-answer", questionsToAsk[i].answers.A);
            $(".Button2").attr("data-answer", questionsToAsk[i].answers.B);
            $(".Button3").attr("data-answer", questionsToAsk[i].answers.C);
            $(".Button4").attr("data-answer", questionsToAsk[i].answers.D);

        }
        if(i==2){
            $(".questionA").text(questionsToAsk[i].question) 
            $(".Button1").text(questionsToAsk[i].answers.A)
            $(".Button2").text(questionsToAsk[i].answers.B)
            $(".Button3").text(questionsToAsk[i].answers.C)
            $(".Button4").text(questionsToAsk[i].answers.D)
            $(".Button1").attr("data-answer", questionsToAsk[i].answers.A);
            $(".Button2").attr("data-answer", questionsToAsk[i].answers.B);
            $(".Button3").attr("data-answer", questionsToAsk[i].answers.C);
            $(".Button4").attr("data-answer", questionsToAsk[i].answers.D);


        }
        if(i==3){
            $(".questionA").text(questionsToAsk[i].question) 
            $(".Button1").text(questionsToAsk[i].answers.A)
            $(".Button2").text(questionsToAsk[i].answers.B)
            $(".Button3").text(questionsToAsk[i].answers.C)
            $(".Button4").text(questionsToAsk[i].answers.D)
            $(".Button1").attr("data-answer", questionsToAsk[i].answers.A);
            $(".Button2").attr("data-answer", questionsToAsk[i].answers.B);
            $(".Button3").attr("data-answer", questionsToAsk[i].answers.C);
            $(".Button4").attr("data-answer", questionsToAsk[i].answers.D);


        }
        if(i==4){
            $(".questionA").text(questionsToAsk[i].question) 
            $(".Button1").text(questionsToAsk[i].answers.A)
            $(".Button2").text(questionsToAsk[i].answers.B)
            $(".Button3").text(questionsToAsk[i].answers.C)
            $(".Button4").text(questionsToAsk[i].answers.D)
            $(".Button1").attr("data-answer", questionsToAsk[i].answers.A);
            $(".Button2").attr("data-answer", questionsToAsk[i].answers.B);
            $(".Button3").attr("data-answer", questionsToAsk[i].answers.C);
            $(".Button4").attr("data-answer", questionsToAsk[i].answers.D);

        }
        if(i==5){
        $(".questionA").text(questionsToAsk[i].question) 
        gameEnd();
        }
    }

    function gameEnd () {
        if(questionsToAsk[5]===questionsToAsk[5]){
            $(".questionA").text(questionsToAsk[i].question) 
            $(".Button1").hide()
            $(".Button2").hide()
            $(".Button3").hide()
            $(".Button4").hide()
        }
    }
    //*********Function Calls**********/ 
    
    // nextQ();
});