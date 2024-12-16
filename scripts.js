// DOM elements
const outputDiv = document.getElementById('output');
const inputField = document.getElementById('input');

// List of supported commands
const commands = {
    help: "Supported commands: help, clear, about, echo <text>",
    about: "This is a simple terminal built with HTML, CSS, and JavaScript.",
    clear: "Clears the screen.",
};

// Process input command
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const input = inputField.value.trim();
        handleCommand(input);
        inputField.value = ''; // Clear the input field
    }
});

function handleCommand(input) {
    // Display the command
    appendOutput(`> ${input}`);
    
    // Parse the command
    const [command, ...args] = input.split(' ');
    if (commands[command]) {
        if (command === 'clear') {
            clearOutput();
        } else if (command === 'echo') {
            appendOutput(args.join(' '));
        } else {
            appendOutput(commands[command]);
        }
    } else {
        appendOutput("Unknown command. Type 'help' for a list of commands.");
    }
}

// Add text to the output
function appendOutput(text) {
    outputDiv.innerHTML += text + '\n';
    outputDiv.scrollTop = outputDiv.scrollHeight; // Scroll to bottom
}

// Clear the output
function clearOutput() {
    outputDiv.innerHTML = '';
}
