                                                                    // Comments in JavaScript

// Single Line Comments - This Line Is An example of Single Line Comments
/*
These Lines are the examples 
Of Multi Line Comments
*/

/*________________________________________________________________________________________________________________________________________________________________________ */
                                                                    // Variables and Declerations in JavaScript

// VAR - The var keyword declares a variable globally or locally to an entire function regardless of block scope(Means we can access it from anywhere).
// It Also Can be redeclared with different values, 

var a = 10;
var b = 20;
var sum = a+b;
console.log(sum); //NOTE - Reassignment and Recdecleration is possible with var

// LET - let is used to declare a block-scoped variable whose value can be changed later.

let name = "Vivek";
name = "Hello World!"
console.log(name); //NOTE - Reassignment is possible but Redecleration is not possible with let

// CONST - const is used to declare a block-scoped variable whose value cannot be reassigned.

const message = "This Value cannot be Changed";
message = "abcd";
console.log(message); // It Will Show An Error message regarding constant variable change.

/*
| Feature        | let      | const    |
| -------------- | -------- | -------- |
| Scope          | Block    | Block    |
| Update         | ✅ Yes    | ❌ No  |
| Re-declare     | ❌ No     | ❌ No  |
| Initialization | Optional | Required |
*/

/*________________________________________________________________________________________________________________________________________________________________________ */
                                                                    // Javascript Keywords
/*
JavaScript statements often start with a keyword to identify the JavaScript action to be performed.
In JavaScript you cannot use these reserved words as variables, labels, or function names:

abstract	arguments	async *	await *
boolean	break	byte	case
catch	char	class *	const *
continue	debugger	default	delete
do	double	else	enum *
eval	export *	extends *	false
final	finally	float	for
function	goto	if	implements
function	import *	in	instanceof
int	interface	let *	long
native	new	null	package
private	protected	public	return
short	static	super *	switch
synchronized	this	throw	throws
transient	true	try	typeof
using *	var	void	volatile
while	with	yield 
*/

/*________________________________________________________________________________________________________________________________________________________________________ */
                                                                    // DataTypes in Javascript
/*
A JavaScript variable can hold 8 types of data:


Type	Description
String	A text of characters enclosed in quotes
Number	A number representing a mathematical value
Bigint	A number representing a large integer
Boolean	A data type representing true or false
Object	A collection of key-value pairs of data
Undefined	A primitive variable with no assigned value
Null	A primitive value representing object absence
Symbol	A unique and primitive identifier
*/

// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

// Boolean
let x = true;
let y = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x;
let y;

// Null
let x = null;
let y = null;

// Symbol
const x = Symbol();
const y = Symbol();

/*___________________________________________________________________________________________________________________________________________________________________________ */
                                                                    // Operators in JavaScript
// Javascript Assignment Operators 

/*
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
*/
let a = 10;
let b = 3;

// Addition
console.log("Addition:", a + b);

// Subtraction
console.log("Subtraction:", a - b);

// Multiplication
console.log("Multiplication:", a * b);

// Division
console.log("Division:", a / b);

// Modulus (Remainder)
console.log("Modulus:", a % b);

// Exponentiation
console.log("Exponentiation:", a ** b);

// Increment (Post & Pre)
let x = 5;
console.log("Post Increment:", x++); // 5
console.log("After Post Increment:", x); // 6

let y = 5;
console.log("Pre Increment:", ++y); // 6

// Decrement (Post & Pre)
let m = 5;
console.log("Post Decrement:", m--); // 5
console.log("After Post Decrement:", m); // 4

let n = 5;
console.log("Pre Decrement:", --n); // 4

//----------------Javascript Assignment operators----------------------
/*
Assignment operators assign values to JavaScript variables.

Given that x = 10 and y = 5, the table below explains the assignment operators:

Operator	Example	Same As	Result
=	x = y	x = y	x = 5
+=	x += y	x = x + y	x = 15
-=	x -= y	x = x - y	x = 5
*=	x *= y	x = x * y	x = 50
**=	x **= y	x = x ** y	x = 100000
/=	x /= y	x = x / y	x = 2
%=	x %= y	x = x % y	x = 0
:	x: 45	size.x = 45	x = 45
*/

let x = 10;

console.log("Initial:", x);

x += 5;
console.log("After += :", x);

x -= 3;
console.log("After -= :", x);

x *= 2;
console.log("After *= :", x);

x /= 4;
console.log("After /= :", x);

x %= 3;
console.log("After %= :", x);

x **= 2;
console.log("After **= :", x);

// Comparison Operators in Javascript

/*
Comparison operators are used to compare two values.

Comparison operators always return true or false.

Given that x = 5, the table below explains the comparison operators:

Operator	Description	Comparing	Returns	
==	equal to	x == 8	false	
x == 5	true	
x == "5"	true	
===	equal value and equal type	x === 5	true	
x === "5"	false	
!=	not equal	x != 8	true	
!==	not equal value or not equal type	x !== 5	false	
x !== "5"	true	
x !== 8	true	
>	greater than	x > 8	false	
<	less than	x < 8	true	
>=	greater than or equal to	x >= 8	false	
<=	less than or equal to	x <= 8	true
*/
let a = 10;
let b = 5;

console.log("== :", a == b);
console.log("=== :", a === b);
console.log("!= :", a != b);
console.log("!== :", a !== b);
console.log("> :", a > b);
console.log("< :", a < b);
console.log(">= :", a >= b);
console.log("<= :", a <= b);

/*
----------------------------JavaScript Typeof() Operator-------------------------
You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:
*/

typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

// --------------------------TERNARY OPERATOR-------------------------------------
/*
The ternary operator is a short-hand way of writing if...else in a single line.
It evaluates a condition and returns one of two values.

SYNTAX-
let result = (condition) ? "True Value" : "False Value";
*/
// Basic Example
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log("Age Check:", result);

// Even/Odd Check
let num = 7;
let check = (num % 2 === 0) ? "Even" : "Odd";
console.log("Number:", check);

// Default Value
let username = "";
let name = username ? username : "Guest";
console.log("Name:", name);

// Login Message
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome" : "Please Login";
console.log("Message:", message);

// Nested Ternary
let marks = 85;
let grade = (marks >= 90) ? "A" :
            (marks >= 60) ? "B" : "C";

console.log("Grade:", grade);

//---------------------LOGICAL OPERATORS------------------------------
/*
Logical operators are used to combine boolean expressions.
Logical operators can be used to modify the results of comparisons.
Typically, you will use a comparison operator to check a condition, and a logical operator to combine conditions into more complex logic.

Logical operators are used to determine the logic between variables or values.

Given that x = 6 and y = 3, the table below explains the logical operators:

Oper	Name	Example	
&&	    AND	    (x < 10 && y > 1) is true	
||	    OR	    (x === 5 || y === 5) is false	
!	    NOT	    !(x === y) is true
*/
// 🔹 AND (&&)
console.log("---- AND ----");
console.log(true && true);   // true
console.log(true && false);  // false
console.log(5 && 10);        // 10
console.log(0 && 10);        // 0

// 🔹 OR (||)
console.log("---- OR ----");
console.log(true || false);  // true
console.log(false || false); // false
console.log(0 || 10);        // 10
console.log("" || "Hello");  // Hello

// 🔹 NOT (!)
console.log("---- NOT ----");
console.log(!true);          // false
console.log(!false);         // true
console.log(!"hello");       // false

// 🔹 Real Example
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Access Granted");
}

// Default value example
let username = "";
let name = username || "Guest";
console.log("Name:", name);

// Toggle example
let isOn = true;
isOn = !isOn;
console.log("Toggled:", isOn);

/*________________________________________________________________________________________________________________________________________________________________________*/
                                                                    // Conditional Statements in Javascript
/*
Conditional Statements allow us to perform different actions for different conditions.

Conditional statements run different code depending on true or false conditions.

Conditional statements include:

if
if...else
if...else if...else
switch
ternary (? :)

When to use Conditionals:

1. Use if to specify a code block to be executed, if a specified condition is true
2. Use else to specify a code block to be executed, if the same condition is false
3. Use else if to specify a new condition to test, if the first condition is false
4. Use switch to specify many alternative code blocks to be executed
5. Use (? :) (ternary) as a shorthand for if...else
*/

let age = 20;
let marks = 75;
let day = 2;
let isLoggedIn = true;

//  1. if Statement
if (age > 18) {
    console.log("if: Age is greater than 18");
}

//  2. if...else
if (age >= 18) {
    console.log("if-else: Adult");
} else {
    console.log("if-else: Minor");
}

//  3. if...else if...else
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

//  4. Nested if
if (age >= 18) {
    if (isLoggedIn) {
        console.log("Nested if: Access granted");
    }
}

//  5. Ternary Operator
let result = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary:", result);

//  6. switch Statement
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
/*________________________________________________________________________________________________________________________________________________________________________*/
                                                                    // Type Coercion and Truly VS Falsy Values in JavaScript
/*
Type Coercion is the automatic or implicit conversion of one data type into another by JavaScript during operations.

JavaScript is dynamically typed, so it converts types when needed.
*/
console.log(5 + "5"); // "55"
//Number 5 is converted to string → concatenation happens

//-----------TYPES OF COERCIONS-------------

//  Implicit Coercion Examples

console.log("---- Implicit Coercion ----");

// Addition (String + Number)
console.log("5" + 2); // "52"

// Subtraction (String -> Number)
console.log("5" - 2); // 3

// Multiplication
console.log("5" * 2); // 10

// Division
console.log("10" / 2); // 5

// Boolean conversion
console.log(true + 1);  // 2
console.log(false + 1); // 1

// Equality check (type coercion)
console.log(5 == "5");  // true
console.log(0 == false); // true

//  Explicit Coercion Examples

console.log("---- Explicit Coercion ----");

// String to Number
let str = "100";
let num = Number(str);
console.log(num); // 100

// Number to String
let n = 50;
let s = String(n);
console.log(s); // "50"

// To Boolean
console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false

//  Special Cases

console.log("---- Special Cases ----");

// null vs undefined
console.log(null == undefined);  // true
console.log(null === undefined); // false

// Empty string
console.log("" == 0); // true

// Weird case
console.log([] + {}); // "[object Object]"

//-----------TRUTHY VS FALSY VALUES-----------

/*
In JavaScript, every value is treated as either:

Truthy  → behaves like true in conditions
Falsy  → behaves like false in conditions

Used mainly in:

1. if conditions
2. loops
3. logical operations
*/
//  Falsy Values
console.log("---- Falsy Values ----");

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

//  Truthy Values
console.log("---- Truthy Values ----");

console.log(Boolean(true));      // true
console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
console.log(Boolean("0"));       // true

//  Using in Conditions
console.log("---- Conditions ----");

let value = "";

if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // runs
}

//  Default Value Example
let userInput = "";
let name = userInput || "Guest";
console.log("Name:", name); // Guest

//  Logical AND Example
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("Admin Access");
} else {
    console.log("Access Denied");
}
/*________________________________________________________________________________________________________________________________________________________________________*/
                                                                    // If - Else Conditional Statements
// if...else is used to execute one block of code when a condition is true and another when it is false.
/*
if (condition) {
    // runs if condition is true
} else {
    // runs if condition is false
}
*/

let age = 18;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//-------------------Nested if-----------------------------
// You can use an if statement inside another if statement:
let age = 16;
let country = "USA";
let text = "You can Not drive!";

if (country == "USA") {
  if (age >= 16) {
    text = "You can drive!";
  }
}
/*________________________________________________________________________________________________________________________________________________________________________*/
                                                                    // Switch-Case Statements
/*
Based on a condition, switch selects one or more code blocks to be executed.
switch executes the code blocks that matches an expression.
switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.

SYNTAX:
switch (expression) {
    case value1:
        // code block
        break;

    case value2:
        // code block
        break;

    default:
        // default code
}
*/ 
// Day Example
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}

// Role Example
let role = "admin";

switch (role) {
    case "admin":
        console.log("Full Access");
        break;
    case "user":
        console.log("Limited Access");
        break;
    default:
        console.log("Guest Access");
}

// Weekend Example (Multiple Cases)
let d = 7;

switch (d) {
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Weekday");
}

// Fall-through Example
let x = 1;

switch (x) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
}
/*________________________________________________________________________________________________________________________________________________________________________ */
                                                                    // LOOPS IN JavaScript
//-------------------------------FOR LOOP--------------------------------
/*
The for statement creates a loop with 3 optional expressions:

SYNTAX:

for (exp 1; exp 2; exp 3) {
  // code block to be executed
}
exp 1 is executed (one time) before the execution of the code block.
exp 2 defines the condition for executing the code block.
exp 3 is executed (every time) after the code block has been executed.
*/
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

// Basic loop
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// Sum calculation
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum:", sum);

// Array traversal
let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
    console.log("Array:", arr[i]);
}

// Reverse loop
for (let i = 5; i >= 1; i--) {
    console.log("Reverse:", i);
}

// Break example
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log("Break:", i);
}

// Continue example
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log("Continue:", i);
}

// Nested loop
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log("Nested:", i, j);
    }
}

// -------------------------------WHILE LOOP AND DO-WHILE LOOP---------------------------
/*
While loops execute a block of code as long as a specified condition is true.
JavaScript have two types of while loops:

1. The while loop
2. The do while loop

*/

// ---------------WHILE LOOPS-------------------
// The while loop loops through a block of code as long as a specified condition is true.
// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
/*
SYNTAX:

while (condition) {
    // code to run
}

do {
    // code to run
} while (condition);
*/

//  while loop
let i = 1;

while (i <= 5) {
    console.log("While:", i);
    i++;
}

//  do...while loop
let j = 1;

do {
    console.log("Do While:", j);
    j++;
} while (j <= 5);

//  Countdown using while
let count = 5;

while (count > 0) {
    console.log("Countdown:", count);
    count--;
}

//  break example
let x = 1;

while (x <= 5) {
    if (x === 3) break;
    console.log("Break:", x);
    x++;
}

//  continue example
let y = 0;

while (y < 5) {
    y++;
    if (y === 3) continue;
    console.log("Continue:", y);
}

//  do...while runs at least once
let z = 10;

do {
    console.log("Runs once even if condition false:", z);
} while (z < 5);

/*________________________________________________________________________________________________________________________________________________________________________*/
                                                                        // BREAK-CONTINUE Statements
/*
BREAK STATEMENTS

The break statement is used to immediately terminate (stop) a loop or switch statement.
Loop ends instantly when break is encountered

CONTINUE STATEMENTS

The continue statement is used to skip the current iteration and move to the next iteration of the loop.
Loop continues, but skips one step
*/
//  break example
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log("Break:", i);
}

//  continue example
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log("Continue:", i);
}

//  Odd numbers using continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log("Odd:", i);
}

//  Search using break
let arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 30) {
        console.log("Found 30");
        break;
    }
}

//  break in while loop
let x = 1;

while (x <= 5) {
    if (x === 4) break;
    console.log("While Break:", x);
    x++;
}

/*________________________________________________________________________________________________________________________________________________________________________ */
                                                                // STRING - METHODS, Search & TEMPLATES in JavaScript
/*
A string is a sequence of characters used to represent text.

Strings are written inside:

"double quotes"
'single quotes'
`backticks` (template literals)
*/
let name = "Vivek";
let city = 'Delhi';
let msg = `Hello`;

// ------------------------String Templates-----------------------------

/*
Template strings (also called template literals) are a modern way to work with strings in JavaScript using backticks:

They allow:

Variable interpolation
Multi-line strings
Embedded expressions

| Feature     | Normal Strings | Template Strings |
| ----------- | -------------- | ---------------- |
| Quotes      | ' or "         | ` (backticks)    |
| Multi-line  | No             | Yes              |
| Variables   | No             | Yes (`${}`)      |
| Readability | Medium         | High             |

*/
// Declaration
let name = "Vivek";
let msg = `Hello ${name}`;

// Length
console.log(name.length);

// Case conversion
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// Trim
let str = "  hello  ";
console.log(str.trim());

// Slice
console.log(name.slice(0, 3));

// Replace
console.log(name.replace("V", "R"));

// Includes
console.log(name.includes("vi"));

// IndexOf
console.log(name.indexOf("e"));

// Split
let data = "a,b,c";
console.log(data.split(","));

// Concatenation
console.log("Hello " + "World");
console.log(`Hi ${name}`);

// Escape
let quote = "He said \"Hi\"";
console.log(quote);

// -----------------------------------STRING METHODS---------------------------
/*
String methods are built-in functions used to perform operations on strings like: searching,modifying, extracting ,formatting 

Strings are immutable → methods return a new string, original stays unchanged.
*/
let str = "  Hello World  ";

// Trim
console.log(str.trim());

// Upper & Lower
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Slice & Substring
console.log(str.slice(2, 7));
console.log(str.substring(2, 7));

// Replace
console.log(str.replace("Hello", "Hi"));

// Includes
console.log(str.includes("World"));

// IndexOf
console.log(str.indexOf("o"));

// Split
let data = "a,b,c";
console.log(data.split(","));

// CharAt
console.log(str.charAt(1));

// Concat
console.log("Hello".concat(" JS"));

// Declaration
let name = "Vivek";
let msg = `Hello ${name}`;

// Length
console.log(name.length);

// Case conversion
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// --------------------------------String SEARCH METHODS--------------------------
/*
String search methods are used to find characters, words, or patterns inside a string.

They help in: Searching, Matching patterns ,Finding positions
*/
let str = "Hello World";

// indexOf
console.log("indexOf:", str.indexOf("o"));

// lastIndexOf
console.log("lastIndexOf:", str.lastIndexOf("o"));

// includes
console.log("includes:", str.includes("World"));

// startsWith
console.log("startsWith:", str.startsWith("He"));

// endsWith
console.log("endsWith:", str.endsWith("ld"));

// search
console.log("search:", str.search("World"));

// match
let text = "abc123xyz";
console.log("match:", text.match(/[0-9]+/));

// matchAll
let str2 = "a1b2c3";
let matches = str2.matchAll(/[0-9]/g);

for (let m of matches) {
    console.log("matchAll:", m[0]);
}

//----------------------------------String Wrapper Methods-----------------------------------
/*
These methods were used to format strings as HTML elements directly from JavaScript.

They return a new string containing HTML tags
*/
let text = "Hello";

// Anchor
console.log(text.anchor("link1"));

// Big
console.log(text.big());

// Blink (deprecated)
console.log(text.blink());

// Bold
console.log(text.bold());

// Fixed
console.log(text.fixed());

// Font color
console.log(text.fontcolor("red"));

// Font size
console.log(text.fontsize(5));

// Italics
console.log(text.italics());

// Link
console.log(text.link("https://example.com"));

// Small
console.log(text.small());

// Strike
console.log(text.strike());

// Subscript
console.log(text.sub());

// Superscript
console.log(text.sup());

//____________________________________________________________________________________________________________________________________________________________________________
                                                                // NUMBERS METHODS, PROPERTIES, AND REFERENCES IN JAVASCRIPT 
/*
In JavaScript, numbers represent both:

Integers (e.g., 10)
Floating-point values (e.g., 10.5)

JavaScript has only one number type:
Number (64-bit floating point – IEEE 754)
*/
// Basic numbers
let a = 10;
let b = 10.5;

// Exponential
let c = 1e3;

// Special values
console.log(10 / 0);     // Infinity
console.log("abc" * 2);  // NaN

// Methods
let num = 10.567;
console.log(num.toString());
console.log(num.toFixed(2));
console.log(num.toPrecision(3));
console.log(num.valueOf());

// Global methods
console.log(Number("50"));
console.log(parseInt("20.5"));
console.log(parseFloat("20.5"));
console.log(isNaN("abc"));

// Precision issue
console.log(0.1 + 0.2);

// Type check
console.log(typeof num);
console.log(typeof NaN);

//-------------------------------------Numbers Methods---------------------------------------
/*
Number methods are built-in functions used to format, convert, and manipulate numeric values.
These methods are applied on number variables

Basic Number Methods --

toString() → Converts a number into a string
toFixed(n) → Rounds the number to n decimal places and returns a string
toPrecision(n) → Formats the number to n total significant digits
valueOf() → Returns the primitive numeric value

Global Number Methods --

Number() → Converts a value into a number
parseInt() → Converts a string to an integer by extracting numeric part
parseFloat() → Converts a string to a floating-point number
isNaN() → Checks whether a value is Not-a-Number
isFinite() → Checks whether a value is a finite number

Number Properties (Bonus) --

Number.MAX_VALUE → Largest possible number in JavaScript
Number.MIN_VALUE → Smallest positive number in JavaScript
Number.POSITIVE_INFINITY → Represents positive infinity
Number.NEGATIVE_INFINITY → Represents negative infinity
Number.NaN → Represents an invalid number
*/
let num = 10.567;

// Basic methods
console.log("toString:", num.toString());
console.log("toFixed:", num.toFixed(2));
console.log("toPrecision:", num.toPrecision(3));
console.log("valueOf:", num.valueOf());

// Global methods
console.log("Number:", Number("50"));
console.log("parseInt:", parseInt("20.9"));
console.log("parseFloat:", parseFloat("20.9"));
console.log("isNaN:", isNaN("abc"));
console.log("isFinite:", isFinite(100));

// Properties
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);

// Use case
let price = 99.999;
console.log("Formatted Price:", price.toFixed(2));

//--------------------------------------Number Properties in Javascript-------------------------------
// Number properties are predefined constants provided by JavaScript’s Number object that give information about numeric limits and special values.
/*
Number.MAX_VALUE → Represents the largest possible number in JavaScript
Number.MIN_VALUE → Represents the smallest positive number (closest to 0)
Number.POSITIVE_INFINITY → Represents positive infinity (value greater than any number)
Number.NEGATIVE_INFINITY → Represents negative infinity (value smaller than any number)
Number.NaN → Represents a value that is Not-a-Number (invalid numeric result)
Number.EPSILON → Represents the smallest difference between two representable numbers
Number.MAX_SAFE_INTEGER → Represents the largest integer that can be safely represented (2⁵³ − 1)
Number.MIN_SAFE_INTEGER → Represents the smallest integer that can be safely represented (−(2⁵³ − 1))
*/
// Max & Min values
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);

// Infinity
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);

// NaN
console.log("NaN:", Number.NaN);

// EPSILON
console.log("EPSILON:", Number.EPSILON);

// Safe Integers
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);

// Example usage
let num = Number.MAX_SAFE_INTEGER + 1;
console.log("Unsafe Number:", num);

//---------------------------------------NUMBER REFERENCES IN JAVASCRIPT-------------------------------------
/*
The JavaScript Number Reference is a complete guide to how numbers work in JavaScript, including:

Number type
Number methods
Number properties
Special numeric values

JavaScript uses one number type:
64-bit floating-point (IEEE 754)

1. Number Basics
Number → The built-in JavaScript data type used to represent both integers and floating-point values
Numeric Literal → A direct number value written in code (e.g., 10, 5.5)
Number() → Converts a given value into a number
new Number() → Creates a Number object (not recommended due to object behavior)

2. Number Types
Integer → A whole number without decimals
Float → A number with decimal values
Exponential → A number written using scientific notation (e.g., 1e3)
Infinity → A value greater than any finite number
-Infinity → A value smaller than any finite number
NaN → A value representing an invalid or undefined numeric result

3. Number Methods
toString() → Converts a number into a string
toFixed(n) → Rounds the number to n decimal places and returns a string
toPrecision(n) → Formats the number to n significant digits
valueOf() → Returns the primitive numeric value of a Number object

4. Global Number Functions
Number() → Converts a value into a numeric type
parseInt() → Extracts and returns the integer part of a string
parseFloat() → Extracts and returns the decimal number from a string
isNaN() → Checks whether a value is not a valid number
isFinite() → Checks whether a value is a finite number

5. Number Properties
Number.MAX_VALUE → The largest representable number in JavaScript
Number.MIN_VALUE → The smallest positive number greater than zero
Number.POSITIVE_INFINITY → Represents positive infinity
Number.NEGATIVE_INFINITY → Represents negative infinity
Number.NaN → Represents a Not-a-Number value
Number.EPSILON → The smallest difference between two representable numbers
Number.MAX_SAFE_INTEGER → The largest safe integer (2⁵³ − 1)
Number.MIN_SAFE_INTEGER → The smallest safe integer (−(2⁵³ − 1))
*/

// 1. Number Creation
let intNum = 10;
let floatNum = 10.75;
let expNum = 1e3; // 1000

console.log("Integer:", intNum);
console.log("Float:", floatNum);
console.log("Exponential:", expNum);

// 2. Using Number()
let convertedNum = Number("100");
console.log("Converted Number:", convertedNum);

// Avoid using new Number()
let objNum = new Number(50);
console.log("Object Number:", objNum);

// 3. Special Values
console.log("Infinity:", 10 / 0);
console.log("NaN:", "abc" * 2);

// 4. Number Methods
let num = 10.567;

console.log("toString:", num.toString());
console.log("toFixed(2):", num.toFixed(2));
console.log("toPrecision(3):", num.toPrecision(3));
console.log("valueOf:", num.valueOf());

// 5. Global Functions
console.log("Number():", Number("25"));
console.log("parseInt():", parseInt("20.9"));
console.log("parseFloat():", parseFloat("20.9"));
console.log("isNaN():", isNaN("hello"));
console.log("isFinite():", isFinite(100));

// 6. Number Properties
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("NaN Property:", Number.NaN);
console.log("EPSILON:", Number.EPSILON);
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);

// 7. Important Concepts

// ✔ Floating Point Precision Issue
console.log("0.1 + 0.2 =", 0.1 + 0.2);

// ✔ Fix using EPSILON
let sum = 0.1 + 0.2;
console.log("Fixed Precision:", Math.abs(sum - 0.3) < Number.EPSILON);

// ✔ Type Checking
console.log("Type of num:", typeof num);
console.log("Type of NaN:", typeof NaN);

// ✔ Type Coercion
console.log('"5" + 5 =', "5" + 5); // string concatenation
console.log('"5" - 2 =', "5" - 2); // number conversion

// 8. Safe Integer Check
let bigNum = Number.MAX_SAFE_INTEGER + 1;
console.log("Unsafe Integer:", bigNum);

// 9. Real Use Case Example
let price = 99.999;
console.log("Formatted Price:", price.toFixed(2));

// 10. Validation Example
let userInput = "123abc";
let parsed = parseInt(userInput);

if (!isNaN(parsed)) {
    console.log("Valid Number:", parsed);
} else {
    console.log("Invalid Number");
}

//___________________________________________________________________________________________________________________________________________________________________________
                                                            // FUNCTIONS IN JAVASCRIPTS 
/*
A function is a reusable block of code designed to perform a specific task.

It helps in:
Code reusability
Modular programming
Better organization

SYNTAX:
function functionName(parameters) {
    // code
    return value; // optional
}

Functions are defined with the function keyword:
    1.followed by the function name
    2.followed by parentheses ( )
    3.followed by brackets { }
The function name follows the naming rules for variables.

Optional parameters are listed inside parentheses: ( p1, p2, ... )
Code to be executed is listed inside curly brackets: { }
Functions can return an optional value back to the caller.
*/

//--------------------Types of Functions-----------------------
// Function Declaration
function sayHi() {
    console.log("Hi");
}

// Function Expression
let greet = function() {
    console.log("Hello");
};

// Arrow Function (ES6)
const add = (a, b) => a + b;

// Anonymous Function
setTimeout(function() {
    console.log("Run after delay");
}, 1000);

// IIFE (Immediately Invoked Function)
(function() {
    console.log("IIFE executed");
})();

//------------------------SAMPLE IMPLEMENTATIONS-----------------------
// Function declaration
function greet(name = "Guest") {
    return "Hello " + name;
}
console.log(greet("Vivek"));
console.log(greet());

// Function expression
let add = function(a, b) {
    return a + b;
};
console.log(add(2, 3));

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// Rest parameters
function sum(...nums) {
    return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4));

// IIFE
(function() {
    console.log("IIFE executed");
})();

// Scope
let globalVar = "Global";
function test() {
    let localVar = "Local";
    console.log(globalVar);
}
test();

// Hoisting
sayHi();
function sayHi() {
    console.log("Hoisted Function");
}

//-------------------------FUNCTION INVOCATIONS IN JAVASCRIPT-----------------------------
/*
The code inside a function is NOT executed when the function is defined.

The code inside a function will execute when "something" invokes the function:

When it is called from JavaScript code
When an event occurs (a user clicks a button)
Automatically (self invoked)
It is common to use the term invoke, because a function can be invoked without being called.

It is also common to use say:

call a function
call upon a function
start a function
execute a function
Examples
The function below returns the text "Hello World".

But it will not run before you call it.
*/
//Example
function sayHello() {
  return "Hello World";
}
/*
| Invocation Type | `this` refers to         |
| --------------- | ------------------------ |
| Normal          | Global object (`window`) |
| Method          | Object itself            |
| Constructor     | New object               |
| call/apply      | Provided object          |
*/

// Normal invocation
function greet(name) {
    console.log("Hello " + name);
}
greet("Vivek");

// Method invocation
let obj = {
    name: "Vivek",
    greet: function() {
        console.log("Hi " + this.name);
    }
};
obj.greet();

// Constructor invocation
function Person(name) {
    this.name = name;
}
let p = new Person("Rahul");
console.log(p.name);

// call, apply, bind
function intro(city) {
    console.log(this.name + " from " + city);
}

let user = { name: "Amit" };

intro.call(user, "Delhi");
intro.apply(user, ["Mumbai"]);

let boundFunc = intro.bind(user);
boundFunc("Pune");

// IIFE
(function() {
    console.log("IIFE executed");
})();

//-------------------------------------FUNCTIONS PARAMETERS IN JAVASCRIPT-------------------------
/*
Function parameters are variables listed in the function definition that receive values (arguments) when the function is invoked.

1. Parameter → variable in function definition
2. Argument → actual value passed during function call

Parameters vs. Arguments--
In JavaScript, function parameters and arguments are distinct concepts:
    Parameters are the names listed in the function definition.
    Arguments are the real values passed to, and received by the function.
*/
// Basic parameters
function greet(name) {
    console.log("Hello " + name);
}
greet("Vivek");

// Default parameter
function greetUser(name = "Guest") {
    console.log("Hello " + name);
}
greetUser();

// Rest parameter
function sum(...nums) {
    return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));

// Destructuring
function user({name, age}) {
    console.log(name, age);
}
user({name: "Vivek", age: 20});

// Arguments object
function show() {
    console.log(arguments);
}
show(10, 20, 30);

// Pass by value
function change(x) {
    x = 100;
}
let a = 10;
change(a);
console.log(a);

// Pass by reference
function modify(obj) {
    obj.value = 200;
}
let data = { value: 50 };
modify(data);
console.log(data);

//------------------------------------RETURN FUNCTION IN Javascript-------------------------
// Basic return
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// Return different types
function data() {
    return { name: "Vivek", age: 20 };
}
console.log(data());

// Early return
function check(age) {
    if (age < 18) return "Not Allowed";
    return "Allowed";
}
console.log(check(20));

// Return array
function getValues() {
    return [10, 20, 30];
}
console.log(getValues());

// Boolean return
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4));

// Return undefined
function test() {
    return;
}
console.log(test());

// Stop execution
function demo() {
    console.log("Start");
    return;
    console.log("End"); // won't run
}
demo();

//--------------------------------------FUNCTION ARGUMENTS IN JAVASCRIPT--------------------------
/*
# The Arguments Object
JavaScript functions have a built-in object called the arguments object.

The argument object contains an array of the arguments used when the function was called (invoked).

| Feature  | Parameters          | Arguments     |
| -------- | ------------------- | ------------- |
| Location | Function definition | Function call |
| Role     | Variables           | Values        |

This way you can simply use a function to find (for instance) the highest value in a list of numbers:
Example
*/
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
/*
# Default Parameters
If a function is called with missing arguments (less than declared), the missing values are set to undefined.

Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:

Example
*/
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
}

// Required arguments
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// Missing argument
function greet(name) {
    console.log("Hello", name);
}
greet();

// Default argument
function greetUser(name = "Guest") {
    console.log("Hello", name);
}
greetUser();

// Extra arguments
function show(a, b) {
    console.log(a, b);
}
show(1, 2, 3, 4);

// Arguments object
function test() {
    console.log(arguments);
}
test(10, 20, 30);

// Rest arguments
function sum(...nums) {
    return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4));

// Arrow function (no arguments object)
const arrow = (...args) => {
    console.log(args);
};
arrow(5, 6, 7);

//________________________________________________________________________________________________________________________________________________________________________
                                                                // JAVASCRIPT ARRAYS - METHODS, SEARCH, SORT, ITERATIONS, REFERENCES, CONSTANTS
/*
An array is a special variable, which can hold more than one value.
It is an ordered list of values that you can refer to with a name and an index.

Key Characteristics:
- Arrays are zero-indexed (first element is at 0).
- They can hold different data types (strings, numbers, objects, etc.).
- They are dynamic in size.
- typeof returns "object".
*/

// Array Declaration
let fruits = ["Apple", "Banana", "Mango"];
let numbers = new Array(1, 2, 3, 4); // Alternative way

// Accessing Elements
console.log(fruits[0]); // Apple
fruits[1] = "Orange"; // Modifying

// Array Properties
console.log("Length:", fruits.length);
console.log("IsArray:", Array.isArray(fruits));

//--------------------BASIC ARRAY METHODS-----------------------
/*
Methods to add/remove and modify array elements.
*/
let colors = ["Red", "Green", "Blue"];

// push() -> Add to end
colors.push("Yellow"); 

// pop() -> Remove from end
colors.pop(); 

// unshift() -> Add to start
colors.unshift("Purple");

// shift() -> Remove from start
colors.shift();

// splice() -> Add/Remove at specific index
// splice(index, count, item1, item2...)
colors.splice(1, 1, "Pink", "White"); 

// slice() -> Extract a portion (returns new array)
let part = colors.slice(1, 3);

// concat() -> Merge arrays
let moreColors = ["Grey", "Black"];
let allColors = colors.concat(moreColors);

// join() -> Convert to string with separator
console.log(colors.join(" - "));

//--------------------ARRAY SEARCH METHODS-----------------------
/*
Used to find elements or their positions in an array.
*/
let arr = ["A", "B", "C", "D", "B"];

// indexOf() -> First occurrence
console.log("indexOf B:", arr.indexOf("B"));

// lastIndexOf() -> Last occurrence
console.log("lastIndexOf B:", arr.lastIndexOf("B"));

// includes() -> Check if exists (true/false)
console.log("Includes C:", arr.includes("C"));

// find() -> Returns first element matching condition
let found = [10, 20, 30].find(n => n > 15);

// findIndex() -> Returns index of first match
let foundIdx = [10, 20, 30].findIndex(n => n > 15);

//--------------------ARRAY SORT METHODS-----------------------
/*
Used to reorder elements.
*/
let unsorted = [40, 100, 1, 5, 25];

// sort() -> Sorts as strings by default
console.log("Default Sort:", unsorted.sort()); 

// Numeric Sort (Compare Function)
unsorted.sort((a, b) => a - b);
console.log("Numeric Sort:", unsorted);

// reverse() -> Reverses order
unsorted.reverse();

// toSorted() / toReversed() (ES2023) -> Returns new array without mutating original
let newSorted = unsorted.toSorted();

//--------------------ARRAY ITERATION METHODS-----------------------
/*
Methods to loop through arrays and perform operations.
*/
let myNums = [1, 2, 3, 4, 5];

// forEach() -> Just loops
myNums.forEach(num => console.log(num));

// map() -> Creates new array by transforming each element
let doubled = myNums.map(n => n * 2);

// filter() -> Creates new array with elements that pass test
let evens = myNums.filter(n => n % 2 === 0);

// reduce() -> Reduces array to a single value
let total = myNums.reduce((sum, n) => sum + n, 0);

// every() -> Checks if ALL elements pass test
console.log("All > 0:", myNums.every(n => n > 0));

// some() -> Checks if AT LEAST ONE element passes test
console.log("Any > 4:", myNums.some(n => n > 4));

//--------------------ARRAY CONSTANTS & REFERENCES-----------------------
/*
Understanding how arrays behave as objects and when using const.
*/

// const Arrays -> Cannot reassign the variable, but can modify content
const constantArr = [1, 2, 3];
constantArr.push(4); // OK
// constantArr = [5, 6]; // Error!

// Spread Operator (...) -> Useful for copying and merging
let copy = [...constantArr];
let merged = [...fruits, ...colors];

// Destructuring
let [first, second] = fruits;
console.log(first, second); // Apple Orange

// Multidimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(matrix[0][1]); // 2

//________________________________________________________________________________________________________________________________________________________________________
                                                                    // JAVASCRIPT MAPS - METHODS, PROPERTIES, AND ITERATION
/*
A Map is a collection of key-value pairs where keys can be of ANY data type (objects, functions, primitives).
Unlike Objects, Maps maintain the insertion order of elements.

Key Features:
- Remembers insertion order.
- Keys can be any value (even objects).
- size property gives the number of elements.
- Directly iterable.
*/

// Map Declaration
let myMap = new Map();

// Adding Elements (set)
myMap.set("name", "Vivek");
myMap.set(1, "Numeric Key");
myMap.set(true, "Boolean Key");

// Accessing Elements (get)
console.log(myMap.get("name")); // Vivek
console.log(myMap.get(1)); // Numeric Key

// Map Properties
console.log("Size:", myMap.size);

// Checking existence (has)
console.log("Has age?:", myMap.has("age")); // false

// Removing Elements (delete)
myMap.delete(1);

// Clearing Map
// myMap.clear();

//--------------------MAP ITERATION-----------------------
/*
Ways to loop through a Map.
*/
let userMap = new Map([
    ["id", 101],
    ["role", "Admin"],
    ["status", "Active"]
]);

// for...of loop
for (let [key, value] of userMap) {
    console.log(`${key}: ${value}`);
}

// forEach()
userMap.forEach((value, key) => {
    console.log(key, value);
});

// Keys and Values
console.log(userMap.keys());
console.log(userMap.values());

//--------------------OBJECT vs MAP SUMMARY-----------------------
/*
| Feature      | Object                     | Map                         |
| ------------ | -------------------------- | --------------------------- |
| Key Types    | Strings and Symbols only   | Any value (Object, Function)|
| Size         | Manual calculation         | `.size` property            |
| Iteration    | Not directly iterable      | Directly iterable           |
| Order        | Not guaranteed (usually)   | Insertion order guaranteed  |
| Performance  | Better for small structures| Better for frequent add/del |
*/

//________________________________________________________________________________________________________________________________________________________________________
                                                                    // JAVASCRIPT SETS - METHODS, PROPERTIES, AND OPERATIONS
/*
A Set is a collection of UNIQUE values. Each value can occur only once in a Set.
Sets are useful for storing collections where duplicates are not allowed.

Key Features:
- No duplicate values.
- Values can be of any type.
- Elements are ordered by insertion.
*/

// Set Declaration
let mySet = new Set([1, 2, 3, 3, 4]); // Duplicate 3 is ignored
console.log(mySet); // Set { 1, 2, 3, 4 }

// Adding Elements (add)
mySet.add(5);
mySet.add("Hello");

// Checking existence (has)
console.log("Has 3?:", mySet.has(3)); // true

// Removing Elements (delete)
mySet.delete(2);

// Set Properties
console.log("Size:", mySet.size);

// Clearing Set
// mySet.clear();

//--------------------SET ITERATION-----------------------
/*
Ways to loop through a Set.
*/
let fruitSet = new Set(["Apple", "Banana", "Orange"]);

// for...of loop
for (let fruit of fruitSet) {
    console.log(fruit);
}

// forEach()
fruitSet.forEach(value => {
    console.log(value);
});

//--------------------COMMON USE CASES-----------------------
// 1. Removing duplicates from an array
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// 2. Counting unique elements
let tags = ["js", "html", "js", "css", "html"];
console.log("Unique Tags:", new Set(tags).size);

//--------------------ARRAY vs SET SUMMARY-----------------------
/*
| Feature      | Array                      | Set                         |
| ------------ | -------------------------- | --------------------------- |
| Duplicates   | Allowed                    | Not Allowed                 |
| Access       | By Index (`arr[0]`)        | By Value (`set.has(val)`)   |
| Order        | Insertion Order            | Insertion Order             |
| Performance  | Better for index access    | Better for checking presence|
*/

//________________________________________________________________________________________________________________________________________________________________________
                                                                    // JAVASCRIPT OBJECTS - DEFINITIONS, METHODS, AND PROPERTIES
/*
An Object is a standalone entity, with properties and type. It is a collection of related data and/or functionality.
Objects consist of variables (properties) and functions (methods).

Key Concepts:
- Objects are key-value pairs.
- Keys are strings or symbols, values can be any type.
- Objects are reference types.
*/

// 1. Object Literal
let person = {
    firstName: "Vivek",
    lastName: "Singh",
    age: 25,
    isStudent: false,
    
    // Method inside object
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// 2. Accessing Properties
console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation (useful for dynamic keys)

// 3. Adding/Updating Properties
person.city = "Delhi";
person.age = 26;

// 4. Deleting Properties
delete person.isStudent;

//--------------------NESTED OBJECTS-----------------------
let company = {
    name: "Tech Corp",
    address: {
        street: "Main St",
        city: "Mumbai",
        zip: 400001
    },
    employees: ["Amit", "Rahul"]
};

console.log(company.address.city); // Mumbai

//--------------------OBJECT METHODS & 'this'-----------------------
/*
The 'this' keyword refers to the object that is executing the current piece of code.
In a method, 'this' refers to the owner object.
*/
let car = {
    brand: "Tesla",
    model: "Model 3",
    start: function() {
        console.log(this.brand + " is starting...");
    }
};
car.start();

//--------------------OBJECT CONSTRUCTORS-----------------------
/*
Used to create multiple objects of the same type.
*/
function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log("Hi, I am " + this.name);
    };
}

let user1 = new User("Rahul", 22);
let user2 = new User("Priya", 24);

//--------------------OBJECT PROTOTYPES-----------------------
/*
Prototypes allow you to add new properties and methods to object constructors.
*/
User.prototype.nationality = "Indian";
console.log(user1.nationality);

//--------------------ES6 OBJECT FEATURES-----------------------
// 1. Property Shorthand
let name = "Amit";
let age = 20;
let student = { name, age }; // Instead of {name: name, age: age}

// 2. Object Destructuring
let { firstName, lastName } = person;
console.log(firstName);

// 3. Spread Operator (Copying/Merging)
let details = { ...person, country: "India" };

//--------------------BUILT-IN OBJECT METHODS-----------------------
/*
Essential methods provided by the global Object constructor.
*/
let data = { a: 1, b: 2, c: 3 };

// Object.keys() -> Returns array of keys
console.log(Object.keys(data));

// Object.values() -> Returns array of values
console.log(Object.values(data));

// Object.entries() -> Returns array of [key, value] pairs
console.log(Object.entries(data));

// Object.assign() -> Copies properties from one or more source objects to a target object
let clone = Object.assign({}, data);

// Object.freeze() -> Prevents any changes to the object
Object.freeze(clone);

// Object.seal() -> Prevents adding/deleting properties but allows modifying existing ones
Object.seal(data);

//--------------------ITERATING THROUGH OBJECTS-----------------------
// for...in loop
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//--------------------OBJECT SUMMARY TABLE-----------------------
/*
| Feature          | Description                                      |
| ---------------- | ------------------------------------------------ |
| Literal          | `let obj = {}`                                   |
| Constructor      | `function Person() { ... }`                      |
| `this`           | Refers to the current object context             |
| `keys()`         | Returns an array of object's keys                |
| `values()`       | Returns an array of object's values              |
| `entries()`      | Returns an array of [key, value] pairs           |
| Destructuring    | Extracting properties into variables             |
| Spread (...)     | Cloning or merging objects                       |
*/

