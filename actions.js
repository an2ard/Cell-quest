// ======================================
// CELL QUEST - THE SURVIVAL CHALLENGE
// ======================================

// GAME QUESTIONS

const levels = [
    {
        title: "Cell Explorer",
        description: "Identify the structures of a cell and discover their functions.",
        category: "CELL ORGANELLES",
        icon: "🔬",
        questions: [
            {
                question: "Which organelle contains DNA and controls many cell activities?",
                options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
                answer: 1,
                explanation: "The nucleus contains most of the cell's DNA and helps control cell activities."
            },
            {
                question: "Which organelle is responsible for producing most of the ATP in a eukaryotic cell?",
                options: ["Mitochondria", "Lysosome", "Nucleus", "Vacuole"],
                answer: 0,
                explanation: "Mitochondria carry out cellular respiration, producing most of the ATP used by the cell."
            },
            {
                question: "Which structure controls what enters and leaves the cell?",
                options: ["Cell wall", "Cytoplasm", "Cell membrane", "Nucleus"],
                answer: 2,
                explanation: "The cell membrane is selectively permeable, meaning it regulates the movement of substances into and out of the cell."
            }
        ]
    },
    {
        title: "Organelle Mission",
        description: "Match cellular structures with their specific functions.",
        category: "ORGANELE FUNCTIONS",
        icon: "🧩",
        questions: [
            {
                question: "Which organelle makes proteins?",
                options: ["Ribosomes", "Lysosomes", "Vacuoles", "Mitochondria"],
                answer: 0,
                explanation: "Ribosomes build proteins by joining amino acids according to genetic instructions."
            },
            {
                question: "Which organelle modifies, sorts, and packages proteins?",
                options: ["Nucleus", "Golgi apparatus", "Chloroplast", "Cell membrane"],
                answer: 1,
                explanation: "The Golgi apparatus modifies, sorts, and packages proteins so they can be transported to their destinations."
            },
            {
                question: "Which organelle contains enzymes that break down waste and old cell parts?",
                options: ["Ribosome", "Mitochondrion", "Lysosome", "Nucleus"],
                answer: 2,
                explanation: "Lysosomes contain digestive enzymes that break down waste and recycle materials inside the cell."
            }
        ]
    },
    {
        title: "Transport Challenge",
        description: "Explore diffusion, osmosis, and active transport.",
        category: "CELL TRANSPORT",
        icon: "💧",
        questions: [
            {
                question: "What is diffusion?",
                options: [
                    "Movement from low to high concentration using energy",
                    "Movement of particles from high to low concentration",
                    "Movement of water only",
                    "The production of ATP"
                ],
                answer: 1,
                explanation: "Diffusion is the movement of particles from an area of higher concentration to an area of lower concentration. It does not require cellular energy."
            },
            {
                question: "What is osmosis?",
                options: [
                    "The movement of proteins",
                    "The movement of oxygen into mitochondria",
                    "The movement of water across a selectively permeable membrane",
                    "The movement of particles using ATP"
                ],
                answer: 2,
                explanation: "Osmosis is the movement of water across a selectively permeable membrane, from an area with more free water to an area with less free water."
            },
            {
                question: "Which statement describes active transport?",
                options: [
                    "It moves substances against their concentration gradient and requires energy",
                    "It always moves water",
                    "It never uses proteins",
                    "It moves particles from high to low concentration without energy"
                ],
                answer: 0,
                explanation: "Active transport uses energy, often from ATP, to move substances against their concentration gradient."
            }
        ]
    },
    {
        title: "Energy Crisis",
        description: "Discover how ATP provides energy for cellular activities.",
        category: "ATP AND ENERGY",
        icon: "⚡",
        questions: [
            {
                question: "What is the main role of ATP in a cell?",
                options: [
                    "Store genetic information",
                    "Provide usable energy for cellular processes",
                    "Build the cell membrane",
                    "Destroy harmful bacteria"
                ],
                answer: 1,
                explanation: "ATP is the cell's main immediate energy carrier. Cells use its energy to power many processes."
            },
            {
                question: "Which organelle produces most of the ATP during aerobic cellular respiration?",
                options: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi apparatus"],
                answer: 2,
                explanation: "Mitochondria produce most of the ATP during aerobic cellular respiration."
            },
            {
                question: "What happens when ATP loses its terminal phosphate group?",
                options: [
                    "It becomes DNA",
                    "It becomes ADP and releases usable energy",
                    "It becomes glucose",
                    "It stops all cell activity permanently"
                ],
                answer: 1,
                explanation: "When ATP loses its terminal phosphate group, it becomes ADP and a phosphate is released. This reaction can provide energy for cellular work."
            }
        ]
    },
    {
        title: "Cell Survival",
        description: "Use your knowledge to understand homeostasis and cell survival.",
        category: "HOMEOSTASIS",
        icon: "🌱",
        questions: [
            {
                question: "What is homeostasis?",
                options: [
                    "The process of making proteins",
                    "The breakdown of glucose only",
                    "Maintaining stable internal conditions",
                    "The movement of water only"
                ],
                answer: 2,
                explanation: "Homeostasis is the maintenance of relatively stable internal conditions, even when the external environment changes."
            },
            {
                question: "Why is the cell membrane important for homeostasis?",
                options: [
                    "It controls the movement of substances into and out of the cell",
                    "It produces all the cell's DNA",
                    "It makes all the cell's proteins",
                    "It destroys ATP"
                ],
                answer: 0,
                explanation: "The cell membrane helps maintain homeostasis by regulating which substances enter and leave the cell."
            },
            {
                question: "A cell uses ATP to move ions against their concentration gradient. Which process is occurring?",
                options: [
                    "Simple diffusion",
                    "Osmosis",
                    "Active transport",
                    "Passive transport"
                ],
                answer: 2,
                explanation: "Active transport uses energy to move substances against their concentration gradient. This helps cells maintain the conditions they need to function."
            }
        ]
    }
];


// ======================================
// GAME STATE
// ======================================

let points = 0;
let lives = 3;
let selectedLevel = 0;
let currentQuestion = 0;
let correctAnswers = 0;

let unlockedLevel = 0;
let completedLevels = new Set();

let answered = false;
let levelBonusAwarded = new Set();


// ======================================
// HTML ELEMENTS
// ======================================

const pointsDisplay = document.getElementById("points");
const livesDisplay = document.getElementById("lives");

const homeScreen = document.getElementById("home-screen");
const levelsScreen = document.getElementById("levels-screen");
const gameScreen = document.getElementById("game-screen");
const resultsScreen = document.getElementById("results-screen");
const aboutScreen = document.getElementById("about-screen");

const statusMessage = document.getElementById("status-message");

const levelList = document.getElementById("level-list");
const progressCount = document.getElementById("progress-count");
const progressFill = document.getElementById("progress-fill");
const progressCaption = document.getElementById("progress-caption");

const selectedTitle = document.getElementById("selected-title");
const selectedDescription = document.getElementById("selected-description");
const playLevelButton = document.getElementById("play-level-button");

const currentLevelLabel = document.getElementById("current-level-label");
const questionCounter = document.getElementById("question-counter");
const questionCategory = document.getElementById("question-category");
const questionProgressFill = document.getElementById("question-progress-fill");

const questionTitle = document.getElementById("question-title");
const questionInstruction = document.getElementById("question-instruction");
const answerOptions = document.getElementById("answer-options");

const feedbackBox = document.getElementById("feedback-box");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const nextQuestionButton = document.getElementById("next-question-button");


// ======================================
// SCREEN NAVIGATION
// ======================================

function showScreen(screen) {
    const screens = [
        homeScreen,
        levelsScreen,
        gameScreen,
        resultsScreen,
        aboutScreen
    ];

    screens.forEach(item => item.classList.add("hidden"));
    screen.classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateStats() {
    pointsDisplay.textContent = points;
    livesDisplay.textContent = lives;
}

function updateStatus(message) {
    statusMessage.textContent = message;
}


// ======================================
// NAVIGATION BUTTONS
// ======================================

document.querySelectorAll(".nav-button").forEach(button => {
    button.addEventListener("click", () => {
        const section = button.dataset.section;

        document.querySelectorAll(".nav-button").forEach(nav => {
            nav.classList.remove("active");
        });

        button.classList.add("active");

        if (section === "home") {
            showScreen(homeScreen);
            updateStatus("Welcome back, Cell Explorer!");
        }

        if (section === "levels") {
            showLevels();
        }

        if (section === "about") {
            showScreen(aboutScreen);
            updateStatus("Explore the structures that make cells function.");
        }
    });
});


// ======================================
// HOME SCREEN
// ======================================

document.getElementById("start-button").addEventListener("click", () => {
    showLevels();
});


// ======================================
// LEVEL SYSTEM
// ======================================

function showLevels() {
    showScreen(levelsScreen);
    renderLevels();

    document.querySelectorAll(".nav-button").forEach(nav => {
        nav.classList.toggle("active", nav.dataset.section === "levels");
    });

    updateStatus("Choose an unlocked mission to continue.");
}

function renderLevels() {
    levelList.innerHTML = "";

    levels.forEach((level, index) => {
        const isUnlocked = index <= unlockedLevel;
        const isCompleted = completedLevels.has(index);
        const isSelected = index === selectedLevel;

        const card = document.createElement("button");
        card.className = "level-card";

        if (isSelected) card.classList.add("selected");
        if (!isUnlocked) card.disabled = true;

        let status = "🔒 Locked";

        if (isCompleted) {
            status = "✓ Completed";
        } else if (isUnlocked) {
            status = "● Available";
        }

        card.innerHTML = `
            <div class="level-card-top">
                <span class="level-number">MISSION ${index + 1}</span>
                <span class="level-status">${status}</span>
            </div>
            <h3>${level.icon} ${level.title}</h3>
            <p>${level.description}</p>
        `;

        card.addEventListener("click", () => {
            if (!isUnlocked) return;

            selectedLevel = index;
            renderLevels();
        });

        levelList.appendChild(card);
    });

    selectedTitle.textContent = levels[selectedLevel].title;
    selectedDescription.textContent = levels[selectedLevel].description;

    const completedCount = completedLevels.size;
    progressCount.textContent = `${completedCount} / 5 completed`;
    progressFill.style.width = `${completedCount / 5 * 100}%`;

    if (completedCount === 5) {
        progressCaption.textContent = "All missions completed! You are a Cell Quest champion!";
    } else {
        progressCaption.textContent = `${5 - completedCount} missions remaining. Keep exploring!`;
    }

    if (completedLevels.has(selectedLevel)) {
        playLevelButton.textContent = "Replay Mission ↻";
    } else {
        playLevelButton.textContent = "Start Mission →";
    }
}

playLevelButton.addEventListener("click", () => {
    startLevel(selectedLevel);
});


// ======================================
// START A LEVEL
// ======================================

function startLevel(levelIndex) {
    selectedLevel = levelIndex;
    currentQuestion = 0;
    answered = false;

    if (lives <= 0) {
        lives = 3;
    }

    updateStats();
    showScreen(gameScreen);
    displayQuestion();
}


// ======================================
// DISPLAY QUESTIONS
// ======================================

function displayQuestion() {
    const level = levels[selectedLevel];
    const question = level.questions[currentQuestion];

    answered = false;

    currentLevelLabel.textContent =
        `MISSION ${selectedLevel + 1} OF 5`;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${level.questions.length}`;

    questionCategory.textContent = level.category;

    questionProgressFill.style.width =
        `${(currentQuestion / level.questions.length) * 100}%`;

    questionTitle.textContent = question.question;
    questionInstruction.textContent =
        "Read carefully and select the best answer.";

    answerOptions.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "answer-option";
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        answerOptions.appendChild(button);
    });

    feedbackBox.classList.add("hidden");
    feedbackBox.classList.remove("correct-feedback", "incorrect-feedback");
    nextQuestionButton.classList.add("hidden");

    updateStatus(`Mission ${selectedLevel + 1}: Question ${currentQuestion + 1}`);
}


// ======================================
// CHECK ANSWERS
// ======================================

function checkAnswer(selectedAnswer, selectedButton) {
    if (answered) return;

    answered = true;

    const question = levels[selectedLevel].questions[currentQuestion];
    const allOptions = document.querySelectorAll(".answer-option");

    allOptions.forEach(button => {
        button.disabled = true;
    });

    const isCorrect = selectedAnswer === question.answer;

    if (isCorrect) {
        points += 100;
        correctAnswers++;

        selectedButton.classList.add("correct");

        feedbackBox.classList.add("correct-feedback");
        feedbackTitle.textContent = "✓ Correct answer! +100 points";
        feedbackText.textContent = question.explanation;

        updateStatus("Great job! You earned 100 points.");
    } else {
        lives--;

        selectedButton.classList.add("incorrect");
        allOptions[question.answer].classList.add("correct");

        feedbackBox.classList.add("incorrect-feedback");
        feedbackTitle.textContent = "Not quite! You lost one life.";
        feedbackText.textContent =
            `The correct answer is: ${question.options[question.answer]}. ${question.explanation}`;

        updateStatus("Keep learning! Check the explanation.");
    }

    updateStats();

    feedbackBox.classList.remove("hidden");
    nextQuestionButton.classList.remove("hidden");

    nextQuestionButton.textContent =
        currentQuestion === questionCount() - 1
            ? "Finish Mission →"
            : "Next Question →";
}


// ======================================
// QUESTION PROGRESSION
// ======================================

function questionCount() {
    return levels[selectedLevel].questions.length;
}

nextQuestionButton.addEventListener("click", () => {
    if (lives <= 0) {
        restartLevel();
        return;
    }

    currentQuestion++;

    if (currentQuestion < questionCount()) {
        displayQuestion();
    } else {
        completeLevel();
    }
});


// ======================================
// COMPLETE A LEVEL
// ======================================

function completeLevel() {
    completedLevels.add(selectedLevel);

    // Award the level bonus only once.
    if (!levelBonusAwarded.has(selectedLevel)) {
        points += 200;
        levelBonusAwarded.add(selectedLevel);
    }

    updateStats();

    if (selectedLevel < levels.length - 1) {
        unlockedLevel = Math.max(unlockedLevel, selectedLevel + 1);

        updateStatus("Mission completed! The next mission is unlocked.");

        selectedLevel++;
        showLevels();

        selectedTitle.textContent = levels[selectedLevel].title;
        selectedDescription.textContent =
            "Congratulations! Your next mission is ready.";

        playLevelButton.textContent = "Continue to Next Mission →";
    } else {
        showFinalResults();
    }
}


// ======================================
// RESTART LEVEL WHEN LIVES REACH ZERO
// ======================================

function restartLevel() {
    lives = 3;
    currentQuestion = 0;
    answered = false;

    updateStats();

    alert(
        "You ran out of lives! Your current mission will restart. You have 3 new lives. Keep trying!"
    );

    displayQuestion();
}


// ======================================
// FINAL RESULTS
// ======================================

function showFinalResults() {
    showScreen(resultsScreen);

    document.getElementById("results-title").textContent =
        "You saved the cell!";

    document.getElementById("results-description").textContent =
        "You completed all five missions and demonstrated your knowledge of cell biology. Amazing work!";

    document.getElementById("final-score").textContent = points;
    document.getElementById("final-correct").textContent =
        `${correctAnswers} / 15`;

    document.getElementById("final-levels").textContent =
        `${completedLevels.size} / 5`;

    updateStatus("Congratulations! You completed Cell Quest.");
}


// ======================================
// PLAY AGAIN
// ======================================

document.getElementById("play-again-button").addEventListener("click", () => {
    points = 0;
    lives = 3;
    selectedLevel = 0;
    currentQuestion = 0;
    correctAnswers = 0;
    unlockedLevel = 0;

    completedLevels = new Set();
    levelBonusAwarded = new Set();

    updateStats();
    showLevels();

    updateStatus("A new Cell Quest adventure begins!");
});


// ======================================
// BACK TO LEVELS
// ======================================

document.getElementById("back-to-levels").addEventListener("click", () => {
    showLevels();
});


// ======================================
// INITIALIZE GAME
// ======================================

updateStats();
renderLevels();
updateStatus("Ready to explore? Start your Cell Quest adventure!");