// This function finds where "code" first shows up in a text

function findCodePosition(str: string): number{
    return str.indexOf("code");
}

// Example: searching within a sentence
console.log(findCodePosition("learn to code with javaScript"));

// It tells us the position number where "code" starts.