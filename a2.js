// Get the modal and button elements
var modal = document.getElementById("modal");
var closeButton = document.getElementById("closeButton");
var loveButton = document.getElementById("loveButton");
var heartsCount = 20; // Default number of hearts

// Function to create a heart element
function createHeart() {
    var heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️"; // Heart emoji

    // Set a random horizontal position for the heart
    heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    heart.style.fontSize = Math.random() * 20 + 20 + "px"; // Random size (20px to 40px)
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random fall duration (3s to 5s)

    // Start the heart from the top of the viewport
    heart.style.top = "-50px"; // Start just above the viewport

    document.body.appendChild(heart);

    // Remove the heart after the animation ends
    heart.addEventListener("animationend", function() {
        heart.remove();
    });
}

// Function to start falling hearts automatically
function startFallingHearts() {
    setInterval(function() {
        for (let i = 0; i < heartsCount; i++) {
            createHeart();
        }
    }, 1000); // Create hearts every second
}

// Start the heart animation when the page loads
window.onload = function() {
    startFallingHearts(); // Start the heart animation
}

// Show the modal when the love button is clicked
loveButton.onclick = function() {
    modal.classList.add("show"); // Show the modal
}

// Close the modal when the close button is clicked
closeButton.onclick = function() {
    modal.classList.remove("show"); // Hide the modal
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show"); // Hide the modal
    }
}

// Close the modal with the Escape key
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        modal.classList.remove("show"); // Hide the modal
    }
}

// Function to set the number of hearts
function setHeartsCount(count) {
    heartsCount = count;
}

// Example of how to use the setHeartsCount function
// setHeartsCount(30); // Uncomment to change the number of hearts