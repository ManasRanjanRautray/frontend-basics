// Function Scope (not Block Scope)
if (true) {
  var leak = "I am visible outside the if-block";
}
console.log(leak); // Outputs: "I am visible outside the if-block"

// Hoisting Behavior
console.log(myVar); // Outputs: undefined (no error)
var myVar = "Hello";
console.log(myVar); // Outputs: "Hello"

// Redeclaration
var x = 10;
var x = 20; // Allowed. x is now 20.