// JavaScript Essentials 1 - Modules 2 and 3
// Checkpoint Project

console.log("Module 2 and 3 checkpoint project");

// Challenge 1: Variables, Types, and the typeof Trap

// Part A: Variables

// String - stores my full name
const fullName = "Gareth Motloutsi";

// Number - stores my age
const age = 28;

// Boolean - stores true or false
const enjoysJavaScript = true;

// Number - stores a temperature with decimals
const favouriteTemperature = 22.5;

// NaN - happens when text cannot be converted to a number
const invalidNumber = Number("not a number");

// Infinity - dividing a number by zero gives Infinity
const infiniteValue = 1 / 0;

// Number - the largest safe integer in JavaScript
const maxSafeInteger = Number.MAX_SAFE_INTEGER;

// Null - represents an empty value
const emptyValue = null;

// Undefined - sets the value to undefined
let undefinedValue = undefined;

// Template literal - uses the name and age variables
const introduction = `My name is ${fullName} and I am ${age} years old.`;

// Part B: Checking the variable types

console.log("Variable types:");
console.log("fullName:", typeof fullName);
console.log("age:", typeof age);
console.log("enjoysJavaScript:", typeof enjoysJavaScript);
console.log("favouriteTemperature:", typeof favouriteTemperature);
console.log("invalidNumber:", typeof invalidNumber);
console.log("infiniteValue:", typeof infiniteValue);
console.log("maxSafeInteger:", typeof maxSafeInteger);
console.log("emptyValue:", typeof emptyValue);
console.log("undefinedValue:", typeof undefinedValue);
console.log("introduction:", typeof introduction);

// Additional typeof examples

console.log("typeof null:", typeof null);
console.log("typeof NaN:", typeof NaN);
console.log("typeof undefined:", typeof undefined);
console.log('typeof "42":', typeof "42");
console.log("typeof (typeof 42):", typeof (typeof 42));
console.log("typeof [1, 2, 3]:", typeof [1, 2, 3]);
console.log("typeof function() {}:", typeof function() {});

/*
typeof null returns "object" because of an old JavaScript bug
that was kept for compatibility.

typeof NaN returns "number" because NaN is a special numeric
value used when a calculation or conversion fails.
*/
