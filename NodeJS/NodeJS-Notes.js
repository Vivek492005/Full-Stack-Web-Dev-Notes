/*
========================================================================================================================================================================
                                                                    NODE.JS & EXPRESS COMPLETE NOTES - SERVER, API, AND MIDDLEWARE
========================================================================================================================================================================

/*
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
It allows you to run JavaScript on the server. Express is a minimal and flexible 
Node.js web application framework that provides a robust set of features for web and mobile applications.

Key Concepts:
- Modules: Small, reusable pieces of code (CommonJS `require` vs ES6 `import`).
- npm: Node Package Manager for managing dependencies.
- Event Loop: Handles asynchronous operations in Node.js.
- Middleware: Functions that have access to the request/response objects.
- REST API: Architectural style for designing networked applications.
*/

// --------------------NODE.JS BUILT-IN MODULES-----------------------
const fs = require('fs');
const path = require('path');
const os = require('os');

// FS Example (Async)
// fs.writeFile('test.txt', 'Hello Node', (err) => { ... });

// Path Example
const fullPath = path.join(__dirname, 'folder', 'file.txt');

// --------------------EXPRESS SERVER SETUP-----------------------
/*
npm install express
*/
const express = require('express');
const app = express();
const PORT = 3000;

// Built-in Middleware
app.use(express.json()); // To parse JSON bodies

// --------------------ROUTING (HTTP METHODS)-----------------------
/*
GET: Retrieve data
POST: Create data
PUT: Update data
DELETE: Remove data
*/

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js API');
});

app.post('/api/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: "User created", data: newUser });
});

// --------------------CUSTOM MIDDLEWARE-----------------------
/*
Middleware runs before the route handler.
*/
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next(); // Pass control to next middleware
};

app.use(logger);

// --------------------ERROR HANDLING-----------------------
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// --------------------STARTING SERVER-----------------------
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// --------------------NODE/EXPRESS SUMMARY TABLE-----------------------
/*
| Feature          | Description                                      |
| ---------------- | ------------------------------------------------ |
| `require()`      | Method to import modules (CommonJS)              |
| `module.exports` | Exporting code from a file                       |
| `express()`      | Initializes the Express application              |
| `app.use()`      | Mounts middleware functions                      |
| `res.json()`     | Sends a JSON response                            |
| `req.params`     | Accesses route parameters (e.g. /user/:id)       |
| `req.query`      | Accesses URL query parameters                    |
---------------------------------------------------------------------- */
