const notesData = [
    {
        id: "js-vars",
        category: "javascript",
        title: "Variables & Declarations",
        description: "Understanding var, let, and const in modern JavaScript development.",
        content: `// VAR - Global/Function scope
var a = 10;
var a = 20; // Redeclaration possible

// LET - Block scope
let name = "Vivek";
name = "Hello World!"; // Reassignment possible

// CONST - Constant value
const PI = 3.14159;
// PI = 4; // Error: Assignment to constant variable`,
        language: "javascript",
        table: [
            { feature: "Scope", let: "Block", const: "Block" },
            { feature: "Update", let: "✅ Yes", const: "❌ No" },
            { feature: "Re-declare", let: "❌ No", const: "❌ No" }
        ]
    },
    {
        id: "js-strings",
        category: "javascript",
        title: "Strings & Templates",
        description: "Advanced string manipulation and Template Literals.",
        content: `// Template Strings
let user = "Vivek";
let welcome = \`Welcome back, \${user}!\`;

// Built-in Methods
let text = "JavaScript is awesome";
text.length; // 21
text.slice(0, 10); // "JavaScript"
text.replace("awesome", "cool");`,
        language: "javascript"
    },
    {
        id: "js-arrays",
        category: "javascript",
        title: "Array Power Methods",
        description: "Mastering Map, Filter, and Reduce for functional data processing.",
        content: `const nums = [1, 2, 3, 4, 5];

// MAP: Transform items
const doubled = nums.map(n => n * 2);

// FILTER: Selection
const evens = nums.filter(n => n % 2 === 0);

// REDUCE: Accumulation
const total = nums.reduce((acc, curr) => acc + curr, 0);`,
        language: "javascript"
    },
    {
        id: "js-objects",
        category: "javascript",
        title: "Deep Objects",
        description: "Prototypes, Destructuring, and Object shorthand properties.",
        content: `const user = {
    name: "Vivek",
    role: "Full Stack Developer",
    greet() {
        return \`Hi, I am \${this.name}\`;
    }
};

// Destructuring
const { name, role } = user;

// Spread Operator
const updatedUser = { ...user, active: true };`,
        language: "javascript"
    },
    {
        id: "react-hooks",
        category: "react",
        title: "Hooks Architecture",
        description: "Managing state and side effects in functional components.",
        content: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser(userId).then(data => setUser(data));
    }, [userId]);

    if (!user) return <Loading />;
    return <div>{user.name}</div>;
}`,
        language: "jsx"
    },
    {
        id: "nextjs-ssr",
        category: "nextjs",
        title: "Server Components",
        description: "The future of React rendering with Next.js App Router.",
        content: `// This is a Server Component by default
export default async function Page() {
    const data = await fetchData();

    return (
        <main>
            <h1>Server Side Data</h1>
            <pre>{JSON.stringify(data)}</pre>
        </main>
    );
}`,
        language: "tsx"
    },
    {
        id: "nodejs-express",
        category: "nodejs",
        title: "Scalable Backends",
        description: "Building RESTful APIs with Express.js and Middleware.",
        content: `const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api/data', (req, res) => {
    res.json({ status: "success", data: [] });
});

app.listen(8080);`,
        language: "javascript"
    },
    {
        id: "db-mongo",
        category: "database",
        title: "NoSQL Modeling",
        description: "Efficiently storing data with MongoDB and Mongoose.",
        content: `const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    profile: {
        bio: String,
        avatar: String
    }
});

const User = mongoose.model('User', userSchema);`,
        language: "javascript"
    },
    {
        id: "html-semantic",
        category: "html",
        title: "Modern Semantic HTML",
        description: "Improving accessibility and SEO with meaningful structure.",
        content: `<main>
    <article>
        <header>
            <h1>The Power of Semantics</h1>
        </header>
        <p>Using <main>, <section>, and <article> correctly...</p>
    </article>
</main>`,
        language: "markup"
    }
];
