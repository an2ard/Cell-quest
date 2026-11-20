const startButton = document.getElementById("start-button");
const startMessage = document.getElementById("start-message");

startButton.addEventListener("click", () => {
    startMessage.textContent =
        "Your Cell Quest adventure is coming next!";
});