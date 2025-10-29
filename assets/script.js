const questions = [
{
    question: "What site in Birmingham gave inspiration to J.R.R. Tolkien for Lord Of The Rings?",
    answers: ["Bull Ring", "Blakesley Hall", "Sarehole Mill", "Selfridges"],
    correct: 2
},
{
    question: "What famous Rockstar was born in Aston, Birmingham?",
    answers: ["Mick Jagger", "Freddie Mercury", "Alice Cooper", "Ozzy Osbourne"],
    correct: 3
},
{
    question: "In 1930 the first ODEON Cinema was built in what part of Birmingham?",
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
    question: "Which of these sports was invented in 1859 in Edgbaston, Birmingham?",
    answers: ["Rugby", "Tennis", "Lawn Bowls", "Polo"],
    correct: 1
}
];

let currentQuestion = 0;

const questionElement1 = document.getElementById("question");
const cardContainer = document.getElementById("card-container");
const feedbackElement1 = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    const q = questions[currentQuestions];
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

function selectAnswer(index, card) {
    const q = questions[currentQuestion];
    const cards = document.querySelectorAll(".card");
    cards.forEach(c => c.classList.add("disabled"));

    if (index === q.correct) {
        card.classList.add("Correct");
        feedbackElement1.textContent = "Correct";
        nextBtn.classList.remove("hidden");
    } else {
        card.classList.add("Wrong");
        feedbackElement1.textContent = "Wrong, Try Again"
        nextBtn.classList.reomove("hidden");
    };
}

nextBtn.addEventListener("click", () => {
    currentQuestion ++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionElement1.textContent = "Congratulations, You have finished the quiz!"
        cardContainer.innerHTML = "";
        feedbackElement1,textContent = "";
        nextBtn.classList.add("hidden");
    }
});

loadQuestion ();