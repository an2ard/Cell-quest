
/* =====================================
   CELL QUEST - GAME QUESTIONS
===================================== */

const levels = [

    // LEVEL 1
    {
        name: "Level 1: Cell Explorer",

        questions: [
            {
                question: "Which organelle contains DNA?",
                answers: ["Mitochondria", "Nucleus", "Ribosome"],
                correct: 1,
                explanation: "The nucleus contains most of the cell's DNA."
            },
            {
                question: "Which structure controls what enters and leaves the cell?",
                answers: ["Cell membrane", "Nucleus", "Ribosome"],
                correct: 0,
                explanation: "The cell membrane controls the movement of substances into and out of the cell."
            },
            {
                question: "Which organelle produces most of the cell's ATP?",
                answers: ["Golgi apparatus", "Lysosome", "Mitochondria"],
                correct: 2,
                explanation: "Mitochondria produce most ATP during cellular respiration."
            }
        ]
    },

    // LEVEL 2
    {
        name: "Level 2: Organelle Mission",

        questions: [
            {
                question: "Which structure makes proteins?",
                answers: ["Ribosomes", "Vacuoles", "Nucleus"],
                correct: 0,
                explanation: "Ribosomes build proteins using amino acids."
            },
            {
                question: "Which organelle modifies and packages proteins?",
                answers: ["Mitochondria", "Golgi apparatus", "Lysosome"],
                correct: 1,
                explanation: "The Golgi apparatus modifies, sorts, and packages proteins."
            },
            {
                question: "Which organelle breaks down waste inside the cell?",
                answers: ["Chloroplast", "Nucleus", "Lysosome"],
                correct: 2,
                explanation: "Lysosomes contain enzymes that break down waste materials."
            }
        ]
    },

    // LEVEL 3
    {
        name: "Level 3: Transport Challenge",

        questions: [
            {
                question: "What is diffusion?",
                answers: [
                    "Movement from high to low concentration",
                    "Movement using ATP",
                    "Movement of water only"
                ],
                correct: 0,
                explanation: "Diffusion moves particles from an area of higher concentration to an area of lower concentration."
            },
            {
                question: "What is osmosis?",
                answers: [
                    "Movement of proteins",
                    "Movement of water across a selectively permeable membrane",
                    "Production of ATP"
                ],
                correct: 1,
                explanation: "Osmosis is the movement of water across a selectively permeable membrane."
            },
            {
                question: "Which process requires energy to move substances against their concentration gradient?",
                answers: [
                    "Diffusion",
                    "Osmosis",
                    "Active transport"
                ],
                correct: 2,
                explanation: "Active transport uses energy, often from ATP, to move substances against their concentration gradient."
            }
        ]
    },

    // LEVEL 4
    {
        name: "Level 4: Energy Crisis",

        questions: [
            {
                question: "What is the main role of ATP?",
                answers: [
                    "Provide usable energy for cell activities",
                    "Store DNA",
                    "Build the cell membrane"
                ],
                correct: 0,
                explanation: "ATP provides usable energy for many cellular processes."
            },
            {
                question: "Which organelle produces most ATP during aerobic respiration?",
                answers: ["Nucleus", "Mitochondria", "Ribosomes"],
                correct: 1,
                explanation: "Mitochondria produce most ATP during aerobic cellular respiration."
            },
            {
                question: "What does ATP become after losing its terminal phosphate group?",
                answers: ["DNA", "Glucose", "ADP"],
                correct: 2,
                explanation: "ATP becomes ADP when it loses its terminal phosphate group."
            }
        ]
    },

    // LEVEL 5
    {
        name: "Level 5: Cell Survival",

        questions: [
            {
                question: "What is homeostasis?",
                answers: [
                    "Maintaining stable internal conditions",
                    "Making proteins",
                    "Breaking down DNA"
                ],
                correct: 0,
                explanation: "Homeostasis means maintaining relatively stable internal conditions."
            },
            {
                question: "How does the cell membrane help maintain homeostasis?",
                answers: [
                    "It produces DNA",
                    "It controls what enters and leaves the cell",
                    "It creates all the cell's energy"
                ],
                correct: 1,
                explanation: "The cell membrane regulates substances entering and leaving the cell."
            },
            {
                question: "A cell uses ATP to move ions against their concentration gradient. What process is this?",
                answers: [
                    "Osmosis",
                    "Simple diffusion",
                    "Active transport"
                ],
                correct: 2,
                explanation: "Active transport uses energy to move substances against their concentration gradient."
            }
        ]
    }

];


/* =====================================
   GAME VARIABLES
===================================== */

let points = 0;
let lives = 3;

let currentLevel = 0;
let currentQuestion = 0;

let correctAnswers = 0;
let unlockedLevel = 0;

let completedLevels = [];


/* =====================================
   HTML ELEMENTS
===================================== */

const home = document.getElementById("home");
const levelsScreen = document.getElementById("levels");
const game = document.getElementById("game");
const results = document.getElementById("results");

const pointsText = document.getElementById("points");
const livesText = document.getElementById("lives");

const levelList = document.getElementById("level-list");

const questionText = document.getElementById("question");
const answers = document.getElementById("answers");

const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next");


/* =====================================
   SHOW SCREENS
===================================== */

function showScreen(screen) {

    home.classList.add("hidden");
    levelsScreen.classList.add("hidden");
    game.classList.add("hidden");
    results.classList.add("hidden");

    screen.classList.remove("hidden");

}


/* =====================================
   UPDATE POINTS AND LIVES
===================================== */

function updateStats() {

    pointsText.textContent = points;
    livesText.textContent = lives;

}


/* =====================================
   START GAME
===================================== */

document.getElementById("start").addEventListener("click", function() {

    showLevels();

});


/* =====================================
   SHOW LEVELS
===================================== */

function showLevels() {

    showScreen(levelsScreen);

    levelList.innerHTML = "";

    levels.forEach(function(level, index) {

        const button = document.createElement("button");

        if (completedLevels.includes(index)) {

            button.textContent = "✓ " + level.name;
            button.classList.add("completed");

        } else if (index <= unlockedLevel) {

            button.textContent = "🔓 " + level.name;

        } else {

            button.textContent = "🔒 " + level.name;

        }

        button.disabled = index > unlockedLevel;

        button.addEventListener("click", function() {

            startLevel(index);

        });

        levelList.appendChild(button);

    });

    document.getElementById("progress-text").textContent =
        completedLevels.length + " of 5 missions completed";

    document.getElementById("progress-fill").style.width =
        (completedLevels.length / 5 * 100) + "%";

}


/* =====================================
   START A LEVEL
===================================== */

function startLevel(levelIndex) {

    currentLevel = levelIndex;
    currentQuestion = 0;

    showScreen(game);

    showQuestion();

}


/* =====================================
   SHOW QUESTION
===================================== */

function showQuestion() {

    const question = levels[currentLevel].questions[currentQuestion];

    document.getElementById("level-name").textContent =
        levels[currentLevel].name;

    document.getElementById("question-number").textContent =
        "Question " + (currentQuestion + 1) + " of 3";

    questionText.textContent = question.question;

    answers.innerHTML = "";

    feedback.textContent = "";
    feedback.classList.add("hidden");

    feedback.classList.remove(
        "correct-feedback",
        "incorrect-feedback"
    );

    nextButton.classList.add("hidden");

    question.answers.forEach(function(answer, index) {

        const button = document.createElement("button");

        button.textContent = answer;

        button.addEventListener("click", function() {

            checkAnswer(index);

        });

        answers.appendChild(button);

    });

}


/* =====================================
   CHECK ANSWER
===================================== */

function checkAnswer(selectedAnswer) {

    const question = levels[currentLevel].questions[currentQuestion];

    const buttons = answers.querySelectorAll("button");

    // Prevent multiple answers
    buttons.forEach(function(button) {

        button.disabled = true;

    });

    if (selectedAnswer === question.correct) {

        points += 100;
        correctAnswers++;

        buttons[selectedAnswer].classList.add("correct");

        feedback.textContent =
            "Correct! +100 points. " + question.explanation;

        feedback.classList.add("correct-feedback");

    } else {

        lives--;

        buttons[selectedAnswer].classList.add("incorrect");

        buttons[question.correct].classList.add("correct");

        feedback.textContent =
            "Incorrect! You lost one life. " + question.explanation;

        feedback.classList.add("incorrect-feedback");

    }

    feedback.classList.remove("hidden");

    updateStats();

    nextButton.classList.remove("hidden");

    if (currentQuestion === 2) {

        nextButton.textContent = "Finish Mission →";

    } else {

        nextButton.textContent = "Next Question →";

    }

}


/* =====================================
   NEXT QUESTION
===================================== */

nextButton.addEventListener("click", function() {

    // Check if the player lost all lives
    if (lives <= 0) {

        alert("You lost all your lives! This mission will restart.");

        lives = 3;
        currentQuestion = 0;

        updateStats();

        showQuestion();

        return;

    }

    currentQuestion++;

    if (currentQuestion < 3) {

        showQuestion();

    } else {

        finishLevel();

    }

});


/* =====================================
   FINISH LEVEL
===================================== */

function finishLevel() {

    // Give the bonus only the first time the level is completed
    if (!completedLevels.includes(currentLevel)) {

        points += 200;

        completedLevels.push(currentLevel);

    }

    updateStats();

    if (currentLevel < 4) {

        unlockedLevel = Math.max(
            unlockedLevel,
            currentLevel + 1
        );

        alert("Mission completed! You earned 200 bonus points.");

        showLevels();

    } else {

        showResults();

    }

}


/* =====================================
   SHOW FINAL RESULTS
===================================== */

function showResults() {

    showScreen(results);

    document.getElementById("final-score").textContent = points;

    document.getElementById("final-correct").textContent =
        "You answered " + correctAnswers + " questions correctly!";

    document.getElementById("final-levels").textContent =
        "Missions completed: " + completedLevels.length + " / 5";

}


/* =====================================
   RESTART GAME
===================================== */

document.getElementById("restart").addEventListener("click", function() {

    points = 0;
    lives = 3;

    currentLevel = 0;
    currentQuestion = 0;

    correctAnswers = 0;
    unlockedLevel = 0;

    completedLevels = [];

    updateStats();

    showLevels();

});


/* =====================================
   BACK TO LEVELS
===================================== */

document.getElementById("back").addEventListener("click", function() {

    showLevels();

});


/* =====================================
   INITIALIZE GAME
===================================== */

updateStats();
