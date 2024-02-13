document.addEventListener('DOMContentLoaded', function () {
    // Array of romantic quotes
    const quotes = [
        "In your arms is right where I want to be where nothing else matters besides you and me.",
        "A hug is like a boomerang, you get it back right away.",
        "Your hugs are like the stars that light up my life when things get dark.",
        // Add more quotes
    ];

    const quoteContainer = document.getElementById('quote-container');

    // Display random quote
    function displayQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteContainer.innerHTML = `<p>"${quotes[randomIndex]}"</p>`;
    }

    // Display initial quote
    displayQuote();

    // Change quote every 5 seconds
    setInterval(displayQuote, 5000);
});
