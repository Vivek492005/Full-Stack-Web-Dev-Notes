const fs = require('fs');
const path = require('path');

const notesFile = path.join(__dirname, 'JavaScript', 'JavaScript-Complete-Notes.js');
const outputFile = path.join(__dirname, 'website', 'scripts', 'data.js');

const content = fs.readFileSync(notesFile, 'utf-8');

// 1. Separate JavaScript from the rest
const separatorLine = "// ====================================================================================================";
const mainParts = content.split(separatorLine);
const jsPart = mainParts[0];
const otherPart = mainParts.length > 1 ? mainParts[1] : "";

let notesData = [];
let idCounter = 1;

// 2. Parse JavaScript modules using a very flexible regex for separators
// Matches //----, //____, /* ---- */, etc.
const jsModules = jsPart.split(/(?:\/\/|(?:\/\*))[\s\-_]{10,}.*?(?:\*\/)?/);

jsModules.forEach(mod => {
    const trimmed = mod.trim();
    if (!trimmed || trimmed.length < 100) return;

    // Find title: look for // at start of line
    const lines = trimmed.split('\n');
    let title = "";
    for (let line of lines) {
        if (line.trim().startsWith('//')) {
            title = line.replace('//', '').trim();
            break;
        } else if (line.trim().startsWith('/*')) {
            // Check next line or inside comment
            const clean = line.replace('/*', '').replace('*/', '').trim();
            if (clean && clean.length < 50) {
                title = clean;
                break;
            }
        }
    }

    if (!title) title = "JavaScript Concept " + idCounter;

    notesData.push({
        id: "js-" + idCounter++,
        category: "javascript",
        title: title,
        description: "Comprehensive notes on " + title,
        content: trimmed,
        language: "javascript"
    });
});

// 3. Parse Other Technologies
const techs = [
    { name: "HTML", category: "html", lang: "markup" },
    { name: "CSS", category: "css", lang: "css" },
    { name: "REACT", category: "react", lang: "jsx" },
    { name: "NEXTJS", category: "nextjs", lang: "tsx" },
    { name: "NODEJS", category: "nodejs", lang: "javascript" },
    { name: "DATABASE", category: "database", lang: "javascript" }
];

techs.forEach(tech => {
    const marker = "==================== " + tech.name + " ====================";
    if (otherPart.includes(marker)) {
        let techContent = otherPart.split(marker)[1].split("====================")[0].trim();
        
        // Clean up formatting artifacts
        techContent = techContent.replace(/^\/\*/, '').replace(/\*\/$/, '').trim();
        techContent = techContent.replace(/^<!--/, '').replace(/-->$/, '').trim();

        notesData.push({
            id: tech.category + "-" + idCounter++,
            category: tech.category,
            title: tech.name + " Mastery",
            description: "Full professional guide for " + tech.name,
            content: techContent,
            language: tech.lang
        });
    }
});

const outputContent = "const notesData = " + JSON.stringify(notesData, null, 4) + ";";
fs.writeFileSync(outputFile, outputContent);

console.log("Successfully parsed " + notesData.length + " modules into data.js");
