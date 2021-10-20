const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,currentQuestionIndex



startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
startButton.classList.add('hide')
shuffledQuestions = questions.sort(()=> Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}
function setNextQuestion(){
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body,correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button,button.dataset.correct)
})
if(shuffledQuestions.length > currentQuestionIndex+1){
    nextButton.classList.remove('hide')
}else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}

}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "what is 5+4?",
        answers: [
            { text:"4", correct: false },
            {text: '9', correct: true}
        ]
    },
    {
        question: "How many time zones are there in Russia?",
        answers: [
            { text:"11", correct: true },
            {text: '8', correct: false},
            {text: 'I dont know', correct: false},
            {text: '10', correct: false}
        ]
    },
    {
        question: "How many time zones are there in Russia?",
        answers: [
            { text:"11", correct: true },
            {text: '8', correct: false},
            {text: 'I dont know', correct: false},
            {text: '10', correct: false}
        ]
    },
    {
        question: "What city do The Beatles come from?",
        answers: [
            { text:"Manchester", correct: false },
            {text: 'Leeds', correct: false},
            {text: 'Liverpool', correct: true},
            {text: 'London', correct: false}
        ]
    },
    {
        question: "When was Netflix founded?",
        answers: [
            { text:"2000", correct: false },
            {text: '2008', correct: false},
            {text: '1997', correct: true},
            {text: '2015', correct: false}
        ]
    },
    {
        question: "Which football team is known as ‘The Red Devils’?",
        answers: [
            { text:"Real Madrid", correct: false },
            {text: 'Liverpool', correct: false},
            {text: 'Manchester United', correct: true},
            {text: 'Bayern Munich', correct: false}
        ]
    },
    {
        question: "What’s the smallest country in the world?",
        answers: [
            { text:"Sri Lanka", correct: false },
            {text: 'Hawai', correct: false},
            {text: 'The Vatican', correct: true},
            {text: 'New Zealand', correct: false}
        ]
    },
    {
        question: "How many keys does a classic piano have?",
        answers: [
            { text:"88", correct: true },
            {text: '102', correct: false},
            {text: '94', correct: true},
            {text: '86', correct: false}
        ]
    },
    
    
    

]