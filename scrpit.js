const questions = [
    {
        question:"Which is largest animal in the world ",
        answers:[
            {text:"Shark", correct: false},
            {text:"Blue whale", correct: true},
            {text:"Elephnat", correct: false},
            {text:"Giraffe", correct: false},
            
        ]
    },

    {
        question:"Which is the smallest country in the world? ",
        answers:[
            {text:"Vatican City", correct: true},
            {text:"Bhutan", correct: false},
            {text:"Nepal", correct: false},
            {text:"Shri Lanka", correct: false},
            
        ]
    },

    {
        question:"Which is largest desert in the world? ",
        answers:[
            {text:"Kalahari", correct: false},
            {text:"Gobi", correct: false},
            {text:"Sahara", correct: false},
            {text:"Antarctica", correct: true},
            
        ]
    },
    


    {
        question:"Which is smallest contient in the world ",
        answers:[
            {text:"Asia", correct: false},
            {text:"Austraila", correct: true},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false},
            
        ]
    },
    
    


];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let CurrentQuestionIndex=0;
let score=0;

function startQuiz(){
    CurrentQuestionIndex=0;
    score=0;
    nextButton.innerHTML("Next");
    showQuestion()


}

function showQuestion(){
    let currentquestion=questions[CurrentQuestionIndex];
    let questionNo=CurrentQuestionIndex + 1;
    questionElement.innerHTML=questionNo +". "+ currentquestion.question

    currentquestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);
    }
    
    
    
    )
    
}

startQuiz();
