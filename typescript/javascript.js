// Test JavaScript file for dap pwa-chrome

// Function to add two numbers
function add_js(a, b) {
  console.log("Add function called with arguments:", a, b);
  return a + b;
}

// Function to multiply two numbers
function multiply_js(a, b) {
  console.log("Multiply function called with arguments:", a, b);
  return a * b;
}

// Main code execution
console.log("Starting the script...");

// Add numbers
const sum_js = add_js(5, 10);
console.log("Sum:", sum_js);

// Multiply numbers
const product_js = multiply_js(4, 7);
console.log("Product:", product_js);

// Loop to test stepping through code
for (let i = 0; i < 5; i++) {
  console.log("Loop iteration:", i);
}

console.log("Ending the script...");
