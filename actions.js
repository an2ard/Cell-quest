// FIVE LEVELS
const levels = [
    {
        title: "Cell Explorer",
        description: "Discover the cell and identify its main parts."
    },
    {
        title: "Organelle Mission",
        description: "Match organelles with their functions."
    },
    {
        title: "Transport Challenge",
        description: "Explore diffusion, osmosis, and active transport."
    },
    {
        title: "Energy Crisis",
        description: "Learn how cells use ATP for energy."
    },
    {
        title: "Cell Survival",
        description: "Apply what you know to keep a cell functioning."
    }
];

// GAME PROGRESS
let unlockedLevel = 1;
let selectedLevel = 1;

const completedLevels = new Set();

// HTML ELEMENTS
const levelCards = document.querySelectorAll(".level-card");

const progressCount = document.getElementById("progress-count");
const progressFill = document.getElementById("progress-fill");
const progressCaption = document.getElementById("progress-caption");

const selectedEyebrow = document.getElementById("selected-eyebrow");
const selectedTitle = document.getElementById("selected-title");
const selectedDescription = document.getElementById("selected-description");

const completeButton = document.getElementById("complete-button");
const statusMessage = document.getElementById("status-message");

// UPDATE THE LEVEL SCREEN
function updateLevelScreen() {

    levelCards.forEach((card) => {

        const levelNumber = Number(card.dataset.level);
        const status = document.getElementById(`status-${levelNumber}`);

        card.disabled = levelNumber > unlockedLevel;

        card.classList.toggle(
            "locked",
            levelNumber > unlockedLevel
        );

        card.classList.toggle(
            "selected",
            levelNumber === selectedLevel
        );

        card.classList.toggle(
            "completed",
            completedLevels.has(levelNumber)
        );

        if (completedLevels.has(levelNumber)) {
            status.textContent = "✓ Completed";
        }

        else if (levelNumber > unlockedLevel) {
            status.textContent = "🔒 Locked";
        }

        else if (levelNumber === unlockedLevel) {
            status.textContent = "● Available";
        }

        else {
            status.textContent = "Available";
        }
    });

    // UPDATE PROGRESS
    const completedCount = completedLevels.size;

    progressCount.textContent =
        `${completedCount} / 5 completed`;

    progressFill.style.width =
        `${completedCount * 20}%`;

    progressCaption.textContent =
        completedCount === 5
        ? "Amazing! You completed every level!"
        : `You have completed ${completedCount} of 5 levels. Keep going!`;

    // UPDATE SELECTED LEVEL
    selectedEyebrow.textContent =
        `CURRENT CHALLENGE · LEVEL ${String(selectedLevel).padStart(2, "0")}`;

    selectedTitle.textContent =
        levels[selectedLevel - 1].title;

    selectedDescription.textContent =
        levels[selectedLevel - 1].description;

    completeButton.disabled =
        completedLevels.has(selectedLevel);

    completeButton.textContent =
        completedLevels.has(selectedLevel)
        ? "Level completed ✓"
        : "Complete level (test) →";
}

// SELECT A LEVEL
levelCards.forEach((card) => {

    card.addEventListener("click", () => {

        const levelNumber = Number(card.dataset.level);

        if (levelNumber <= unlockedLevel) {

            selectedLevel = levelNumber;

            statusMessage.textContent =
                `Level ${levelNumber} selected: ${levels[levelNumber - 1].title}.`;

            updateLevelScreen();
        }
    });
});

// TEMPORARY BUTTON TO TEST LEVEL COMPLETION
completeButton.addEventListener("click", () => {

    if (completedLevels.has(selectedLevel)) {
        return;
    }

    completedLevels.add(selectedLevel);

    if (selectedLevel === unlockedLevel && unlockedLevel < 5) {

        unlockedLevel++;
        selectedLevel = unlockedLevel;

        statusMessage.textContent =
            `Great job! Level ${unlockedLevel - 1} completed. Level ${unlockedLevel} is now unlocked!`;
    }

    else if (completedLevels.size === 5) {

        statusMessage.textContent =
            "Congratulations! You are a Cell Master!";
    }

    updateLevelScreen();
});

// INITIALIZE THE GAME
updateLevelScreen();