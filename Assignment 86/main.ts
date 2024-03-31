// This function checks if a sentence has "javaScript" in it

function hasJavaScript(str: string): boolean {
    return str.includes("JavaScript");  
// checks for "JavaScript" and return true or false
}
console.log(hasJavaScript("I love coding in javaScript!"));