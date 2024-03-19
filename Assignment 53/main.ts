// A list showing a programmer's skills in detail

let developerSkills = {
    Languages: ["JavaScript", "TypeScript", "Python"],
    framworks: ["React","Angular", "Vue"],
    tools:     ["Git" , "Webpack", "Docker"]
};

// Getting specific skills from the list

let { Languages, framworks, tools} = developerSkills;

// Showing a skill from each category
console.log(`Language: ${Languages[0]}, Framwork: ${framworks[0]}, Tool: ${tools[0]}`);