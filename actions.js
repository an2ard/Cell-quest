const navigationButtons = document.querySelectorAll(".nav-button");
const statusMessage = document.getElementById("status-message");
const startButton = document.getElementById("start-button");

// Navigation buttons
navigationButtons.forEach((button) => {
    button.addEventListener("click", () => {

        navigationButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const section = button.dataset.section;

        statusMessage.textContent =
            `${section} section selected. More activities are coming soon!`;
    });
});

// Start Game button
startButton.addEventListener("click", () => {
    statusMessage.textContent =
        "Welcome to Cell Quest! Your first challenge will be available in the next iteration.";
});