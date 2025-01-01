// Test TypeScript file for dap pwa-chrome

// Function to add two numbers
function add_ts(a: number, b: number): number {
  console.log("Add function called with arguments:", a, b);
  return a + b;
}

// Function to multiply two numbers
function multiply_ts(a: number, b: number): number {
  console.log("Multiply function called with arguments:", a, b);
  return a * b;
}

// Main code execution
console.log("Starting the script...");

// Add numbers
const sum_ts = add_ts(5, 10);
console.log("Sum:", sum_ts);

// Multiply numbers
const product_ts = multiply_ts(4, 7);
console.log("Product:", product_ts);

// Loop to test stepping through code
for (let i = 0; i < 5; i++) {
  console.log("Loop iteration:", i);
}

console.log("Ending the script...");
