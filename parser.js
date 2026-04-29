const fs = require('fs');
const path = require('path');

const notesFile = path.join(__dirname, 'JavaScript', 'JavaScript-Complete-Notes.js');
const outputFile = path.join(__dirname, 'website', 'scripts', 'data.js');

const content = fs.readFileSync(notesFile, 'utf-8');

// Even more flexible separator: any length of underscores inside a /* ... */ comment
const SEPARATOR_REGEX = /\/\*_{10,}.*?\*\//g;

let notesData = [];
let idCounter = 1;

// Split by the regex
const rawSections = content.split(SEPARATOR_REGEX);

rawSections.forEach((section) => {
    const trimmed = section.trim();
    if (!trimmed || trimmed.length < 50) return; // Skip small artifacts

    const lines = trimmed.split('\n');
    
    // Find first comment for title
    let title = "JavaScript Module";
    for (let line of lines) {
        if (line.trim().startsWith('//')) {
            title = line.replace('//', '').trim();
            break;
        }
    }

    if (title.includes('ALL WEB DEV NOTES')) return;

    notesData.push({
        id: "js-" + idCounter++,
        category: "javascript",
        title: title,
        description: "Full module notes and examples for " + title,
        content: trimmed,
        language: "javascript"
    });
});

// Handle special Tech Markers
const otherTechs = [
    { name: "HTML", category: "html", lang: "markup" },
    { name: "CSS", category: "css", lang: "css" },
    { name: "REACT", category: "react", lang: "jsx" },
    { name: "NEXTJS", category: "nextjs", lang: "tsx" },
    { name: "NODEJS", category: "nodejs", lang: "javascript" },
    { name: "DATABASE", category: "database", lang: "javascript" }
];

otherTechs.forEach(tech => {
    const startMarker = "==================== " + tech.name + " ====================";
    if (content.includes(startMarker)) {
        const parts = content.split(startMarker);
        if (parts.length > 1) {
            // Find the end of this tech's block (the next technology or end of file)
            let rawContent = parts[1].split("====================")[0].trim();
            // Clean up trailing */
            rawContent = rawContent.replace(/\*\/$/, '').trim();
            
            notesData.push({
                id: tech.category + "-" + idCounter++,
                category: tech.category,
                title: tech.name + " Mastery",
                description: "Comprehensive " + tech.name + " guide from basics to advanced.",
                content: rawContent,
                language: tech.lang
            });
        }
    }
});

const outputContent = "const notesData = " + JSON.stringify(notesData, null, 4) + ";";
fs.writeFileSync(outputFile, outputContent);

console.log("Successfully parsed " + notesData.length + " modules into data.js");
