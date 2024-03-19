// A list showing a programmer's skills in detail
var developerSkills = {
    Languages: ["JavaScript", "TypeScript", "Python"],
    framworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
// Getting specific skills from the list
var Languages = developerSkills.Languages, framworks = developerSkills.framworks, tools = developerSkills.tools;
// Showing a skill from each category
console.log("Language: ".concat(Languages[0], ", Framwork: ").concat(framworks[0], ", Tool: ").concat(tools[0]));
