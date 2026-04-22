// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
//setup  test environment

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

//Wrap in DOMContentLoaded so DOM is fully loaded before JS runs
// ============================================================
// Lab: DOM Testing - User Behavior Simulation
// index.js — functions must match exactly what the tests call
// ============================================================

// Step 3: addElementToDOM
// Creates a new element with the given id and sets its text content
// Then appends it to the document body
function addElementToDOM(id, text) {
    // Create a new div element
    const div = document.createElement('div');

    // Assign the given id so the test can find it with getElementById
    div.id = id;

    // Set the text content to the provided text
    div.textContent = text;

    // Append to body so it exists in the DOM
    document.body.appendChild(div);
}

// Step 3: removeElementFromDOM
// Finds the element by id and removes it from the DOM
function removeElementFromDOM(id) {
    // Find the element by its id
    const element = document.getElementById(id);

    // If it exists, remove it from its parent
    if (element) {
        element.parentNode.removeChild(element);
    }
}

// Step 2: simulateClick
// Simulates a button click by updating the element's text content
function simulateClick(id, text) {
    // Find the element by id (created by addElementToDOM or already in DOM)
    let element = document.getElementById(id);

    // If element doesn't exist, create it first
    if (!element) {
        element = document.createElement('div');
        element.id = id;
        document.body.appendChild(element);
    }

    // Update its text content to simulate what happens on click
    element.textContent = text;
}

// Step 3: handleFormSubmit
// Handles form submission — reads input value and displays it
// If input is empty, shows an error message instead
function handleFormSubmit(formId, outputId) {
    // Get the input element inside the form
    const input = document.querySelector(`#${formId} input`);

    // Get or create the output element where result will be shown
    let output = document.getElementById(outputId);
    if (!output) {
        output = document.createElement('div');
        output.id = outputId;
        document.body.appendChild(output);
    }

    // Get or create the error message element
    let errorMessage = document.getElementById('error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.id = 'error-message';
        document.body.appendChild(errorMessage);
    }

    // Check if input is empty
    if (!input || input.value.trim() === '') {
        // Show error message and make it visible (remove hidden class)
        errorMessage.textContent = 'Input cannot be empty';
        errorMessage.classList.remove('hidden');
    } else {
        // Display the input value in the output element
        output.textContent = input.value;

        // Hide the error message
        errorMessage.textContent = '';
        errorMessage.classList.add('hidden');
    }
}

// Export all functions so Jest tests can import and test them
module.exports = { addElementToDOM, removeElementFromDOM, simulateClick, handleFormSubmit };