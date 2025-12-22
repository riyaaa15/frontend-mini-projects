const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Text Machine Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false }
    ]
  },
  {
    question: "Which tag is used to insert a line break in HTML?",
    answers: [
      { text: "<br> ", correct: true },
      { text: "<lb>", correct: false },
      { text: "<break>", correct: false },
      { text: "<hr>", correct: false }
    ]
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: true },
      { text: "const", correct: false },
      { text: "define", correct: false }
    ]
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "constant", correct: false }
    ]
  },
  {
    question: "What will be the output of: console.log(typeof null)?",
    answers: [
      { text: "null", correct: false },
      { text: "object", correct: true },
      { text: "undefined", correct: false },
      { text: "number", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Float", correct: true },
      { text: "Undefined", correct: false }
    ]
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "#", correct: false },
      { text: "<!-- -->", correct: false }
    ]
  },
  {
    question: "Which method is used to print something in the browser console?",
    answers: [
      { text: "console.log()", correct: true },
      { text: "print()", correct: false },
      { text: "log.console()", correct: false },
      { text: "document.write()", correct: false }
    ]
  },
  {
    question: "Which HTML attribute is used to add inline CSS?",
    answers: [
      { text: "style", correct: true },
      { text: "class", correct: false },
      { text: "font", correct: false },
      { text: "css", correct: false }
    ]
  },
  {
    question: "Which operator is used to compare both value and type in JavaScript?",
    answers: [
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "===", correct: true },
      { text: "!=", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");  
const answerBtns = document.getElementById("answer-btn");   
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML ="Next";
    showQues();
}

function showQues() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(ans => {
        const button = document.createElement("button");
        button.textContent = ans.text;
        button.classList.add("btn");
       
        if(ans.correct){
            button.dataset.correct = true;
        }
        button.addEventListener("click", selectAsnwer); 
         answerBtns.appendChild(button);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAsnwer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQues();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
