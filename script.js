// Getting HTML elements 
var startButton = document.querySelector(".start-btn");
var questionElement = document.querySelector(".questions");
var buttonGrid = document.querySelector(".btn-grid");
var quizTimer = document.querySelector(".timer");
var buttonA = document.querySelector(".btn-a");
var buttonB = document.querySelector(".btn-b");
var buttonC = document.querySelector(".btn-c");
var buttonD = document.querySelector(".btn-d");

// Quiz questions object
var quizQuestions = [{
        question: "How many elements can you apply to a 'ID' attribute to?",
        choiceA: "3",
        choiceB: "1",
        choiceC: "As many as you want",
        choiceD: "5",
        correctAnswer: "1"},
    {
        question: "How many elements can you apply to a 'ID' attribute to?",
        choiceA: "3",
        choiceB: "1",
        choiceC: "As many as you want",
        choiceD: "5",
        correctAnswer: "1"},   
    ];

var finalQuestionIndex = quizQuestions.length
var currentQuestionIndex = 0
var timerInterval;
var timeLeft = 60;


function generateQuizQuestions(){
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
}
    // function to start the quiz
function startGame (){
    startButton.style.display = "none";
    // questionElement.style.display = "none";
    generateQuizQuestions ()
    
    
    // timer
    // timerInterval = setInterval(function() {
    //     timeLeft--;
    //     quizTimer.innerText = "Time left: " + timeLeft;
    
    //     if(timeLeft === 0) {
    //       clearInterval(timerInterval);
    //       showScore();
    //     }
    //   }, 1000);

}
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestions();
        //display in the results div that the answer is correct.
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestions();
        //display in the results div that the answer is wrong.
    }else{
        showScore();
    }
}
// checkAnswer()
startButton.addEventListener("click", startGame);