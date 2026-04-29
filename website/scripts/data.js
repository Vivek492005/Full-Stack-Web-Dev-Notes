const notesData = [
    {
        id: 1,
        category: "javascript",
        title: "Strings & Templates",
        description: "Modern string manipulation techniques including Template Literals.",
        content: `// Template Strings
let name = "Vivek";
let msg = \`Hello \${name}\`;

// Methods
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.trim());`,
        language: "javascript"
    },
    {
        id: 2,
        category: "javascript",
        title: "Array Methods",
        description: "Essential methods to transform and iterate over arrays.",
        content: `const fruits = ["Apple", "Banana"];
fruits.push("Mango"); // Add to end
fruits.pop(); // Remove from end

// Iteration
fruits.map(f => f.toUpperCase());
fruits.filter(f => f.length > 5);`,
        language: "javascript"
    },
    {
        id: 3,
        category: "html",
        title: "Semantic HTML5",
        description: "Using tags that describe their meaning for SEO and accessibility.",
        content: `<header>
  <h1>My Web Dev Notes</h1>
  <nav>
    <ul>
      <li><a href="#basics">Basics</a></li>
    </ul>
  </nav>
</header>`,
        language: "markup"
    },
    {
        id: 4,
        category: "css",
        title: "CSS Box Model",
        description: "Understanding Padding, Borders, and Margins.",
        content: `.box {
  width: 300px;
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
  box-sizing: border-box;
}`,
        language: "css"
    },
    {
        id: 5,
        category: "react",
        title: "State Management",
        description: "Using the useState hook to track component data.",
        content: `const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
    );
};`,
        language: "jsx"
    },
    {
        id: 6,
        category: "nextjs",
        title: "App Router",
        description: "Next.js file-system based routing fundamentals.",
        content: `// app/page.tsx -> /
export default function Home() {
    return <h1>Welcome to Next.js</h1>;
}`,
        language: "tsx"
    },
    {
        id: 7,
        category: "nodejs",
        title: "Express Server",
        description: "Setting up a minimal Express.js backend.",
        content: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(3000);`,
        language: "javascript"
    },
    {
        id: 8,
        category: "database",
        title: "Mongoose Schema",
        description: "Defining data structures for MongoDB using Mongoose.",
        content: `const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now }
});`,
        language: "javascript"
    }
];
