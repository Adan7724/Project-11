// Function to toggle dark/light mode
function toggleDarkLightMode() {
    const body = document.body;
    const modeToggle = document.getElementById("mode-toggle");
    const modeText = document.getElementById("mode-text");

    if (modeToggle.checked) {
        body.classList.add("dark-mode");
        modeText.innerText = "Light Mode";
    } else {
        body.classList.remove("dark-mode");
        modeText.innerText = "Dark Mode";
    }
}

// Event listener for mode toggle checkbox
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("change", toggleDarkLightMode);

// Check local storage for user preference
if (localStorage.getItem("theme") === "dark") {
    modeToggle.checked = true;
    toggleDarkLightMode();
}

// Quote generator code
const quoteOutput = document.getElementById("quote-output");
const authorOutput = document.getElementById("author-output");
const newQuoteBtn = document.getElementById("new-quote-btn");

const quotes = [
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    // Add more quotes as needed
];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteOutput.innerText = randomQuote.quote;
    authorOutput.innerText = `— ${randomQuote.author}`;
}

// Event listener for new quote button
newQuoteBtn.addEventListener("click", generateRandomQuote);

// Initial quote generation
generateRandomQuote();
