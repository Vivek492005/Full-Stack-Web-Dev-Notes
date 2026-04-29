const notesData = [
    {
        "id": "js-1",
        "category": "javascript",
        "title": "Comments in JavaScript",
        "description": "Comprehensive notes on Comments in JavaScript",
        "content": "// Comments in JavaScript\r\n\r\n// Single Line Comments - This Line Is An example of Single Line Comments\r\n/*\r\nThese Lines are the examples \r\nOf Multi Line Comments\r\n*/",
        "language": "javascript"
    },
    {
        "id": "js-2",
        "category": "javascript",
        "title": "Variables and Declerations in JavaScript",
        "description": "Comprehensive notes on Variables and Declerations in JavaScript",
        "content": "// Variables and Declerations in JavaScript\r\n\r\n// VAR - The var keyword declares a variable globally or locally to an entire function regardless of block scope(Means we can access it from anywhere).\r\n// It Also Can be redeclared with different values, \r\n\r\nvar a = 10;\r\nvar b = 20;\r\nvar sum = a+b;\r\nconsole.log(sum); //NOTE - Reassignment and Recdecleration is possible with var\r\n\r\n// LET - let is used to declare a block-scoped variable whose value can be changed later.\r\n\r\nlet name = \"Vivek\";\r\nname = \"Hello World!\"\r\nconsole.log(name); //NOTE - Reassignment is possible but Redecleration is not possible with let\r\n\r\n// CONST - const is used to declare a block-scoped variable whose value cannot be reassigned.\r\n\r\nconst message = \"This Value cannot be Changed\";\r\nmessage = \"abcd\";\r\nconsole.log(message); // It Will Show An Error message regarding constant variable change.\r\n\r\n/*\r\n| Feature        | let      | const    |\r\n| -------------- | -------- | -------- |\r\n| Scope          | Block    | Block    |\r\n| Update         | ✅ Yes    | ❌ No  |\r\n| Re-declare     | ❌ No     | ❌ No  |\r\n| Initialization | Optional | Required |\r\n*/",
        "language": "javascript"
    },
    {
        "id": "js-3",
        "category": "javascript",
        "title": "Javascript Keywords",
        "description": "Comprehensive notes on Javascript Keywords",
        "content": "// Javascript Keywords\r\n/*\r\nJavaScript statements often start with a keyword to identify the JavaScript action to be performed.\r\nIn JavaScript you cannot use these reserved words as variables, labels, or function names:\r\n\r\nabstract\targuments\tasync *\tawait *\r\nboolean\tbreak\tbyte\tcase\r\ncatch\tchar\tclass *\tconst *\r\ncontinue\tdebugger\tdefault\tdelete\r\ndo\tdouble\telse\tenum *\r\neval\texport *\textends *\tfalse\r\nfinal\tfinally\tfloat\tfor\r\nfunction\tgoto\tif\timplements\r\nfunction\timport *\tin\tinstanceof\r\nint\tinterface\tlet *\tlong\r\nnative\tnew\tnull\tpackage\r\nprivate\tprotected\tpublic\treturn\r\nshort\tstatic\tsuper *\tswitch\r\nsynchronized\tthis\tthrow\tthrows\r\ntransient\ttrue\ttry\ttypeof\r\nusing *\tvar\tvoid\tvolatile\r\nwhile\twith\tyield \r\n*/",
        "language": "javascript"
    },
    {
        "id": "js-4",
        "category": "javascript",
        "title": "DataTypes in Javascript",
        "description": "Comprehensive notes on DataTypes in Javascript",
        "content": "// DataTypes in Javascript\r\n/*\r\nA JavaScript variable can hold 8 types of data:\r\n\r\n\r\nType\tDescription\r\nString\tA text of characters enclosed in quotes\r\nNumber\tA number representing a mathematical value\r\nBigint\tA number representing a large integer\r\nBoolean\tA data type representing true or false\r\nObject\tA collection of key-value pairs of data\r\nUndefined\tA primitive variable with no assigned value\r\nNull\tA primitive value representing object absence\r\nSymbol\tA unique and primitive identifier\r\n*/\r\n\r\n// String\r\nlet color = \"Yellow\";\r\nlet lastName = \"Johnson\";\r\n\r\n// Number\r\nlet length = 16;\r\nlet weight = 7.5;\r\n\r\n// BigInt\r\nlet x = 1234567890123456789012345n;\r\nlet y = BigInt(1234567890123456789012345)\r\n\r\n// Boolean\r\nlet x = true;\r\nlet y = false;\r\n\r\n// Object\r\nconst person = {firstName:\"John\", lastName:\"Doe\"};\r\n\r\n// Array object\r\nconst cars = [\"Saab\", \"Volvo\", \"BMW\"];\r\n\r\n// Date object\r\nconst date = new Date(\"2022-03-25\");\r\n\r\n// Undefined\r\nlet x;\r\nlet y;\r\n\r\n// Null\r\nlet x = null;\r\nlet y = null;\r\n\r\n// Symbol\r\nconst x = Symbol();\r\nconst y = Symbol();",
        "language": "javascript"
    },
    {
        "id": "js-5",
        "category": "javascript",
        "title": "Operators in JavaScript",
        "description": "Comprehensive notes on Operators in JavaScript",
        "content": "// Operators in JavaScript\r\n// Javascript Assignment Operators \r\n\r\n/*\r\nArithmetic operators perform arithmetic on numbers (literals or variables).\r\n\r\nOperator\tDescription\r\n+\tAddition\r\n-\tSubtraction\r\n*\tMultiplication\r\n**\tExponentiation (ES2016)\r\n/\tDivision\r\n%\tModulus (Remainder)\r\n++\tIncrement\r\n--\tDecrement\r\n*/\r\nlet a = 10;\r\nlet b = 3;\r\n\r\n// Addition\r\nconsole.log(\"Addition:\", a + b);\r\n\r\n// Subtraction\r\nconsole.log(\"Subtraction:\", a - b);\r\n\r\n// Multiplication\r\nconsole.log(\"Multiplication:\", a * b);\r\n\r\n// Division\r\nconsole.log(\"Division:\", a / b);\r\n\r\n// Modulus (Remainder)\r\nconsole.log(\"Modulus:\", a % b);\r\n\r\n// Exponentiation\r\nconsole.log(\"Exponentiation:\", a ** b);\r\n\r\n// Increment (Post & Pre)\r\nlet x = 5;\r\nconsole.log(\"Post Increment:\", x++); // 5\r\nconsole.log(\"After Post Increment:\", x); // 6\r\n\r\nlet y = 5;\r\nconsole.log(\"Pre Increment:\", ++y); // 6\r\n\r\n// Decrement (Post & Pre)\r\nlet m = 5;\r\nconsole.log(\"Post Decrement:\", m--); // 5\r\nconsole.log(\"After Post Decrement:\", m); // 4\r\n\r\nlet n = 5;\r\nconsole.log(\"Pre Decrement:\", --n); // 4",
        "language": "javascript"
    },
    {
        "id": "js-6",
        "category": "javascript",
        "title": "Comparison Operators in Javascript",
        "description": "Comprehensive notes on Comparison Operators in Javascript",
        "content": "Javascript Assignment operators----------------------\r\n/*\r\nAssignment operators assign values to JavaScript variables.\r\n\r\nGiven that x = 10 and y = 5, the table below explains the assignment operators:\r\n\r\nOperator\tExample\tSame As\tResult\r\n=\tx = y\tx = y\tx = 5\r\n+=\tx += y\tx = x + y\tx = 15\r\n-=\tx -= y\tx = x - y\tx = 5\r\n*=\tx *= y\tx = x * y\tx = 50\r\n**=\tx **= y\tx = x ** y\tx = 100000\r\n/=\tx /= y\tx = x / y\tx = 2\r\n%=\tx %= y\tx = x % y\tx = 0\r\n:\tx: 45\tsize.x = 45\tx = 45\r\n*/\r\n\r\nlet x = 10;\r\n\r\nconsole.log(\"Initial:\", x);\r\n\r\nx += 5;\r\nconsole.log(\"After += :\", x);\r\n\r\nx -= 3;\r\nconsole.log(\"After -= :\", x);\r\n\r\nx *= 2;\r\nconsole.log(\"After *= :\", x);\r\n\r\nx /= 4;\r\nconsole.log(\"After /= :\", x);\r\n\r\nx %= 3;\r\nconsole.log(\"After %= :\", x);\r\n\r\nx **= 2;\r\nconsole.log(\"After **= :\", x);\r\n\r\n// Comparison Operators in Javascript\r\n\r\n/*\r\nComparison operators are used to compare two values.\r\n\r\nComparison operators always return true or false.\r\n\r\nGiven that x = 5, the table below explains the comparison operators:\r\n\r\nOperator\tDescription\tComparing\tReturns\t\r\n==\tequal to\tx == 8\tfalse\t\r\nx == 5\ttrue\t\r\nx == \"5\"\ttrue\t\r\n===\tequal value and equal type\tx === 5\ttrue\t\r\nx === \"5\"\tfalse\t\r\n!=\tnot equal\tx != 8\ttrue\t\r\n!==\tnot equal value or not equal type\tx !== 5\tfalse\t\r\nx !== \"5\"\ttrue\t\r\nx !== 8\ttrue\t\r\n>\tgreater than\tx > 8\tfalse\t\r\n<\tless than\tx < 8\ttrue\t\r\n>=\tgreater than or equal to\tx >= 8\tfalse\t\r\n<=\tless than or equal to\tx <= 8\ttrue\r\n*/\r\nlet a = 10;\r\nlet b = 5;\r\n\r\nconsole.log(\"== :\", a == b);\r\nconsole.log(\"=== :\", a === b);\r\nconsole.log(\"!= :\", a != b);\r\nconsole.log(\"!== :\", a !== b);\r\nconsole.log(\"> :\", a > b);\r\nconsole.log(\"< :\", a < b);\r\nconsole.log(\">= :\", a >= b);\r\nconsole.log(\"<= :\", a <= b);",
        "language": "javascript"
    },
    {
        "id": "js-7",
        "category": "javascript",
        "title": "JavaScript Concept 7",
        "description": "Comprehensive notes on JavaScript Concept 7",
        "content": "JavaScript Typeof() Operator-------------------------\r\nYou can use the JavaScript typeof operator to find the type of a JavaScript variable.\r\n\r\nThe typeof operator returns the type of a variable or an expression:\r\n*/\r\n\r\ntypeof \"\"             // Returns \"string\"\r\ntypeof \"John\"         // Returns \"string\"\r\ntypeof \"John Doe\"     // Returns \"string\"",
        "language": "javascript"
    },
    {
        "id": "js-8",
        "category": "javascript",
        "title": "Basic Example",
        "description": "Comprehensive notes on Basic Example",
        "content": "TERNARY OPERATOR-------------------------------------\r\n/*\r\nThe ternary operator is a short-hand way of writing if...else in a single line.\r\nIt evaluates a condition and returns one of two values.\r\n\r\nSYNTAX-\r\nlet result = (condition) ? \"True Value\" : \"False Value\";\r\n*/\r\n// Basic Example\r\nlet age = 20;\r\nlet result = (age >= 18) ? \"Adult\" : \"Minor\";\r\nconsole.log(\"Age Check:\", result);\r\n\r\n// Even/Odd Check\r\nlet num = 7;\r\nlet check = (num % 2 === 0) ? \"Even\" : \"Odd\";\r\nconsole.log(\"Number:\", check);\r\n\r\n// Default Value\r\nlet username = \"\";\r\nlet name = username ? username : \"Guest\";\r\nconsole.log(\"Name:\", name);\r\n\r\n// Login Message\r\nlet isLoggedIn = true;\r\nlet message = isLoggedIn ? \"Welcome\" : \"Please Login\";\r\nconsole.log(\"Message:\", message);\r\n\r\n// Nested Ternary\r\nlet marks = 85;\r\nlet grade = (marks >= 90) ? \"A\" :\r\n            (marks >= 60) ? \"B\" : \"C\";\r\n\r\nconsole.log(\"Grade:\", grade);",
        "language": "javascript"
    },
    {
        "id": "js-9",
        "category": "javascript",
        "title": "🔹 AND (&&)",
        "description": "Comprehensive notes on 🔹 AND (&&)",
        "content": "LOGICAL OPERATORS------------------------------\r\n/*\r\nLogical operators are used to combine boolean expressions.\r\nLogical operators can be used to modify the results of comparisons.\r\nTypically, you will use a comparison operator to check a condition, and a logical operator to combine conditions into more complex logic.\r\n\r\nLogical operators are used to determine the logic between variables or values.\r\n\r\nGiven that x = 6 and y = 3, the table below explains the logical operators:\r\n\r\nOper\tName\tExample\t\r\n&&\t    AND\t    (x < 10 && y > 1) is true\t\r\n||\t    OR\t    (x === 5 || y === 5) is false\t\r\n!\t    NOT\t    !(x === y) is true\r\n*/\r\n// 🔹 AND (&&)\r\nconsole.log(\"---- AND ----\");\r\nconsole.log(true && true);   // true\r\nconsole.log(true && false);  // false\r\nconsole.log(5 && 10);        // 10\r\nconsole.log(0 && 10);        // 0\r\n\r\n// 🔹 OR (||)\r\nconsole.log(\"---- OR ----\");\r\nconsole.log(true || false);  // true\r\nconsole.log(false || false); // false\r\nconsole.log(0 || 10);        // 10\r\nconsole.log(\"\" || \"Hello\");  // Hello\r\n\r\n// 🔹 NOT (!)\r\nconsole.log(\"---- NOT ----\");\r\nconsole.log(!true);          // false\r\nconsole.log(!false);         // true\r\nconsole.log(!\"hello\");       // false\r\n\r\n// 🔹 Real Example\r\nlet age = 20;\r\nlet hasID = true;\r\n\r\nif (age >= 18 && hasID) {\r\n    console.log(\"Access Granted\");\r\n}\r\n\r\n// Default value example\r\nlet username = \"\";\r\nlet name = username || \"Guest\";\r\nconsole.log(\"Name:\", name);\r\n\r\n// Toggle example\r\nlet isOn = true;\r\nisOn = !isOn;\r\nconsole.log(\"Toggled:\", isOn);",
        "language": "javascript"
    },
    {
        "id": "js-10",
        "category": "javascript",
        "title": "Conditional Statements in Javascript",
        "description": "Comprehensive notes on Conditional Statements in Javascript",
        "content": "// Conditional Statements in Javascript\r\n/*\r\nConditional Statements allow us to perform different actions for different conditions.\r\n\r\nConditional statements run different code depending on true or false conditions.\r\n\r\nConditional statements include:\r\n\r\nif\r\nif...else\r\nif...else if...else\r\nswitch\r\nternary (? :)\r\n\r\nWhen to use Conditionals:\r\n\r\n1. Use if to specify a code block to be executed, if a specified condition is true\r\n2. Use else to specify a code block to be executed, if the same condition is false\r\n3. Use else if to specify a new condition to test, if the first condition is false\r\n4. Use switch to specify many alternative code blocks to be executed\r\n5. Use (? :) (ternary) as a shorthand for if...else\r\n*/\r\n\r\nlet age = 20;\r\nlet marks = 75;\r\nlet day = 2;\r\nlet isLoggedIn = true;\r\n\r\n//  1. if Statement\r\nif (age > 18) {\r\n    console.log(\"if: Age is greater than 18\");\r\n}\r\n\r\n//  2. if...else\r\nif (age >= 18) {\r\n    console.log(\"if-else: Adult\");\r\n} else {\r\n    console.log(\"if-else: Minor\");\r\n}\r\n\r\n//  3. if...else if...else\r\nif (marks >= 90) {\r\n    console.log(\"Grade A\");\r\n} else if (marks >= 60) {\r\n    console.log(\"Grade B\");\r\n} else {\r\n    console.log(\"Grade C\");\r\n}\r\n\r\n//  4. Nested if\r\nif (age >= 18) {\r\n    if (isLoggedIn) {\r\n        console.log(\"Nested if: Access granted\");\r\n    }\r\n}\r\n\r\n//  5. Ternary Operator\r\nlet result = (age >= 18) ? \"Adult\" : \"Minor\";\r\nconsole.log(\"Ternary:\", result);\r\n\r\n//  6. switch Statement\r\nswitch (day) {\r\n    case 1:\r\n        console.log(\"Monday\");\r\n        break;\r\n    case 2:\r\n        console.log(\"Tuesday\");\r\n        break;\r\n    case 3:\r\n        console.log(\"Wednesday\");\r\n        break;\r\n    default:\r\n        console.log(\"Invalid day\");\r\n}",
        "language": "javascript"
    },
    {
        "id": "js-11",
        "category": "javascript",
        "title": "Type Coercion and Truly VS Falsy Values in JavaScript",
        "description": "Comprehensive notes on Type Coercion and Truly VS Falsy Values in JavaScript",
        "content": "// Type Coercion and Truly VS Falsy Values in JavaScript\r\n/*\r\nType Coercion is the automatic or implicit conversion of one data type into another by JavaScript during operations.\r\n\r\nJavaScript is dynamically typed, so it converts types when needed.\r\n*/\r\nconsole.log(5 + \"5\"); // \"55\"\r\n//Number 5 is converted to string → concatenation happens",
        "language": "javascript"
    },
    {
        "id": "js-12",
        "category": "javascript",
        "title": "Implicit Coercion Examples",
        "description": "Comprehensive notes on Implicit Coercion Examples",
        "content": "TYPES OF COERCIONS-------------\r\n\r\n//  Implicit Coercion Examples\r\n\r\nconsole.log(\"---- Implicit Coercion ----\");\r\n\r\n// Addition (String + Number)\r\nconsole.log(\"5\" + 2); // \"52\"\r\n\r\n// Subtraction (String -> Number)\r\nconsole.log(\"5\" - 2); // 3\r\n\r\n// Multiplication\r\nconsole.log(\"5\" * 2); // 10\r\n\r\n// Division\r\nconsole.log(\"10\" / 2); // 5\r\n\r\n// Boolean conversion\r\nconsole.log(true + 1);  // 2\r\nconsole.log(false + 1); // 1\r\n\r\n// Equality check (type coercion)\r\nconsole.log(5 == \"5\");  // true\r\nconsole.log(0 == false); // true\r\n\r\n//  Explicit Coercion Examples\r\n\r\nconsole.log(\"---- Explicit Coercion ----\");\r\n\r\n// String to Number\r\nlet str = \"100\";\r\nlet num = Number(str);\r\nconsole.log(num); // 100\r\n\r\n// Number to String\r\nlet n = 50;\r\nlet s = String(n);\r\nconsole.log(s); // \"50\"\r\n\r\n// To Boolean\r\nconsole.log(Boolean(1));   // true\r\nconsole.log(Boolean(0));   // false\r\nconsole.log(Boolean(\"\"));  // false\r\n\r\n//  Special Cases\r\n\r\nconsole.log(\"---- Special Cases ----\");\r\n\r\n// null vs undefined\r\nconsole.log(null == undefined);  // true\r\nconsole.log(null === undefined); // false\r\n\r\n// Empty string\r\nconsole.log(\"\" == 0); // true\r\n\r\n// Weird case\r\nconsole.log([] + {}); // \"[object Object]\"",
        "language": "javascript"
    },
    {
        "id": "js-13",
        "category": "javascript",
        "title": "Falsy Values",
        "description": "Comprehensive notes on Falsy Values",
        "content": "TRUTHY VS FALSY VALUES-----------\r\n\r\n/*\r\nIn JavaScript, every value is treated as either:\r\n\r\nTruthy  → behaves like true in conditions\r\nFalsy  → behaves like false in conditions\r\n\r\nUsed mainly in:\r\n\r\n1. if conditions\r\n2. loops\r\n3. logical operations\r\n*/\r\n//  Falsy Values\r\nconsole.log(\"---- Falsy Values ----\");\r\n\r\nconsole.log(Boolean(false));     // false\r\nconsole.log(Boolean(0));         // false\r\nconsole.log(Boolean(\"\"));        // false\r\nconsole.log(Boolean(null));      // false\r\nconsole.log(Boolean(undefined)); // false\r\nconsole.log(Boolean(NaN));       // false\r\n\r\n//  Truthy Values\r\nconsole.log(\"---- Truthy Values ----\");\r\n\r\nconsole.log(Boolean(true));      // true\r\nconsole.log(Boolean(1));         // true\r\nconsole.log(Boolean(\"hello\"));   // true\r\nconsole.log(Boolean([]));        // true\r\nconsole.log(Boolean({}));        // true\r\nconsole.log(Boolean(\"0\"));       // true\r\n\r\n//  Using in Conditions\r\nconsole.log(\"---- Conditions ----\");\r\n\r\nlet value = \"\";\r\n\r\nif (value) {\r\n    console.log(\"Truthy\");\r\n} else {\r\n    console.log(\"Falsy\"); // runs\r\n}\r\n\r\n//  Default Value Example\r\nlet userInput = \"\";\r\nlet name = userInput || \"Guest\";\r\nconsole.log(\"Name:\", name); // Guest\r\n\r\n//  Logical AND Example\r\nlet isLoggedIn = true;\r\nlet isAdmin = false;\r\n\r\nif (isLoggedIn && isAdmin) {\r\n    console.log(\"Admin Access\");\r\n} else {\r\n    console.log(\"Access Denied\");\r\n}",
        "language": "javascript"
    },
    {
        "id": "js-14",
        "category": "javascript",
        "title": "If - Else Conditional Statements",
        "description": "Comprehensive notes on If - Else Conditional Statements",
        "content": "// If - Else Conditional Statements\r\n// if...else is used to execute one block of code when a condition is true and another when it is false.\r\n/*\r\nif (condition) {\r\n    // runs if condition is true\r\n} else {\r\n    // runs if condition is false\r\n}\r\n*/\r\n\r\nlet age = 18;\r\n\r\nif (age >= 18) {\r\n    console.log(\"Adult\");\r\n} else {\r\n    console.log(\"Minor\");\r\n}",
        "language": "javascript"
    },
    {
        "id": "js-15",
        "category": "javascript",
        "title": "You can use an if statement inside another if statement:",
        "description": "Comprehensive notes on You can use an if statement inside another if statement:",
        "content": "Nested if-----------------------------\r\n// You can use an if statement inside another if statement:\r\nlet age = 16;\r\nlet country = \"USA\";\r\nlet text = \"You can Not drive!\";\r\n\r\nif (country == \"USA\") {\r\n  if (age >= 16) {\r\n    text = \"You can drive!\";\r\n  }\r\n}",
        "language": "javascript"
    },
    {
        "id": "js-16",
        "category": "javascript",
        "title": "Switch-Case Statements",
        "description": "Comprehensive notes on Switch-Case Statements",
        "content": "// Switch-Case Statements\r\n/*\r\nBased on a condition, switch selects one or more code blocks to be executed.\r\nswitch executes the code blocks that matches an expression.\r\nswitch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.\r\n\r\nSYNTAX:\r\nswitch (expression) {\r\n    case value1:\r\n        // code block\r\n        break;\r\n\r\n    case value2:\r\n        // code block\r\n        break;\r\n\r\n    default:\r\n        // default code\r\n}\r\n*/ \r\n// Day Example\r\nlet day = 2;\r\n\r\nswitch (day) {\r\n    case 1:\r\n        console.log(\"Monday\");\r\n        break;\r\n    case 2:\r\n        console.log(\"Tuesday\");\r\n        break;\r\n    default:\r\n        console.log(\"Invalid day\");\r\n}\r\n\r\n// Role Example\r\nlet role = \"admin\";\r\n\r\nswitch (role) {\r\n    case \"admin\":\r\n        console.log(\"Full Access\");\r\n        break;\r\n    case \"user\":\r\n        console.log(\"Limited Access\");\r\n        break;\r\n    default:\r\n        console.log(\"Guest Access\");\r\n}\r\n\r\n// Weekend Example (Multiple Cases)\r\nlet d = 7;\r\n\r\nswitch (d) {\r\n    case 6:\r\n    case 7:\r\n        console.log(\"Weekend\");\r\n        break;\r\n    default:\r\n        console.log(\"Weekday\");\r\n}\r\n\r\n// Fall-through Example\r\nlet x = 1;\r\n\r\nswitch (x) {\r\n    case 1:\r\n        console.log(\"One\");\r\n    case 2:\r\n        console.log(\"Two\");\r\n}",
        "language": "javascript"
    },
    {
        "id": "js-17",
        "category": "javascript",
        "title": "code block to be executed",
        "description": "Comprehensive notes on code block to be executed",
        "content": "FOR LOOP--------------------------------\r\n/*\r\nThe for statement creates a loop with 3 optional expressions:\r\n\r\nSYNTAX:\r\n\r\nfor (exp 1; exp 2; exp 3) {\r\n  // code block to be executed\r\n}\r\nexp 1 is executed (one time) before the execution of the code block.\r\nexp 2 defines the condition for executing the code block.\r\nexp 3 is executed (every time) after the code block has been executed.\r\n*/\r\nfor (let i = 0; i < 5; i++) {\r\n  text += \"The number is \" + i + \"<br>\";\r\n}\r\n\r\n// Basic loop\r\nfor (let i = 1; i <= 5; i++) {\r\n    console.log(\"Number:\", i);\r\n}\r\n\r\n// Sum calculation\r\nlet sum = 0;\r\nfor (let i = 1; i <= 5; i++) {\r\n    sum += i;\r\n}\r\nconsole.log(\"Sum:\", sum);\r\n\r\n// Array traversal\r\nlet arr = [10, 20, 30];\r\nfor (let i = 0; i < arr.length; i++) {\r\n    console.log(\"Array:\", arr[i]);\r\n}\r\n\r\n// Reverse loop\r\nfor (let i = 5; i >= 1; i--) {\r\n    console.log(\"Reverse:\", i);\r\n}\r\n\r\n// Break example\r\nfor (let i = 1; i <= 5; i++) {\r\n    if (i === 3) break;\r\n    console.log(\"Break:\", i);\r\n}\r\n\r\n// Continue example\r\nfor (let i = 1; i <= 5; i++) {\r\n    if (i === 3) continue;\r\n    console.log(\"Continue:\", i);\r\n}\r\n\r\n// Nested loop\r\nfor (let i = 1; i <= 2; i++) {\r\n    for (let j = 1; j <= 2; j++) {\r\n        console.log(\"Nested:\", i, j);\r\n    }\r\n}",
        "language": "javascript"
    },
    {
        "id": "js-18",
        "category": "javascript",
        "title": "JavaScript Concept 18",
        "description": "Comprehensive notes on JavaScript Concept 18",
        "content": "WHILE LOOP AND DO-WHILE LOOP---------------------------\r\n/*\r\nWhile loops execute a block of code as long as a specified condition is true.\r\nJavaScript have two types of while loops:\r\n\r\n1. The while loop\r\n2. The do while loop\r\n\r\n*/",
        "language": "javascript"
    },
    {
        "id": "js-19",
        "category": "javascript",
        "title": "The while loop loops through a block of code as long as a specified condition is true.",
        "description": "Comprehensive notes on The while loop loops through a block of code as long as a specified condition is true.",
        "content": "WHILE LOOPS-------------------\r\n// The while loop loops through a block of code as long as a specified condition is true.\r\n// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.\r\n/*\r\nSYNTAX:\r\n\r\nwhile (condition) {\r\n    // code to run\r\n}\r\n\r\ndo {\r\n    // code to run\r\n} while (condition);\r\n*/\r\n\r\n//  while loop\r\nlet i = 1;\r\n\r\nwhile (i <= 5) {\r\n    console.log(\"While:\", i);\r\n    i++;\r\n}\r\n\r\n//  do...while loop\r\nlet j = 1;\r\n\r\ndo {\r\n    console.log(\"Do While:\", j);\r\n    j++;\r\n} while (j <= 5);\r\n\r\n//  Countdown using while\r\nlet count = 5;\r\n\r\nwhile (count > 0) {\r\n    console.log(\"Countdown:\", count);\r\n    count--;\r\n}\r\n\r\n//  break example\r\nlet x = 1;\r\n\r\nwhile (x <= 5) {\r\n    if (x === 3) break;\r\n    console.log(\"Break:\", x);\r\n    x++;\r\n}\r\n\r\n//  continue example\r\nlet y = 0;\r\n\r\nwhile (y < 5) {\r\n    y++;\r\n    if (y === 3) continue;\r\n    console.log(\"Continue:\", y);\r\n}\r\n\r\n//  do...while runs at least once\r\nlet z = 10;\r\n\r\ndo {\r\n    console.log(\"Runs once even if condition false:\", z);\r\n} while (z < 5);",
        "language": "javascript"
    },
    {
        "id": "js-20",
        "category": "javascript",
        "title": "BREAK-CONTINUE Statements",
        "description": "Comprehensive notes on BREAK-CONTINUE Statements",
        "content": "// BREAK-CONTINUE Statements\r\n/*\r\nBREAK STATEMENTS\r\n\r\nThe break statement is used to immediately terminate (stop) a loop or switch statement.\r\nLoop ends instantly when break is encountered\r\n\r\nCONTINUE STATEMENTS\r\n\r\nThe continue statement is used to skip the current iteration and move to the next iteration of the loop.\r\nLoop continues, but skips one step\r\n*/\r\n//  break example\r\nfor (let i = 1; i <= 5; i++) {\r\n    if (i === 3) break;\r\n    console.log(\"Break:\", i);\r\n}\r\n\r\n//  continue example\r\nfor (let i = 1; i <= 5; i++) {\r\n    if (i === 3) continue;\r\n    console.log(\"Continue:\", i);\r\n}\r\n\r\n//  Odd numbers using continue\r\nfor (let i = 1; i <= 10; i++) {\r\n    if (i % 2 === 0) continue;\r\n    console.log(\"Odd:\", i);\r\n}\r\n\r\n//  Search using break\r\nlet arr = [10, 20, 30, 40];\r\n\r\nfor (let i = 0; i < arr.length; i++) {\r\n    if (arr[i] === 30) {\r\n        console.log(\"Found 30\");\r\n        break;\r\n    }\r\n}\r\n\r\n//  break in while loop\r\nlet x = 1;\r\n\r\nwhile (x <= 5) {\r\n    if (x === 4) break;\r\n    console.log(\"While Break:\", x);\r\n    x++;\r\n}",
        "language": "javascript"
    },
    {
        "id": "js-21",
        "category": "javascript",
        "title": "STRING - METHODS, Search & TEMPLATES in JavaScript",
        "description": "Comprehensive notes on STRING - METHODS, Search & TEMPLATES in JavaScript",
        "content": "// STRING - METHODS, Search & TEMPLATES in JavaScript\r\n/*\r\nA string is a sequence of characters used to represent text.\r\n\r\nStrings are written inside:\r\n\r\n\"double quotes\"\r\n'single quotes'\r\n`backticks` (template literals)\r\n*/\r\nlet name = \"Vivek\";\r\nlet city = 'Delhi';\r\nlet msg = `Hello`;",
        "language": "javascript"
    },
    {
        "id": "js-22",
        "category": "javascript",
        "title": "Declaration",
        "description": "Comprehensive notes on Declaration",
        "content": "String Templates-----------------------------\r\n\r\n/*\r\nTemplate strings (also called template literals) are a modern way to work with strings in JavaScript using backticks:\r\n\r\nThey allow:\r\n\r\nVariable interpolation\r\nMulti-line strings\r\nEmbedded expressions\r\n\r\n| Feature     | Normal Strings | Template Strings |\r\n| ----------- | -------------- | ---------------- |\r\n| Quotes      | ' or \"         | ` (backticks)    |\r\n| Multi-line  | No             | Yes              |\r\n| Variables   | No             | Yes (`${}`)      |\r\n| Readability | Medium         | High             |\r\n\r\n*/\r\n// Declaration\r\nlet name = \"Vivek\";\r\nlet msg = `Hello ${name}`;\r\n\r\n// Length\r\nconsole.log(name.length);\r\n\r\n// Case conversion\r\nconsole.log(name.toUpperCase());\r\nconsole.log(name.toLowerCase());\r\n\r\n// Trim\r\nlet str = \"  hello  \";\r\nconsole.log(str.trim());\r\n\r\n// Slice\r\nconsole.log(name.slice(0, 3));\r\n\r\n// Replace\r\nconsole.log(name.replace(\"V\", \"R\"));\r\n\r\n// Includes\r\nconsole.log(name.includes(\"vi\"));\r\n\r\n// IndexOf\r\nconsole.log(name.indexOf(\"e\"));\r\n\r\n// Split\r\nlet data = \"a,b,c\";\r\nconsole.log(data.split(\",\"));\r\n\r\n// Concatenation\r\nconsole.log(\"Hello \" + \"World\");\r\nconsole.log(`Hi ${name}`);\r\n\r\n// Escape\r\nlet quote = \"He said \\\"Hi\\\"\";\r\nconsole.log(quote);",
        "language": "javascript"
    },
    {
        "id": "js-23",
        "category": "javascript",
        "title": "Trim",
        "description": "Comprehensive notes on Trim",
        "content": "STRING METHODS---------------------------\r\n/*\r\nString methods are built-in functions used to perform operations on strings like: searching,modifying, extracting ,formatting \r\n\r\nStrings are immutable → methods return a new string, original stays unchanged.\r\n*/\r\nlet str = \"  Hello World  \";\r\n\r\n// Trim\r\nconsole.log(str.trim());\r\n\r\n// Upper & Lower\r\nconsole.log(str.toUpperCase());\r\nconsole.log(str.toLowerCase());\r\n\r\n// Slice & Substring\r\nconsole.log(str.slice(2, 7));\r\nconsole.log(str.substring(2, 7));\r\n\r\n// Replace\r\nconsole.log(str.replace(\"Hello\", \"Hi\"));\r\n\r\n// Includes\r\nconsole.log(str.includes(\"World\"));\r\n\r\n// IndexOf\r\nconsole.log(str.indexOf(\"o\"));\r\n\r\n// Split\r\nlet data = \"a,b,c\";\r\nconsole.log(data.split(\",\"));\r\n\r\n// CharAt\r\nconsole.log(str.charAt(1));\r\n\r\n// Concat\r\nconsole.log(\"Hello\".concat(\" JS\"));\r\n\r\n// Declaration\r\nlet name = \"Vivek\";\r\nlet msg = `Hello ${name}`;\r\n\r\n// Length\r\nconsole.log(name.length);\r\n\r\n// Case conversion\r\nconsole.log(name.toUpperCase());\r\nconsole.log(name.toLowerCase());",
        "language": "javascript"
    },
    {
        "id": "js-24",
        "category": "javascript",
        "title": "indexOf",
        "description": "Comprehensive notes on indexOf",
        "content": "String SEARCH METHODS--------------------------\r\n/*\r\nString search methods are used to find characters, words, or patterns inside a string.\r\n\r\nThey help in: Searching, Matching patterns ,Finding positions\r\n*/\r\nlet str = \"Hello World\";\r\n\r\n// indexOf\r\nconsole.log(\"indexOf:\", str.indexOf(\"o\"));\r\n\r\n// lastIndexOf\r\nconsole.log(\"lastIndexOf:\", str.lastIndexOf(\"o\"));\r\n\r\n// includes\r\nconsole.log(\"includes:\", str.includes(\"World\"));\r\n\r\n// startsWith\r\nconsole.log(\"startsWith:\", str.startsWith(\"He\"));\r\n\r\n// endsWith\r\nconsole.log(\"endsWith:\", str.endsWith(\"ld\"));\r\n\r\n// search\r\nconsole.log(\"search:\", str.search(\"World\"));\r\n\r\n// match\r\nlet text = \"abc123xyz\";\r\nconsole.log(\"match:\", text.match(/[0-9]+/));\r\n\r\n// matchAll\r\nlet str2 = \"a1b2c3\";\r\nlet matches = str2.matchAll(/[0-9]/g);\r\n\r\nfor (let m of matches) {\r\n    console.log(\"matchAll:\", m[0]);\r\n}",
        "language": "javascript"
    },
    {
        "id": "js-25",
        "category": "javascript",
        "title": "Anchor",
        "description": "Comprehensive notes on Anchor",
        "content": "String Wrapper Methods-----------------------------------\r\n/*\r\nThese methods were used to format strings as HTML elements directly from JavaScript.\r\n\r\nThey return a new string containing HTML tags\r\n*/\r\nlet text = \"Hello\";\r\n\r\n// Anchor\r\nconsole.log(text.anchor(\"link1\"));\r\n\r\n// Big\r\nconsole.log(text.big());\r\n\r\n// Blink (deprecated)\r\nconsole.log(text.blink());\r\n\r\n// Bold\r\nconsole.log(text.bold());\r\n\r\n// Fixed\r\nconsole.log(text.fixed());\r\n\r\n// Font color\r\nconsole.log(text.fontcolor(\"red\"));\r\n\r\n// Font size\r\nconsole.log(text.fontsize(5));\r\n\r\n// Italics\r\nconsole.log(text.italics());\r\n\r\n// Link\r\nconsole.log(text.link(\"https://example.com\"));\r\n\r\n// Small\r\nconsole.log(text.small());\r\n\r\n// Strike\r\nconsole.log(text.strike());\r\n\r\n// Subscript\r\nconsole.log(text.sub());\r\n\r\n// Superscript\r\nconsole.log(text.sup());",
        "language": "javascript"
    },
    {
        "id": "js-26",
        "category": "javascript",
        "title": "NUMBERS METHODS, PROPERTIES, AND REFERENCES IN JAVASCRIPT",
        "description": "Comprehensive notes on NUMBERS METHODS, PROPERTIES, AND REFERENCES IN JAVASCRIPT",
        "content": "// NUMBERS METHODS, PROPERTIES, AND REFERENCES IN JAVASCRIPT \r\n/*\r\nIn JavaScript, numbers represent both:\r\n\r\nIntegers (e.g., 10)\r\nFloating-point values (e.g., 10.5)\r\n\r\nJavaScript has only one number type:\r\nNumber (64-bit floating point – IEEE 754)\r\n*/\r\n// Basic numbers\r\nlet a = 10;\r\nlet b = 10.5;\r\n\r\n// Exponential\r\nlet c = 1e3;\r\n\r\n// Special values\r\nconsole.log(10 / 0);     // Infinity\r\nconsole.log(\"abc\" * 2);  // NaN\r\n\r\n// Methods\r\nlet num = 10.567;\r\nconsole.log(num.toString());\r\nconsole.log(num.toFixed(2));\r\nconsole.log(num.toPrecision(3));\r\nconsole.log(num.valueOf());\r\n\r\n// Global methods\r\nconsole.log(Number(\"50\"));\r\nconsole.log(parseInt(\"20.5\"));\r\nconsole.log(parseFloat(\"20.5\"));\r\nconsole.log(isNaN(\"abc\"));\r\n\r\n// Precision issue\r\nconsole.log(0.1 + 0.2);\r\n\r\n// Type check\r\nconsole.log(typeof num);\r\nconsole.log(typeof NaN);",
        "language": "javascript"
    },
    {
        "id": "js-27",
        "category": "javascript",
        "title": "Basic methods",
        "description": "Comprehensive notes on Basic methods",
        "content": "Numbers Methods---------------------------------------\r\n/*\r\nNumber methods are built-in functions used to format, convert, and manipulate numeric values.\r\nThese methods are applied on number variables\r\n\r\nBasic Number Methods --\r\n\r\ntoString() → Converts a number into a string\r\ntoFixed(n) → Rounds the number to n decimal places and returns a string\r\ntoPrecision(n) → Formats the number to n total significant digits\r\nvalueOf() → Returns the primitive numeric value\r\n\r\nGlobal Number Methods --\r\n\r\nNumber() → Converts a value into a number\r\nparseInt() → Converts a string to an integer by extracting numeric part\r\nparseFloat() → Converts a string to a floating-point number\r\nisNaN() → Checks whether a value is Not-a-Number\r\nisFinite() → Checks whether a value is a finite number\r\n\r\nNumber Properties (Bonus) --\r\n\r\nNumber.MAX_VALUE → Largest possible number in JavaScript\r\nNumber.MIN_VALUE → Smallest positive number in JavaScript\r\nNumber.POSITIVE_INFINITY → Represents positive infinity\r\nNumber.NEGATIVE_INFINITY → Represents negative infinity\r\nNumber.NaN → Represents an invalid number\r\n*/\r\nlet num = 10.567;\r\n\r\n// Basic methods\r\nconsole.log(\"toString:\", num.toString());\r\nconsole.log(\"toFixed:\", num.toFixed(2));\r\nconsole.log(\"toPrecision:\", num.toPrecision(3));\r\nconsole.log(\"valueOf:\", num.valueOf());\r\n\r\n// Global methods\r\nconsole.log(\"Number:\", Number(\"50\"));\r\nconsole.log(\"parseInt:\", parseInt(\"20.9\"));\r\nconsole.log(\"parseFloat:\", parseFloat(\"20.9\"));\r\nconsole.log(\"isNaN:\", isNaN(\"abc\"));\r\nconsole.log(\"isFinite:\", isFinite(100));\r\n\r\n// Properties\r\nconsole.log(\"MAX_VALUE:\", Number.MAX_VALUE);\r\nconsole.log(\"MIN_VALUE:\", Number.MIN_VALUE);\r\n\r\n// Use case\r\nlet price = 99.999;\r\nconsole.log(\"Formatted Price:\", price.toFixed(2));",
        "language": "javascript"
    },
    {
        "id": "js-28",
        "category": "javascript",
        "title": "Number properties are predefined constants provided by JavaScript’s Number object that give information about numeric limits and special values.",
        "description": "Comprehensive notes on Number properties are predefined constants provided by JavaScript’s Number object that give information about numeric limits and special values.",
        "content": "Number Properties in Javascript-------------------------------\r\n// Number properties are predefined constants provided by JavaScript’s Number object that give information about numeric limits and special values.\r\n/*\r\nNumber.MAX_VALUE → Represents the largest possible number in JavaScript\r\nNumber.MIN_VALUE → Represents the smallest positive number (closest to 0)\r\nNumber.POSITIVE_INFINITY → Represents positive infinity (value greater than any number)\r\nNumber.NEGATIVE_INFINITY → Represents negative infinity (value smaller than any number)\r\nNumber.NaN → Represents a value that is Not-a-Number (invalid numeric result)\r\nNumber.EPSILON → Represents the smallest difference between two representable numbers\r\nNumber.MAX_SAFE_INTEGER → Represents the largest integer that can be safely represented (2⁵³ − 1)\r\nNumber.MIN_SAFE_INTEGER → Represents the smallest integer that can be safely represented (−(2⁵³ − 1))\r\n*/\r\n// Max & Min values\r\nconsole.log(\"MAX_VALUE:\", Number.MAX_VALUE);\r\nconsole.log(\"MIN_VALUE:\", Number.MIN_VALUE);\r\n\r\n// Infinity\r\nconsole.log(\"POSITIVE_INFINITY:\", Number.POSITIVE_INFINITY);\r\nconsole.log(\"NEGATIVE_INFINITY:\", Number.NEGATIVE_INFINITY);\r\n\r\n// NaN\r\nconsole.log(\"NaN:\", Number.NaN);\r\n\r\n// EPSILON\r\nconsole.log(\"EPSILON:\", Number.EPSILON);\r\n\r\n// Safe Integers\r\nconsole.log(\"MAX_SAFE_INTEGER:\", Number.MAX_SAFE_INTEGER);\r\nconsole.log(\"MIN_SAFE_INTEGER:\", Number.MIN_SAFE_INTEGER);\r\n\r\n// Example usage\r\nlet num = Number.MAX_SAFE_INTEGER + 1;\r\nconsole.log(\"Unsafe Number:\", num);",
        "language": "javascript"
    },
    {
        "id": "js-29",
        "category": "javascript",
        "title": "1. Number Creation",
        "description": "Comprehensive notes on 1. Number Creation",
        "content": "NUMBER REFERENCES IN JAVASCRIPT-------------------------------------\r\n/*\r\nThe JavaScript Number Reference is a complete guide to how numbers work in JavaScript, including:\r\n\r\nNumber type\r\nNumber methods\r\nNumber properties\r\nSpecial numeric values\r\n\r\nJavaScript uses one number type:\r\n64-bit floating-point (IEEE 754)\r\n\r\n1. Number Basics\r\nNumber → The built-in JavaScript data type used to represent both integers and floating-point values\r\nNumeric Literal → A direct number value written in code (e.g., 10, 5.5)\r\nNumber() → Converts a given value into a number\r\nnew Number() → Creates a Number object (not recommended due to object behavior)\r\n\r\n2. Number Types\r\nInteger → A whole number without decimals\r\nFloat → A number with decimal values\r\nExponential → A number written using scientific notation (e.g., 1e3)\r\nInfinity → A value greater than any finite number\r\n-Infinity → A value smaller than any finite number\r\nNaN → A value representing an invalid or undefined numeric result\r\n\r\n3. Number Methods\r\ntoString() → Converts a number into a string\r\ntoFixed(n) → Rounds the number to n decimal places and returns a string\r\ntoPrecision(n) → Formats the number to n significant digits\r\nvalueOf() → Returns the primitive numeric value of a Number object\r\n\r\n4. Global Number Functions\r\nNumber() → Converts a value into a numeric type\r\nparseInt() → Extracts and returns the integer part of a string\r\nparseFloat() → Extracts and returns the decimal number from a string\r\nisNaN() → Checks whether a value is not a valid number\r\nisFinite() → Checks whether a value is a finite number\r\n\r\n5. Number Properties\r\nNumber.MAX_VALUE → The largest representable number in JavaScript\r\nNumber.MIN_VALUE → The smallest positive number greater than zero\r\nNumber.POSITIVE_INFINITY → Represents positive infinity\r\nNumber.NEGATIVE_INFINITY → Represents negative infinity\r\nNumber.NaN → Represents a Not-a-Number value\r\nNumber.EPSILON → The smallest difference between two representable numbers\r\nNumber.MAX_SAFE_INTEGER → The largest safe integer (2⁵³ − 1)\r\nNumber.MIN_SAFE_INTEGER → The smallest safe integer (−(2⁵³ − 1))\r\n*/\r\n\r\n// 1. Number Creation\r\nlet intNum = 10;\r\nlet floatNum = 10.75;\r\nlet expNum = 1e3; // 1000\r\n\r\nconsole.log(\"Integer:\", intNum);\r\nconsole.log(\"Float:\", floatNum);\r\nconsole.log(\"Exponential:\", expNum);\r\n\r\n// 2. Using Number()\r\nlet convertedNum = Number(\"100\");\r\nconsole.log(\"Converted Number:\", convertedNum);\r\n\r\n// Avoid using new Number()\r\nlet objNum = new Number(50);\r\nconsole.log(\"Object Number:\", objNum);\r\n\r\n// 3. Special Values\r\nconsole.log(\"Infinity:\", 10 / 0);\r\nconsole.log(\"NaN:\", \"abc\" * 2);\r\n\r\n// 4. Number Methods\r\nlet num = 10.567;\r\n\r\nconsole.log(\"toString:\", num.toString());\r\nconsole.log(\"toFixed(2):\", num.toFixed(2));\r\nconsole.log(\"toPrecision(3):\", num.toPrecision(3));\r\nconsole.log(\"valueOf:\", num.valueOf());\r\n\r\n// 5. Global Functions\r\nconsole.log(\"Number():\", Number(\"25\"));\r\nconsole.log(\"parseInt():\", parseInt(\"20.9\"));\r\nconsole.log(\"parseFloat():\", parseFloat(\"20.9\"));\r\nconsole.log(\"isNaN():\", isNaN(\"hello\"));\r\nconsole.log(\"isFinite():\", isFinite(100));\r\n\r\n// 6. Number Properties\r\nconsole.log(\"MAX_VALUE:\", Number.MAX_VALUE);\r\nconsole.log(\"MIN_VALUE:\", Number.MIN_VALUE);\r\nconsole.log(\"POSITIVE_INFINITY:\", Number.POSITIVE_INFINITY);\r\nconsole.log(\"NEGATIVE_INFINITY:\", Number.NEGATIVE_INFINITY);\r\nconsole.log(\"NaN Property:\", Number.NaN);\r\nconsole.log(\"EPSILON:\", Number.EPSILON);\r\nconsole.log(\"MAX_SAFE_INTEGER:\", Number.MAX_SAFE_INTEGER);\r\nconsole.log(\"MIN_SAFE_INTEGER:\", Number.MIN_SAFE_INTEGER);\r\n\r\n// 7. Important Concepts\r\n\r\n// ✔ Floating Point Precision Issue\r\nconsole.log(\"0.1 + 0.2 =\", 0.1 + 0.2);\r\n\r\n// ✔ Fix using EPSILON\r\nlet sum = 0.1 + 0.2;\r\nconsole.log(\"Fixed Precision:\", Math.abs(sum - 0.3) < Number.EPSILON);\r\n\r\n// ✔ Type Checking\r\nconsole.log(\"Type of num:\", typeof num);\r\nconsole.log(\"Type of NaN:\", typeof NaN);\r\n\r\n// ✔ Type Coercion\r\nconsole.log('\"5\" + 5 =', \"5\" + 5); // string concatenation\r\nconsole.log('\"5\" - 2 =', \"5\" - 2); // number conversion\r\n\r\n// 8. Safe Integer Check\r\nlet bigNum = Number.MAX_SAFE_INTEGER + 1;\r\nconsole.log(\"Unsafe Integer:\", bigNum);\r\n\r\n// 9. Real Use Case Example\r\nlet price = 99.999;\r\nconsole.log(\"Formatted Price:\", price.toFixed(2));\r\n\r\n// 10. Validation Example\r\nlet userInput = \"123abc\";\r\nlet parsed = parseInt(userInput);\r\n\r\nif (!isNaN(parsed)) {\r\n    console.log(\"Valid Number:\", parsed);\r\n} else {\r\n    console.log(\"Invalid Number\");\r\n}",
        "language": "javascript"
    },
    {
        "id": "js-30",
        "category": "javascript",
        "title": "FUNCTIONS IN JAVASCRIPTS",
        "description": "Comprehensive notes on FUNCTIONS IN JAVASCRIPTS",
        "content": "// FUNCTIONS IN JAVASCRIPTS \r\n/*\r\nA function is a reusable block of code designed to perform a specific task.\r\n\r\nIt helps in:\r\nCode reusability\r\nModular programming\r\nBetter organization\r\n\r\nSYNTAX:\r\nfunction functionName(parameters) {\r\n    // code\r\n    return value; // optional\r\n}\r\n\r\nFunctions are defined with the function keyword:\r\n    1.followed by the function name\r\n    2.followed by parentheses ( )\r\n    3.followed by brackets { }\r\nThe function name follows the naming rules for variables.\r\n\r\nOptional parameters are listed inside parentheses: ( p1, p2, ... )\r\nCode to be executed is listed inside curly brackets: { }\r\nFunctions can return an optional value back to the caller.\r\n*/",
        "language": "javascript"
    },
    {
        "id": "js-31",
        "category": "javascript",
        "title": "Function Declaration",
        "description": "Comprehensive notes on Function Declaration",
        "content": "Types of Functions-----------------------\r\n// Function Declaration\r\nfunction sayHi() {\r\n    console.log(\"Hi\");\r\n}\r\n\r\n// Function Expression\r\nlet greet = function() {\r\n    console.log(\"Hello\");\r\n};\r\n\r\n// Arrow Function (ES6)\r\nconst add = (a, b) => a + b;\r\n\r\n// Anonymous Function\r\nsetTimeout(function() {\r\n    console.log(\"Run after delay\");\r\n}, 1000);\r\n\r\n// IIFE (Immediately Invoked Function)\r\n(function() {\r\n    console.log(\"IIFE executed\");\r\n})();",
        "language": "javascript"
    },
    {
        "id": "js-32",
        "category": "javascript",
        "title": "Function declaration",
        "description": "Comprehensive notes on Function declaration",
        "content": "SAMPLE IMPLEMENTATIONS-----------------------\r\n// Function declaration\r\nfunction greet(name = \"Guest\") {\r\n    return \"Hello \" + name;\r\n}\r\nconsole.log(greet(\"Vivek\"));\r\nconsole.log(greet());\r\n\r\n// Function expression\r\nlet add = function(a, b) {\r\n    return a + b;\r\n};\r\nconsole.log(add(2, 3));\r\n\r\n// Arrow function\r\nconst multiply = (a, b) => a * b;\r\nconsole.log(multiply(3, 4));\r\n\r\n// Rest parameters\r\nfunction sum(...nums) {\r\n    return nums.reduce((a, b) => a + b);\r\n}\r\nconsole.log(sum(1, 2, 3, 4));\r\n\r\n// IIFE\r\n(function() {\r\n    console.log(\"IIFE executed\");\r\n})();\r\n\r\n// Scope\r\nlet globalVar = \"Global\";\r\nfunction test() {\r\n    let localVar = \"Local\";\r\n    console.log(globalVar);\r\n}\r\ntest();\r\n\r\n// Hoisting\r\nsayHi();\r\nfunction sayHi() {\r\n    console.log(\"Hoisted Function\");\r\n}",
        "language": "javascript"
    },
    {
        "id": "js-33",
        "category": "javascript",
        "title": "Example",
        "description": "Comprehensive notes on Example",
        "content": "FUNCTION INVOCATIONS IN JAVASCRIPT-----------------------------\r\n/*\r\nThe code inside a function is NOT executed when the function is defined.\r\n\r\nThe code inside a function will execute when \"something\" invokes the function:\r\n\r\nWhen it is called from JavaScript code\r\nWhen an event occurs (a user clicks a button)\r\nAutomatically (self invoked)\r\nIt is common to use the term invoke, because a function can be invoked without being called.\r\n\r\nIt is also common to use say:\r\n\r\ncall a function\r\ncall upon a function\r\nstart a function\r\nexecute a function\r\nExamples\r\nThe function below returns the text \"Hello World\".\r\n\r\nBut it will not run before you call it.\r\n*/\r\n//Example\r\nfunction sayHello() {\r\n  return \"Hello World\";\r\n}\r\n/*\r\n| Invocation Type | `this` refers to         |\r\n| --------------- | ------------------------ |\r\n| Normal          | Global object (`window`) |\r\n| Method          | Object itself            |\r\n| Constructor     | New object               |\r\n| call/apply      | Provided object          |\r\n*/\r\n\r\n// Normal invocation\r\nfunction greet(name) {\r\n    console.log(\"Hello \" + name);\r\n}\r\ngreet(\"Vivek\");\r\n\r\n// Method invocation\r\nlet obj = {\r\n    name: \"Vivek\",\r\n    greet: function() {\r\n        console.log(\"Hi \" + this.name);\r\n    }\r\n};\r\nobj.greet();\r\n\r\n// Constructor invocation\r\nfunction Person(name) {\r\n    this.name = name;\r\n}\r\nlet p = new Person(\"Rahul\");\r\nconsole.log(p.name);\r\n\r\n// call, apply, bind\r\nfunction intro(city) {\r\n    console.log(this.name + \" from \" + city);\r\n}\r\n\r\nlet user = { name: \"Amit\" };\r\n\r\nintro.call(user, \"Delhi\");\r\nintro.apply(user, [\"Mumbai\"]);\r\n\r\nlet boundFunc = intro.bind(user);\r\nboundFunc(\"Pune\");\r\n\r\n// IIFE\r\n(function() {\r\n    console.log(\"IIFE executed\");\r\n})();",
        "language": "javascript"
    },
    {
        "id": "js-34",
        "category": "javascript",
        "title": "Basic parameters",
        "description": "Comprehensive notes on Basic parameters",
        "content": "FUNCTIONS PARAMETERS IN JAVASCRIPT-------------------------\r\n/*\r\nFunction parameters are variables listed in the function definition that receive values (arguments) when the function is invoked.\r\n\r\n1. Parameter → variable in function definition\r\n2. Argument → actual value passed during function call\r\n\r\nParameters vs. Arguments--\r\nIn JavaScript, function parameters and arguments are distinct concepts:\r\n    Parameters are the names listed in the function definition.\r\n    Arguments are the real values passed to, and received by the function.\r\n*/\r\n// Basic parameters\r\nfunction greet(name) {\r\n    console.log(\"Hello \" + name);\r\n}\r\ngreet(\"Vivek\");\r\n\r\n// Default parameter\r\nfunction greetUser(name = \"Guest\") {\r\n    console.log(\"Hello \" + name);\r\n}\r\ngreetUser();\r\n\r\n// Rest parameter\r\nfunction sum(...nums) {\r\n    return nums.reduce((a, b) => a + b);\r\n}\r\nconsole.log(sum(1, 2, 3));\r\n\r\n// Destructuring\r\nfunction user({name, age}) {\r\n    console.log(name, age);\r\n}\r\nuser({name: \"Vivek\", age: 20});\r\n\r\n// Arguments object\r\nfunction show() {\r\n    console.log(arguments);\r\n}\r\nshow(10, 20, 30);\r\n\r\n// Pass by value\r\nfunction change(x) {\r\n    x = 100;\r\n}\r\nlet a = 10;\r\nchange(a);\r\nconsole.log(a);\r\n\r\n// Pass by reference\r\nfunction modify(obj) {\r\n    obj.value = 200;\r\n}\r\nlet data = { value: 50 };\r\nmodify(data);\r\nconsole.log(data);",
        "language": "javascript"
    },
    {
        "id": "js-35",
        "category": "javascript",
        "title": "Basic return",
        "description": "Comprehensive notes on Basic return",
        "content": "RETURN FUNCTION IN Javascript-------------------------\r\n// Basic return\r\nfunction add(a, b) {\r\n    return a + b;\r\n}\r\nconsole.log(add(2, 3));\r\n\r\n// Return different types\r\nfunction data() {\r\n    return { name: \"Vivek\", age: 20 };\r\n}\r\nconsole.log(data());\r\n\r\n// Early return\r\nfunction check(age) {\r\n    if (age < 18) return \"Not Allowed\";\r\n    return \"Allowed\";\r\n}\r\nconsole.log(check(20));\r\n\r\n// Return array\r\nfunction getValues() {\r\n    return [10, 20, 30];\r\n}\r\nconsole.log(getValues());\r\n\r\n// Boolean return\r\nfunction isEven(n) {\r\n    return n % 2 === 0;\r\n}\r\nconsole.log(isEven(4));\r\n\r\n// Return undefined\r\nfunction test() {\r\n    return;\r\n}\r\nconsole.log(test());\r\n\r\n// Stop execution\r\nfunction demo() {\r\n    console.log(\"Start\");\r\n    return;\r\n    console.log(\"End\"); // won't run\r\n}\r\ndemo();",
        "language": "javascript"
    },
    {
        "id": "js-36",
        "category": "javascript",
        "title": "Required arguments",
        "description": "Comprehensive notes on Required arguments",
        "content": "FUNCTION ARGUMENTS IN JAVASCRIPT--------------------------\r\n/*\r\n# The Arguments Object\r\nJavaScript functions have a built-in object called the arguments object.\r\n\r\nThe argument object contains an array of the arguments used when the function was called (invoked).\r\n\r\n| Feature  | Parameters          | Arguments     |\r\n| -------- | ------------------- | ------------- |\r\n| Location | Function definition | Function call |\r\n| Role     | Variables           | Values        |\r\n\r\nThis way you can simply use a function to find (for instance) the highest value in a list of numbers:\r\nExample\r\n*/\r\nx = findMax(1, 123, 500, 115, 44, 88);\r\n\r\nfunction findMax() {\r\n  let max = -Infinity;\r\n  for (let i = 0; i < arguments.length; i++) {\r\n    if (arguments[i] > max) {\r\n      max = arguments[i];\r\n    }\r\n  }\r\n  return max;\r\n}\r\n/*\r\n# Default Parameters\r\nIf a function is called with missing arguments (less than declared), the missing values are set to undefined.\r\n\r\nSometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:\r\n\r\nExample\r\n*/\r\nfunction myFunction(x, y) {\r\n  if (y === undefined) {\r\n    y = 2;\r\n  }\r\n}\r\n\r\n// Required arguments\r\nfunction add(a, b) {\r\n    return a + b;\r\n}\r\nconsole.log(add(2, 3));\r\n\r\n// Missing argument\r\nfunction greet(name) {\r\n    console.log(\"Hello\", name);\r\n}\r\ngreet();\r\n\r\n// Default argument\r\nfunction greetUser(name = \"Guest\") {\r\n    console.log(\"Hello\", name);\r\n}\r\ngreetUser();\r\n\r\n// Extra arguments\r\nfunction show(a, b) {\r\n    console.log(a, b);\r\n}\r\nshow(1, 2, 3, 4);\r\n\r\n// Arguments object\r\nfunction test() {\r\n    console.log(arguments);\r\n}\r\ntest(10, 20, 30);\r\n\r\n// Rest arguments\r\nfunction sum(...nums) {\r\n    return nums.reduce((a, b) => a + b);\r\n}\r\nconsole.log(sum(1, 2, 3, 4));\r\n\r\n// Arrow function (no arguments object)\r\nconst arrow = (...args) => {\r\n    console.log(args);\r\n};\r\narrow(5, 6, 7);",
        "language": "javascript"
    },
    {
        "id": "js-37",
        "category": "javascript",
        "title": "JAVASCRIPT ARRAYS - METHODS, SEARCH, SORT, ITERATIONS, REFERENCES, CONSTANTS",
        "description": "Comprehensive notes on JAVASCRIPT ARRAYS - METHODS, SEARCH, SORT, ITERATIONS, REFERENCES, CONSTANTS",
        "content": "// JAVASCRIPT ARRAYS - METHODS, SEARCH, SORT, ITERATIONS, REFERENCES, CONSTANTS\r\n/*\r\nAn array is a special variable, which can hold more than one value.\r\nIt is an ordered list of values that you can refer to with a name and an index.\r\n\r\nKey Characteristics:\r\n- Arrays are zero-indexed (first element is at 0).\r\n- They can hold different data types (strings, numbers, objects, etc.).\r\n- They are dynamic in size.\r\n- typeof returns \"object\".\r\n*/\r\n\r\n// Array Declaration\r\nlet fruits = [\"Apple\", \"Banana\", \"Mango\"];\r\nlet numbers = new Array(1, 2, 3, 4); // Alternative way\r\n\r\n// Accessing Elements\r\nconsole.log(fruits[0]); // Apple\r\nfruits[1] = \"Orange\"; // Modifying\r\n\r\n// Array Properties\r\nconsole.log(\"Length:\", fruits.length);\r\nconsole.log(\"IsArray:\", Array.isArray(fruits));",
        "language": "javascript"
    },
    {
        "id": "js-38",
        "category": "javascript",
        "title": "push() -> Add to end",
        "description": "Comprehensive notes on push() -> Add to end",
        "content": "BASIC ARRAY METHODS-----------------------\r\n/*\r\nMethods to add/remove and modify array elements.\r\n*/\r\nlet colors = [\"Red\", \"Green\", \"Blue\"];\r\n\r\n// push() -> Add to end\r\ncolors.push(\"Yellow\"); \r\n\r\n// pop() -> Remove from end\r\ncolors.pop(); \r\n\r\n// unshift() -> Add to start\r\ncolors.unshift(\"Purple\");\r\n\r\n// shift() -> Remove from start\r\ncolors.shift();\r\n\r\n// splice() -> Add/Remove at specific index\r\n// splice(index, count, item1, item2...)\r\ncolors.splice(1, 1, \"Pink\", \"White\"); \r\n\r\n// slice() -> Extract a portion (returns new array)\r\nlet part = colors.slice(1, 3);\r\n\r\n// concat() -> Merge arrays\r\nlet moreColors = [\"Grey\", \"Black\"];\r\nlet allColors = colors.concat(moreColors);\r\n\r\n// join() -> Convert to string with separator\r\nconsole.log(colors.join(\" - \"));",
        "language": "javascript"
    },
    {
        "id": "js-39",
        "category": "javascript",
        "title": "indexOf() -> First occurrence",
        "description": "Comprehensive notes on indexOf() -> First occurrence",
        "content": "ARRAY SEARCH METHODS-----------------------\r\n/*\r\nUsed to find elements or their positions in an array.\r\n*/\r\nlet arr = [\"A\", \"B\", \"C\", \"D\", \"B\"];\r\n\r\n// indexOf() -> First occurrence\r\nconsole.log(\"indexOf B:\", arr.indexOf(\"B\"));\r\n\r\n// lastIndexOf() -> Last occurrence\r\nconsole.log(\"lastIndexOf B:\", arr.lastIndexOf(\"B\"));\r\n\r\n// includes() -> Check if exists (true/false)\r\nconsole.log(\"Includes C:\", arr.includes(\"C\"));\r\n\r\n// find() -> Returns first element matching condition\r\nlet found = [10, 20, 30].find(n => n > 15);\r\n\r\n// findIndex() -> Returns index of first match\r\nlet foundIdx = [10, 20, 30].findIndex(n => n > 15);",
        "language": "javascript"
    },
    {
        "id": "js-40",
        "category": "javascript",
        "title": "sort() -> Sorts as strings by default",
        "description": "Comprehensive notes on sort() -> Sorts as strings by default",
        "content": "ARRAY SORT METHODS-----------------------\r\n/*\r\nUsed to reorder elements.\r\n*/\r\nlet unsorted = [40, 100, 1, 5, 25];\r\n\r\n// sort() -> Sorts as strings by default\r\nconsole.log(\"Default Sort:\", unsorted.sort()); \r\n\r\n// Numeric Sort (Compare Function)\r\nunsorted.sort((a, b) => a - b);\r\nconsole.log(\"Numeric Sort:\", unsorted);\r\n\r\n// reverse() -> Reverses order\r\nunsorted.reverse();\r\n\r\n// toSorted() / toReversed() (ES2023) -> Returns new array without mutating original\r\nlet newSorted = unsorted.toSorted();",
        "language": "javascript"
    },
    {
        "id": "js-41",
        "category": "javascript",
        "title": "forEach() -> Just loops",
        "description": "Comprehensive notes on forEach() -> Just loops",
        "content": "ARRAY ITERATION METHODS-----------------------\r\n/*\r\nMethods to loop through arrays and perform operations.\r\n*/\r\nlet myNums = [1, 2, 3, 4, 5];\r\n\r\n// forEach() -> Just loops\r\nmyNums.forEach(num => console.log(num));\r\n\r\n// map() -> Creates new array by transforming each element\r\nlet doubled = myNums.map(n => n * 2);\r\n\r\n// filter() -> Creates new array with elements that pass test\r\nlet evens = myNums.filter(n => n % 2 === 0);\r\n\r\n// reduce() -> Reduces array to a single value\r\nlet total = myNums.reduce((sum, n) => sum + n, 0);\r\n\r\n// every() -> Checks if ALL elements pass test\r\nconsole.log(\"All > 0:\", myNums.every(n => n > 0));\r\n\r\n// some() -> Checks if AT LEAST ONE element passes test\r\nconsole.log(\"Any > 4:\", myNums.some(n => n > 4));",
        "language": "javascript"
    },
    {
        "id": "js-42",
        "category": "javascript",
        "title": "const Arrays -> Cannot reassign the variable, but can modify content",
        "description": "Comprehensive notes on const Arrays -> Cannot reassign the variable, but can modify content",
        "content": "ARRAY CONSTANTS & REFERENCES-----------------------\r\n/*\r\nUnderstanding how arrays behave as objects and when using const.\r\n*/\r\n\r\n// const Arrays -> Cannot reassign the variable, but can modify content\r\nconst constantArr = [1, 2, 3];\r\nconstantArr.push(4); // OK\r\n// constantArr = [5, 6]; // Error!\r\n\r\n// Spread Operator (...) -> Useful for copying and merging\r\nlet copy = [...constantArr];\r\nlet merged = [...fruits, ...colors];\r\n\r\n// Destructuring\r\nlet [first, second] = fruits;\r\nconsole.log(first, second); // Apple Orange\r\n\r\n// Multidimensional Arrays\r\nlet matrix = [\r\n    [1, 2, 3],\r\n    [4, 5, 6]\r\n];\r\nconsole.log(matrix[0][1]); // 2",
        "language": "javascript"
    },
    {
        "id": "js-43",
        "category": "javascript",
        "title": "JAVASCRIPT MAPS - METHODS, PROPERTIES, AND ITERATION",
        "description": "Comprehensive notes on JAVASCRIPT MAPS - METHODS, PROPERTIES, AND ITERATION",
        "content": "// JAVASCRIPT MAPS - METHODS, PROPERTIES, AND ITERATION\r\n/*\r\nA Map is a collection of key-value pairs where keys can be of ANY data type (objects, functions, primitives).\r\nUnlike Objects, Maps maintain the insertion order of elements.\r\n\r\nKey Features:\r\n- Remembers insertion order.\r\n- Keys can be any value (even objects).\r\n- size property gives the number of elements.\r\n- Directly iterable.\r\n*/\r\n\r\n// Map Declaration\r\nlet myMap = new Map();\r\n\r\n// Adding Elements (set)\r\nmyMap.set(\"name\", \"Vivek\");\r\nmyMap.set(1, \"Numeric Key\");\r\nmyMap.set(true, \"Boolean Key\");\r\n\r\n// Accessing Elements (get)\r\nconsole.log(myMap.get(\"name\")); // Vivek\r\nconsole.log(myMap.get(1)); // Numeric Key\r\n\r\n// Map Properties\r\nconsole.log(\"Size:\", myMap.size);\r\n\r\n// Checking existence (has)\r\nconsole.log(\"Has age?:\", myMap.has(\"age\")); // false\r\n\r\n// Removing Elements (delete)\r\nmyMap.delete(1);\r\n\r\n// Clearing Map\r\n// myMap.clear();",
        "language": "javascript"
    },
    {
        "id": "js-44",
        "category": "javascript",
        "title": "for...of loop",
        "description": "Comprehensive notes on for...of loop",
        "content": "MAP ITERATION-----------------------\r\n/*\r\nWays to loop through a Map.\r\n*/\r\nlet userMap = new Map([\r\n    [\"id\", 101],\r\n    [\"role\", \"Admin\"],\r\n    [\"status\", \"Active\"]\r\n]);\r\n\r\n// for...of loop\r\nfor (let [key, value] of userMap) {\r\n    console.log(`${key}: ${value}`);\r\n}\r\n\r\n// forEach()\r\nuserMap.forEach((value, key) => {\r\n    console.log(key, value);\r\n});\r\n\r\n// Keys and Values\r\nconsole.log(userMap.keys());\r\nconsole.log(userMap.values());",
        "language": "javascript"
    },
    {
        "id": "js-45",
        "category": "javascript",
        "title": "JavaScript Concept 45",
        "description": "Comprehensive notes on JavaScript Concept 45",
        "content": "OBJECT vs MAP SUMMARY-----------------------\r\n/*\r\n| Feature      | Object                     | Map                         |\r\n| ------------ | -------------------------- | --------------------------- |\r\n| Key Types    | Strings and Symbols only   | Any value (Object, Function)|\r\n| Size         | Manual calculation         | `.size` property            |\r\n| Iteration    | Not directly iterable      | Directly iterable           |\r\n| Order        | Not guaranteed (usually)   | Insertion order guaranteed  |\r\n| Performance  | Better for small structures| Better for frequent add/del |\r\n*/",
        "language": "javascript"
    },
    {
        "id": "js-46",
        "category": "javascript",
        "title": "JAVASCRIPT SETS - METHODS, PROPERTIES, AND OPERATIONS",
        "description": "Comprehensive notes on JAVASCRIPT SETS - METHODS, PROPERTIES, AND OPERATIONS",
        "content": "// JAVASCRIPT SETS - METHODS, PROPERTIES, AND OPERATIONS\r\n/*\r\nA Set is a collection of UNIQUE values. Each value can occur only once in a Set.\r\nSets are useful for storing collections where duplicates are not allowed.\r\n\r\nKey Features:\r\n- No duplicate values.\r\n- Values can be of any type.\r\n- Elements are ordered by insertion.\r\n*/\r\n\r\n// Set Declaration\r\nlet mySet = new Set([1, 2, 3, 3, 4]); // Duplicate 3 is ignored\r\nconsole.log(mySet); // Set { 1, 2, 3, 4 }\r\n\r\n// Adding Elements (add)\r\nmySet.add(5);\r\nmySet.add(\"Hello\");\r\n\r\n// Checking existence (has)\r\nconsole.log(\"Has 3?:\", mySet.has(3)); // true\r\n\r\n// Removing Elements (delete)\r\nmySet.delete(2);\r\n\r\n// Set Properties\r\nconsole.log(\"Size:\", mySet.size);\r\n\r\n// Clearing Set\r\n// mySet.clear();",
        "language": "javascript"
    },
    {
        "id": "js-47",
        "category": "javascript",
        "title": "for...of loop",
        "description": "Comprehensive notes on for...of loop",
        "content": "SET ITERATION-----------------------\r\n/*\r\nWays to loop through a Set.\r\n*/\r\nlet fruitSet = new Set([\"Apple\", \"Banana\", \"Orange\"]);\r\n\r\n// for...of loop\r\nfor (let fruit of fruitSet) {\r\n    console.log(fruit);\r\n}\r\n\r\n// forEach()\r\nfruitSet.forEach(value => {\r\n    console.log(value);\r\n});",
        "language": "javascript"
    },
    {
        "id": "js-48",
        "category": "javascript",
        "title": "1. Removing duplicates from an array",
        "description": "Comprehensive notes on 1. Removing duplicates from an array",
        "content": "COMMON USE CASES-----------------------\r\n// 1. Removing duplicates from an array\r\nlet numbers = [1, 2, 2, 3, 4, 4, 5];\r\nlet uniqueNumbers = [...new Set(numbers)];\r\nconsole.log(uniqueNumbers); // [1, 2, 3, 4, 5]\r\n\r\n// 2. Counting unique elements\r\nlet tags = [\"js\", \"html\", \"js\", \"css\", \"html\"];\r\nconsole.log(\"Unique Tags:\", new Set(tags).size);",
        "language": "javascript"
    },
    {
        "id": "js-49",
        "category": "javascript",
        "title": "JavaScript Concept 49",
        "description": "Comprehensive notes on JavaScript Concept 49",
        "content": "ARRAY vs SET SUMMARY-----------------------\r\n/*\r\n| Feature      | Array                      | Set                         |\r\n| ------------ | -------------------------- | --------------------------- |\r\n| Duplicates   | Allowed                    | Not Allowed                 |\r\n| Access       | By Index (`arr[0]`)        | By Value (`set.has(val)`)   |\r\n| Order        | Insertion Order            | Insertion Order             |\r\n| Performance  | Better for index access    | Better for checking presence|\r\n*/",
        "language": "javascript"
    },
    {
        "id": "js-50",
        "category": "javascript",
        "title": "JAVASCRIPT OBJECTS - DEFINITIONS, METHODS, AND PROPERTIES",
        "description": "Comprehensive notes on JAVASCRIPT OBJECTS - DEFINITIONS, METHODS, AND PROPERTIES",
        "content": "// JAVASCRIPT OBJECTS - DEFINITIONS, METHODS, AND PROPERTIES\r\n/*\r\nAn Object is a standalone entity, with properties and type. It is a collection of related data and/or functionality.\r\nObjects consist of variables (properties) and functions (methods).\r\n\r\nKey Concepts:\r\n- Objects are key-value pairs.\r\n- Keys are strings or symbols, values can be any type.\r\n- Objects are reference types.\r\n*/\r\n\r\n// 1. Object Literal\r\nlet person = {\r\n    firstName: \"Vivek\",\r\n    lastName: \"Singh\",\r\n    age: 25,\r\n    isStudent: false,\r\n    \r\n    // Method inside object\r\n    fullName: function() {\r\n        return this.firstName + \" \" + this.lastName;\r\n    }\r\n};\r\n\r\n// 2. Accessing Properties\r\nconsole.log(person.firstName); // Dot notation\r\nconsole.log(person[\"lastName\"]); // Bracket notation (useful for dynamic keys)\r\n\r\n// 3. Adding/Updating Properties\r\nperson.city = \"Delhi\";\r\nperson.age = 26;\r\n\r\n// 4. Deleting Properties\r\ndelete person.isStudent;",
        "language": "javascript"
    },
    {
        "id": "js-51",
        "category": "javascript",
        "title": "JavaScript Concept 51",
        "description": "Comprehensive notes on JavaScript Concept 51",
        "content": "NESTED OBJECTS-----------------------\r\nlet company = {\r\n    name: \"Tech Corp\",\r\n    address: {\r\n        street: \"Main St\",\r\n        city: \"Mumbai\",\r\n        zip: 400001\r\n    },\r\n    employees: [\"Amit\", \"Rahul\"]\r\n};\r\n\r\nconsole.log(company.address.city); // Mumbai",
        "language": "javascript"
    },
    {
        "id": "js-52",
        "category": "javascript",
        "title": "JavaScript Concept 52",
        "description": "Comprehensive notes on JavaScript Concept 52",
        "content": "OBJECT METHODS & 'this'-----------------------\r\n/*\r\nThe 'this' keyword refers to the object that is executing the current piece of code.\r\nIn a method, 'this' refers to the owner object.\r\n*/\r\nlet car = {\r\n    brand: \"Tesla\",\r\n    model: \"Model 3\",\r\n    start: function() {\r\n        console.log(this.brand + \" is starting...\");\r\n    }\r\n};\r\ncar.start();",
        "language": "javascript"
    },
    {
        "id": "js-53",
        "category": "javascript",
        "title": "JavaScript Concept 53",
        "description": "Comprehensive notes on JavaScript Concept 53",
        "content": "OBJECT CONSTRUCTORS-----------------------\r\n/*\r\nUsed to create multiple objects of the same type.\r\n*/\r\nfunction User(name, age) {\r\n    this.name = name;\r\n    this.age = age;\r\n    this.sayHi = function() {\r\n        console.log(\"Hi, I am \" + this.name);\r\n    };\r\n}\r\n\r\nlet user1 = new User(\"Rahul\", 22);\r\nlet user2 = new User(\"Priya\", 24);",
        "language": "javascript"
    },
    {
        "id": "js-54",
        "category": "javascript",
        "title": "JavaScript Concept 54",
        "description": "Comprehensive notes on JavaScript Concept 54",
        "content": "OBJECT PROTOTYPES-----------------------\r\n/*\r\nPrototypes allow you to add new properties and methods to object constructors.\r\n*/\r\nUser.prototype.nationality = \"Indian\";\r\nconsole.log(user1.nationality);",
        "language": "javascript"
    },
    {
        "id": "js-55",
        "category": "javascript",
        "title": "1. Property Shorthand",
        "description": "Comprehensive notes on 1. Property Shorthand",
        "content": "ES6 OBJECT FEATURES-----------------------\r\n// 1. Property Shorthand\r\nlet name = \"Amit\";\r\nlet age = 20;\r\nlet student = { name, age }; // Instead of {name: name, age: age}\r\n\r\n// 2. Object Destructuring\r\nlet { firstName, lastName } = person;\r\nconsole.log(firstName);\r\n\r\n// 3. Spread Operator (Copying/Merging)\r\nlet details = { ...person, country: \"India\" };",
        "language": "javascript"
    },
    {
        "id": "js-56",
        "category": "javascript",
        "title": "Object.keys() -> Returns array of keys",
        "description": "Comprehensive notes on Object.keys() -> Returns array of keys",
        "content": "BUILT-IN OBJECT METHODS-----------------------\r\n/*\r\nEssential methods provided by the global Object constructor.\r\n*/\r\nlet data = { a: 1, b: 2, c: 3 };\r\n\r\n// Object.keys() -> Returns array of keys\r\nconsole.log(Object.keys(data));\r\n\r\n// Object.values() -> Returns array of values\r\nconsole.log(Object.values(data));\r\n\r\n// Object.entries() -> Returns array of [key, value] pairs\r\nconsole.log(Object.entries(data));\r\n\r\n// Object.assign() -> Copies properties from one or more source objects to a target object\r\nlet clone = Object.assign({}, data);\r\n\r\n// Object.freeze() -> Prevents any changes to the object\r\nObject.freeze(clone);\r\n\r\n// Object.seal() -> Prevents adding/deleting properties but allows modifying existing ones\r\nObject.seal(data);",
        "language": "javascript"
    },
    {
        "id": "js-57",
        "category": "javascript",
        "title": "for...in loop",
        "description": "Comprehensive notes on for...in loop",
        "content": "ITERATING THROUGH OBJECTS-----------------------\r\n// for...in loop\r\nfor (let key in person) {\r\n    console.log(key + \": \" + person[key]);\r\n}",
        "language": "javascript"
    },
    {
        "id": "js-58",
        "category": "javascript",
        "title": "JavaScript Concept 58",
        "description": "Comprehensive notes on JavaScript Concept 58",
        "content": "OBJECT SUMMARY TABLE-----------------------\r\n/*\r\n| Feature          | Description                                      |\r\n| ---------------- | ------------------------------------------------ |\r\n| Literal          | `let obj = {}`                                   |\r\n| Constructor      | `function Person() { ... }`                      |\r\n| `this`           | Refers to the current object context             |\r\n| `keys()`         | Returns an array of object's keys                |\r\n| `values()`       | Returns an array of object's values              |\r\n| `entries()`      | Returns an array of [key, value] pairs           |\n| Destructuring    | Extracting properties into variables             |\n| Spread (...)     | Cloning or merging objects                       |\n*/",
        "language": "javascript"
    }
];