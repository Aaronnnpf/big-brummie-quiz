// sitepoint was used to aid in my question creation //
/**
 * These are the questions for my quiz
 */
const questions = [
{
    question: "What one of these site's in Birmingham gave inspiration to J.R.R. Tolkien for The Lord Of The Rings?",
    answers: ["Bull Ring", "Blakesley Hall", "Sarehole Mill", "Selfridges"], 
    correct: 2
},
{
    question: "What famous Rockstar was born in Aston, Birmingham?",
    answers: ["Mick Jagger", "Freddie Mercury", "Alice Cooper", "Ozzy Osbourne"],
    correct: 3
},
{
    question: "In the year 1930 the first ODEON Cinema was built in what part of Birmingham?",
    answers: ["Perry Barr", "Weoley Castle", "Yardley", "Great Barr"],
    correct: 0
},
{
    question: "What Chocolate is produced and is said to have it's 'heart' in Birmingham?",
    answers: ["Nestle", "Lindt", "Cadbury", "Thorntons"],
    correct: 2
},
{
    question: "What famous Locomotive was invented in Birmingham?",
    answers: ["The Flying Scotsman", "The Orient Express", "The Jacobite", "Thomas the Tank engine"],
    correct: 3
},
{ 
    question: "Which of these sports was invented in the year 1859 in Edgbaston, Birmingham?",
    answers: ["Rugby", "Tennis", "Lawn Bowls", "Polo"],
    correct: 1
}
];

/**
 * This function is my timer
 */
let timeLeft = 45;
let timerInterval;
const timerE1 = document.getElementById("timer");
const scoreDisplay = document.getElementById("score"); 

/**
 * This function ends the quiz if the timer hits 0 seconds
 */
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerE1.textContent = `Time Left: ${timeLeft} Seconds`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

/**
 * This fetchs the first question of the quiz and start the timer and score keeper
 * */
let currentQuestion = 0;
let score = 0;

/**
 * This function fetchs my quiz ready for it to start and end
 */
const quizStart = document.getElementById("quiz-start");
const quizContainer = document.getElementById("quiz-container");
const quizEnd = document.getElementById("quiz-end");

/**
 * These are my buttons for my quiz
 */
const startBtn = document.getElementById("start-btn");
const endBtn = document.getElementById("end-btn");
const nextBtn = document.getElementById("next-btn");

/**
 * This function updates the UI depending on answer, gives feedback and updates the question
 */
const questionElement1 = document.getElementById("question");
const cardContainer = document.getElementById("card-container");
const feedbackElement1 = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");

function startQuiz() {
    quizStart.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    /**
     * This part of the function will hide my intro paragraph when the quiz begins
     */
    document.getElementById("intro").classList.add("hidden");

    currentQuestion = 0;
    score = 0;
    timeLeft = 45;
    timerE1.textContent = `Time Left: ${timeLeft} Seconds`;
    if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}`;

    startTimer();
    loadQuestion();
}


/**
 * This function loads the next question in the sequance i have made at the top
 */
function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement1.textContent = q.question;
    cardContainer.innerHTML = "";
    feedbackElement1.textContent = "";
    nextBtn.classList.add("hidden");

    q.answers.forEach((answer, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = answer;
        card.addEventListener("click", () => selectAnswer(index, card));
        cardContainer.appendChild(card);
    });
}


/**
 * This function collects the data for the answer to the question and feeds back right or wrong and adds to the score if correct and unlocking the next question button
 */
function selectAnswer(index, card) {
    const q = questions[currentQuestion];
    const cards = document.querySelectorAll(".card");

    if (index === q.correct) {
        cards.forEach(c => c.classList.add("disabled"));
        card.classList.add("correct");
        feedbackElement1.textContent = "Correct";
        score++;
        nextBtn.classList.remove("hidden");
    } else {
        card.classList.add("wrong");
        feedbackElement1.textContent = "Wrong, Try Again";
    }

    if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}`;
}

// Stackoverflow was used to help build this part of my code //
/**
 * This function loads the next question when the button is pressed and once all questions are answered loads the end quiz screen
 */
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}
/**
 * This function end the quiz and the timer 
 */
function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.classList.add("hidden");
    quizEnd.classList.remove("hidden");

    if (finalScore) finalScore.textContent = `Final score: ${score}`;
}

/**
 * This function restarts the quiz once ended and  also restarts the timer
 */
function restartQuiz() {
    clearInterval(timerInterval);
    quizEnd.classList.add("hidden");
    quizStart.classList.remove("hidden");

    timeLeft = 45;
    timerE1.textContent = `Time Left: ${timeLeft}`;

    currentQuestion = 0;
}

/**
 * This function houses my button event listeners
 */
function btnEventListeners() {
    startBtn.addEventListener("click", startQuiz);
    endBtn.addEventListener("click", restartQuiz);
    nextBtn.addEventListener("click", nextQuestion);
}

btnEventListeners();