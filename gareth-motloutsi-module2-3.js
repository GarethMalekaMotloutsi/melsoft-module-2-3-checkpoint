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





 // Challenge 2: Type Conversion Workshop

 // Part A: Explicit conversion

 const values = ["123", "3.14", "hello", "42abc", "", 0, null, undefined];

 for (const value of values) {
     console.log("\nValue:", value);
     console.log("Number:", Number(value), typeof Number(value));
     console.log("parseInt:", parseInt(value), typeof parseInt(value));
     console.log("parseFloat:", parseFloat(value), typeof parseFloat(value));
     console.log("Boolean:", Boolean(value), typeof Boolean(value));
     console.log("String:", String(value), typeof String(value));
 }

 
 // Part B: Implicit type coercion

 console.log("\nPart B: Implicit type coercion");

 console.log('"5" + 3:', "5" + 3, typeof ("5" + 3));
 console.log('"5" - 3:', "5" - 3, typeof ("5" - 3));
 console.log('"5" * "2":', "5" * "2", typeof ("5" * "2"));
 console.log("true + 1:", true + 1, typeof (true + 1));
 console.log('true + "1":', true + "1", typeof (true + "1"));
 console.log("false + null:", false + null, typeof (false + null));
 console.log("null + undefined:", null + undefined, typeof (null + undefined));
 console.log("1 / 0:", 1 / 0, typeof (1 / 0));
 console.log("0 / 0:", 0 / 0, typeof (0 / 0));
 console.log('"abc" - 1:', "abc" - 1, typeof ("abc" - 1));
 console.log("[] + []:", [] + [], typeof ([] + []));
 console.log("[1] + [2]:", [1] + [2], typeof ([1] + [2]));


 
 // Part C: Type conversion questions

 /*
 1. Number("42abc") returns NaN because the whole string cannot
    be converted into a number. parseInt("42abc") returns 42
    because it reads the integer at the start of the string.

 2. parseFloat is useful when working with decimal values, such
    as prices. Using parseInt on a price like "49.95" would give
    49 instead of 49.95, which could cause an incorrect calculation.

 3. Number("") returns 0. This can cause a bug in a form if a user
    leaves a price or quantity field empty, because the empty input
    may be treated as zero instead of being rejected as missing.
 */




    
 // Challenge 3: Operators Masterclass

 // 1. Arithmetic: calculate monthly net salary
 const grossSalary = 45000;
 const paye = grossSalary * 0.25;
 const uif = grossSalary * 0.01;
 const medicalAid = 2500;
 const netSalary = grossSalary - paye - uif - medicalAid;

 console.log("Net salary: R", netSalary);
 console.log("Remaining cents after division:", netSalary % 100);

 // 2. Assignment: calculate a shopping cart total
 let cartTotal = 0;
 cartTotal += 150;
 cartTotal += 85;
 cartTotal += 220;
 cartTotal *= 0.90;
 cartTotal *= 1.15;

 console.log("Shopping cart total: R", cartTotal.toFixed(2));

 // 3. Comparison: check signup details
 const signupAge = 25;
 const password = "myPassword123";
 const typedEmail = "gareth@example.com";
 const confirmedEmail = "gareth@example.com";

 const validSignup =
     signupAge >= 18 &&
     password.length >= 8 &&
     typedEmail === confirmedEmail;

 console.log("Signup valid:", validSignup);

 // 4. Logical: check access to the premium dashboard
 const isLoggedIn = true;
 const emailVerified = true;
 const isAdmin = false;

 const canAccessPremium = (isLoggedIn && emailVerified) || isAdmin;
 console.log("Premium access:", canAccessPremium);

 // 5. Unary: convert text to a number and toggle dark mode
 const formAge = "25";
 const numericAge = +formAge;
 let isDarkMode = false;
 isDarkMode = !isDarkMode;

 console.log("Numeric age:", numericAge);
 console.log("Dark mode enabled:", isDarkMode);

 // 6. Ternary: display a membership badge
 const membershipType = "premium";
 const membershipBadge = membershipType === "premium"
     ? "Premium Member"
     : membershipType === "trial"
         ? "Trial Member"
         : "Free Member";

 console.log("Membership:", membershipBadge);

 // 7. String concatenation and template literals
 const customerName = "Thabo Nkosi";
 const customerAge = 28;

 const greetingWithPlus =
     "Welcome back " + customerName + ", you are " +
     customerAge + " years old.";

 const greetingWithTemplate =
     `Welcome back ${customerName}, you are ${customerAge} years old.`;

 console.log(greetingWithPlus);
 console.log(greetingWithTemplate);




 // Written questions

 /*
 1. Prefix and postfix:
    With ++x, the value increases before it is used in an expression.
    With x++, the current value is used first, then it increases.

 2. Uses of modulo:
    - Checking if a number is even or odd.
    - Finding the remainder when splitting items into equal groups.
    - Running a task at regular intervals, such as every fifth order.

 3. Nested ternaries:
    They can be useful for short conditions, but too many make code
    difficult to read. For more complicated decisions, I would use
    if...else statements because each condition is easier to follow.
 */



// Challenge 4: Equality and Comparison Operators

// Part A: Loose equality vs strict equality

console.log("\nChallenge 4: Equality and Comparison Operators");

console.log('5 == "5":', 5 == "5");
console.log('5 === "5":', 5 === "5");
console.log('0 == false:', 0 == false);
console.log('0 === false:', 0 === false);
console.log('"" == false:', "" == false);
console.log('"" === false:', "" === false);
console.log('null == undefined:', null == undefined);
console.log('null === undefined:', null === undefined);

// Part B: Comparison operators

const firstNumber = 10;
const secondNumber = 20;

console.log("10 > 20:", firstNumber > secondNumber);
console.log("10 < 20:", firstNumber < secondNumber);
console.log("10 >= 10:", firstNumber >= 10);
console.log("20 <= 10:", secondNumber <= 10);

// Part C: Written explanation

/*
Loose equality (==) compares values after JavaScript may convert
their types. Strict equality (===) compares both the value and
the type without doing that conversion.

For example, 5 == "5" is true because the string can be converted
to the number 5. However, 5 === "5" is false because one value is
a number and the other is a string.

Strict equality is usually safer because it avoids unexpected
results caused by automatic type conversion.
*/


 // Challenge 5: Operator Precedence

console.log("\nChallenge 5: Operator Precedence");

// Part A: Expressions without brackets

console.log("10 + 5 * 2 =", 10 + 5 * 2);
console.log("20 / 4 + 3 =", 20 / 4 + 3);
console.log("10 - 3 + 2 =", 10 - 3 + 2);
console.log("2 ** 3 ** 2 =", 2 ** 3 ** 2);

// Part B: Expressions with brackets

console.log("(10 + 5) * 2 =", (10 + 5) * 2);
console.log("20 / (4 + 3) =", 20 / (4 + 3));
console.log("10 - (3 + 2) =", 10 - (3 + 2));
console.log("(2 ** 3) ** 2 =", (2 ** 3) ** 2);

// Part C: Written explanation

/*
Operator precedence determines which operation is evaluated first
when an expression contains different operators.

For example, 10 + 5 * 2 gives 20 because multiplication happens
before addition. Adding brackets changes the result:
(10 + 5) * 2 gives 30 because the addition happens first.

Exponentiation is evaluated from right to left, so 2 ** 3 ** 2
is the same as 2 ** (3 ** 2), which gives 512.

Brackets make expressions easier to understand and help avoid
mistakes when calculating more complicated expressions.
*/
