// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
//setup  test environment
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

describe('DOM Manipulation Tests', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        require('./index.js'); // Load the script to attach event listeners
    });

    //simulate user behavior
    test('should add a new item to the list on button click', () => {
        const button = document.getElementById('myButton');
        button.click(); });
    
    });        



// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
test('updates text on clicks', () => {    const button = document.getElementById('myButton');
    const display = document.getElementById('statusText');

    button.click();
    expect(display.textContent).toBe('Button Clicked!');
});


// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.
test('displays error message for invalid input', () => {    const input = document.getElementById('userInput');
    const errorDisplay = document.getElementById('errorDisplay');

    input.value = '';
    input.dispatchEvent(new Event('input'));
    expect(errorDisplay.textContent).toBe('Please enter a valid input.');
});



// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
    return element;
}
test('createElement utility function', () => {    const newElement = createElement('div', { id: 'testDiv', class: 'testClass' });
    expect(newElement.tagName).toBe('DIV');
    expect(newElement.getAttribute('id')).toBe('testDiv');
    expect(newElement.getAttribute('class')).toBe('testClass');
});