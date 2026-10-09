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





 // Challenge 6: Ternary and Short-Circuit Evaluation

console.log("\nChallenge 6: Ternary and Short-Circuit Evaluation");

// Part A: Ternary operator

const ageForEntry = 20;

const entryMessage = ageForEntry >= 18
    ? "Entry allowed"
    : "Entry denied";

console.log("Entry message:", entryMessage);

// Part B: Short-circuit evaluation with &&

const loggedIn = true;
const hasPermission = true;

const dashboardAccess = loggedIn && hasPermission;

console.log("Dashboard access:", dashboardAccess);

// Part C: Short-circuit evaluation with ||

const username = "";

const displayName = username || "Guest";

console.log("Display name:", displayName);

// Part D: Short-circuit evaluation with ??

const userAge = 0;

const ageDisplay = userAge ?? 18;

console.log("Age display:", ageDisplay);

// Part E: Written explanation

/*
The ternary operator checks a condition and returns one of two
values. It is useful for simple decisions.

The && operator returns the second value if the first value is
truthy. If the first value is falsy, it stops and returns that
first value.

The || operator returns the second value when the first value
is falsy. It can be used to provide a default value, such as
displaying Guest when no username was entered.

The ?? operator only uses the default value when the first value
is null or undefined. In this example, userAge is 0, so ageDisplay
remains 0 instead of changing to 18.
*/



 // Challenge 7: typeof, instanceof and delete

console.log("\nChallenge 7: typeof, instanceof and delete");

// Part A: typeof

const studentName = "Gareth";
const studentAge = 28;
const studentSubjects = ["JavaScript", "HTML", "CSS"];

console.log("typeof studentName:", typeof studentName);
console.log("typeof studentAge:", typeof studentAge);
console.log("typeof studentSubjects:", typeof studentSubjects);

// Part B: instanceof

console.log("studentSubjects instanceof Array:", studentSubjects instanceof Array);
console.log("studentName instanceof String:", studentName instanceof String);

const currentDate = new Date();

console.log("currentDate instanceof Date:", currentDate instanceof Date);

// Part C: delete

const student = {
    name: "Gareth",
    age: 28,
    course: "JavaScript"
};

console.log("Before delete:", student);

delete student.course;

console.log("After delete:", student);
console.log("Course property exists:", "course" in student);

// Part D: Written explanation

/*
The typeof operator returns the type of a value. For example,
typeof "Gareth" returns "string", while typeof 28 returns "number".

The instanceof operator checks whether an object was created
from a particular constructor. For example, an array created
with [] is an instance of Array.

The delete operator removes a property from an object. In this
example, delete student.course removes the course property.
It does not delete the whole student object.
*/




 // Challenge 8: Bitwise Permission System

console.log("\nChallenge 8: Bitwise Permission System");

// Define the permissions
const READ = 1;        // 0001
const WRITE = 2;       // 0010
const DELETE = 4;      // 0100
const ADMIN = 8;       // 1000

// 1. Create a user with READ and WRITE permissions
let userPermissions = READ | WRITE;

console.log("User permissions:", userPermissions);

// 2. Create an admin user with all permissions
const adminPermissions = READ | WRITE | DELETE | ADMIN;

console.log("Admin permissions:", adminPermissions);

// 3. Check if the user has READ permission
console.log(
    "Has READ permission:",
    (userPermissions & READ) !== 0 ? "Yes" : "No"
);

// 4. Check if the user has DELETE permission
console.log(
    "Has DELETE permission:",
    (userPermissions & DELETE) !== 0 ? "Yes" : "No"
);

// 5. Grant DELETE permission
userPermissions |= DELETE;

console.log("After granting DELETE:", userPermissions);

// 6. Revoke WRITE permission
userPermissions &= ~WRITE;

console.log("After revoking WRITE:", userPermissions);

// 7. Toggle ADMIN permission on and off
userPermissions ^= ADMIN;
console.log("After toggling ADMIN on:", userPermissions);

userPermissions ^= ADMIN;
console.log("After toggling ADMIN off:", userPermissions);

// 8. Add SUPER_ADMIN using a left shift
const SUPER_ADMIN = 1 << 4;

console.log("SUPER_ADMIN permission:", SUPER_ADMIN);

// Interview answers

/*
1. Bitwise flags can use less memory than storing permission names
   in an array, and checking permissions can be quick and simple.

2. This approach becomes harder to manage when there are many
   permissions or when permissions need to be changed dynamically.
   An array or a dedicated permissions system may be easier to use.

3. & and | are bitwise operators that work with bits.
   && and || are logical operators that work with truthy and falsy
   values. Confusing them can produce incorrect permission checks.
*/



 // Challenge 9: Payroll and Banking Calculator

console.log("\nChallenge 9: Payroll and Banking Calculator");

// Scenario 1: Payroll processor

const payrollGrossSalary = 45000;
const payrollPaye = payrollGrossSalary * 0.25;
const payrollUif = Math.min(payrollGrossSalary * 0.01, 177.12);
const payrollMedicalAid = 2500;
const pension = payrollGrossSalary * 0.075;

const totalDeductions =
    payrollPaye + payrollUif + payrollMedicalAid + pension;

const payrollNetSalary = payrollGrossSalary - totalDeductions;

// Format amounts with commas and two decimal places
function formatRand(amount) {
    return "R " + amount.toLocaleString("en-ZA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

console.log("\nScenario 1: Payroll");
console.log("Gross salary:", formatRand(payrollGrossSalary));
console.log("PAYE:", formatRand(payrollPaye));
console.log("UIF:", formatRand(payrollUif));
console.log("Medical aid:", formatRand(payrollMedicalAid));
console.log("Pension:", formatRand(pension));
console.log("Total deductions:", formatRand(totalDeductions));
console.log("Net salary:", formatRand(payrollNetSalary));

// Simulate salary input from a form
const grossSalaryInput = "45000";
const convertedSalary = Number(grossSalaryInput);

if (!Number.isNaN(convertedSalary) && convertedSalary > 0) {
    console.log("Validated salary:", formatRand(convertedSalary));
} else {
    console.log("Invalid salary input");
}

// Scenario 2: Compound interest savings

const principal = 25000;
const annualRate = 0.075;
const compoundsPerYear = 12;
const years = 3;

const finalBalance = principal *
    (1 + annualRate / compoundsPerYear) **
    (compoundsPerYear * years);

const interestEarned = finalBalance - principal;

const effectiveAnnualRate =
    ((1 + annualRate / compoundsPerYear) ** compoundsPerYear - 1) * 100;

// Monthly fee based on account balance
function getMonthlyFee(balance) {
    return balance < 1000 ? 25
        : balance < 5000 ? 50
        : balance < 25000 ? 75
        : 0;
}

console.log("\nScenario 2: Compound Interest");
console.log("Starting deposit:", formatRand(principal));
console.log("Final balance:", formatRand(finalBalance));
console.log("Interest earned:", formatRand(interestEarned));
console.log("Effective annual rate:", effectiveAnnualRate.toFixed(2) + "%");

const testBalances = [500, 1500, 10000, 50000];

for (const balance of testBalances) {
    const monthlyFee = getMonthlyFee(balance);
    const annualFee = monthlyFee * 12;

    console.log("\nBalance:", formatRand(balance));
    console.log("Monthly fee:", formatRand(monthlyFee));
    console.log("Annual fee:", formatRand(annualFee));
}

// Scenario 3: Multi-currency transfer

const transferAmount = 15750.33;
const exchangeRate = 18.42;
const commissionRate = 0.025;

const commission = transferAmount * commissionRate;
const amountAfterCommission = transferAmount - commission;
const usdReceived = amountAfterCommission / exchangeRate;

console.log("\nScenario 3: Multi-Currency Transfer");
console.log("Original ZAR amount:", formatRand(transferAmount));
console.log("Commission:", formatRand(commission));
console.log("Amount after commission:", formatRand(amountAfterCommission));

console.log(
    "USD received: $" + usdReceived.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
);

// Floating-point precision explanation

/*
JavaScript numbers use floating-point arithmetic, so calculations
such as 0.1 + 0.2 can produce 0.30000000000000004 instead of
exactly 0.3.

I format currency to two decimal places when displaying the results.
For real banking systems, amounts are commonly stored as integer
minor units, such as cents, or handled using decimal arithmetic,
rather than relying on floating-point values for exact money amounts.
*/




 // Challenge 11: Bug Hunt

console.log("\nChallenge 11: Bug Hunt");

// Junior developer's cart script
// The bugs will be explained and corrected below.

var cartItem1Price = "199.99";
var cartItem2Price = "49.50";
var cartItem3Price = 125;
var cartQuantity = "2";
var cartDiscountCode = "SAVE10";
var cartIsLoggedIn = "true";
var cartCustomerAge = null;

var cartSubtotal =
    cartItem1Price + cartItem2Price + cartItem3Price * cartQuantity;

console.log("Subtotal:", cartSubtotal);

var cartDiscount = cartDiscountCode == "SAVE10" ? 0.1 : 0;

var cartDiscountAmount = cartSubtotal * cartDiscount;
var cartAfterDiscount = cartSubtotal - cartDiscountAmount;
var cartVat = cartAfterDiscount * 0.15;
var cartFinalCartTotal = cartAfterDiscount + cartVat;

var cartCanCheckout =
    cartIsLoggedIn && cartCustomerAge > 18;

console.log("Can checkout?", cartCanCheckout);

var cartSeniorDiscount =
    cartCustomerAge >= 60 ? cartFinalCartTotal * 0.05 : null;

var cartFinalTotal = cartFinalCartTotal - cartSeniorDiscount;

console.log("Total: R" + cartFinalTotal.toFixed(2));


 // Challenge 11: Bug explanations

/*
1. Faulty line: var cartItem1Price = "199.99";
   The price is stored as a string instead of a number, which can
   cause unexpected results when doing calculations.

2. Faulty line: var cartItem2Price = "49.50";
   This price is also a string and should be converted to a number
   before it is used in arithmetic.

3. Faulty line: var cartQuantity = "2";
   The quantity is stored as a string instead of a numeric value.

4. Faulty line: var cartIsLoggedIn = "true";
   The value is a non-empty string, not a boolean, so it is truthy
   even though it does not contain the boolean value true.

5. Faulty line: var cartCustomerAge = null;
   A null age means the age is unknown, but the script continues
   using it in comparisons and calculations.

6. Faulty line: var cartSubtotal =
       cartItem1Price + cartItem2Price + cartItem3Price * cartQuantity;
   The expression combines strings and numbers, so the addition
   can perform string concatenation instead of normal addition.

7. Faulty line: var cartDiscount = cartDiscountCode == "SAVE10" ? 0.1 : 0;
   Loose equality can convert values automatically; strict equality
   (===) is safer when checking the discount code.

8. Faulty line: var cartDiscountAmount = cartSubtotal * cartDiscount;
   If the subtotal is an incorrectly concatenated string, converting
   it during multiplication can produce an incorrect discount.

9. Faulty line: var cartCanCheckout =
       cartIsLoggedIn && cartCustomerAge > 18;
   The login check relies on a truthy string, and the age is unknown,
   so the script does not properly validate the customer's details.

10. Faulty line: var cartSeniorDiscount =
        cartCustomerAge >= 60 ? cartFinalCartTotal * 0.05 : null;
    The script uses an unknown age to decide whether the customer
    qualifies for a senior discount.

11. Faulty line: var cartFinalTotal =
        cartFinalCartTotal - cartSeniorDiscount;
    If the senior discount is null, subtraction automatically
    converts null to zero, hiding the missing-value problem.

12. Faulty line: console.log("Total: R" + cartFinalTotal.toFixed(2));
    Formatting the final value to two decimal places does not fix
    incorrect calculations that happened earlier.
*/






 // Corrected shopping-cart script

console.log("\nChallenge 11: Corrected Shopping Cart");

// Convert prices and quantity into numbers
const fixedCartItem1Price = Number("199.99");
const fixedCartItem2Price = Number("49.50");
const fixedCartItem3Price = 125;
const fixedCartQuantity = Number("2");

const fixedCartDiscountCode = "SAVE10";
const fixedCartIsLoggedIn = true;
const fixedCartCustomerAge = 30;

// Calculate the subtotal before applying discounts
const fixedCartSubtotal =
    (fixedCartItem1Price + fixedCartItem2Price + fixedCartItem3Price) *
    fixedCartQuantity;

console.log("Subtotal: R" + fixedCartSubtotal.toFixed(2));

// Check the discount code using strict equality
const fixedCartDiscount =
    fixedCartDiscountCode === "SAVE10" ? 0.10 : 0;

const fixedCartDiscountAmount =
    fixedCartSubtotal * fixedCartDiscount;

const fixedCartAfterDiscount =
    fixedCartSubtotal - fixedCartDiscountAmount;

const fixedCartVat = fixedCartAfterDiscount * 0.15;
const fixedCartTotal = fixedCartAfterDiscount + fixedCartVat;

// Check login and age using valid data
const fixedCartCanCheckout =
    fixedCartIsLoggedIn && fixedCartCustomerAge > 18;

console.log("Can checkout?", fixedCartCanCheckout);

// Apply a senior discount only when the age is known
const fixedCartSeniorDiscount =
    fixedCartCustomerAge !== null && fixedCartCustomerAge >= 60
        ? fixedCartTotal * 0.05
        : 0;

const fixedCartFinalTotal =
    fixedCartTotal - fixedCartSeniorDiscount;

console.log("Discount:", fixedCartDiscountAmount.toFixed(2));
console.log("VAT:", fixedCartVat.toFixed(2));
console.log("Senior discount:", fixedCartSeniorDiscount.toFixed(2));
console.log("Final total: R" + fixedCartFinalTotal.toFixed(2));



// Challenge 12: Self-Reflection

/*
1. The most important thing I learned is that JavaScript can
   automatically convert values between types. For example,
   adding strings can join them together instead of adding
   their numeric values. This showed me why I need to check
   data types before doing calculations.

2. Strict equality (===) is safer than loose equality (==)
   because it compares both the value and the type. For example,
   5 == "5" returns true, but 5 === "5" returns false. Using
   loose equality can make a condition pass when the types
   do not match.

3. I would use ?? when zero, false or an empty string are valid
   values and I only want a default for null or undefined.
   For example, 0 || 18 returns 18, but 0 ?? 18 returns 0.
   This matters when zero is a valid age, count or amount.

4. typeof null returns "object" because of a historical issue
   in JavaScript that was kept for compatibility. To check
   whether a value is specifically null, I would use
   value === null instead of relying on typeof.

5. Forgetting to convert a value could cause a problem when
   calculating a customer's shopping total. If a price comes
   from a form as a string, adding it to another string could
   join the values instead of adding the prices correctly.

6. JavaScript uses floating-point numbers, so 0.1 + 0.2 can
   produce 0.30000000000000004 instead of exactly 0.3.
   Formatting a number to two decimal places helps when
   displaying money, but does not fix every calculation.
   A real banking system can store amounts in integer cents
   or use decimal arithmetic to handle money accurately.

7. The operators & and | work on individual bits, while &&
   and || use truthy and falsy values for logical conditions.
   Confusing them in a permission check could give the wrong
   result and allow or deny access incorrectly.

8. The hardest concept for me was understanding type coercion
   and operator precedence together. Working through examples
   and checking the output helped me understand why JavaScript
   sometimes gives results that are different from what I
   first expected.
*/
